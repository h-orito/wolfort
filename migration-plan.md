# Next.js 15 & React 19 マイグレーション計画

## 現在のバージョン

| パッケージ | 現在 | 移行後 |
|-----------|------|--------|
| next | 14.2.1 | 15.5.7 |
| react | ^18 | 19.2.1 |
| react-dom | ^18 | 19.2.1 |
| @types/react | ^18 | ^19 |
| @types/react-dom | ^18 | ^19 |
| eslint-config-next | 14.2.1 | 15.5.7 |
| eslint | ^8 | ^9 |
| **パッケージマネージャー** | npm | pnpm |
| **Node.js (Docker)** | 21 | 24 |

## プロジェクト概要

- 小規模なポートフォリオサイト
- ファイル数: 2ファイル (layout.tsx, page.tsx)
- App Router使用
- 主な機能: 静的ページ表示、画像表示、外部リンク

## Breaking Changes 確認

### Next.js 14 → 15 の主な変更点

1. **React 19サポート**
   - React 19が必須

2. **async Request APIs**
   - `cookies()`, `headers()`, `params`, `searchParams` が非同期に
   - 本プロジェクトでは使用していないため影響なし

3. **Caching semantics の変更**
   - fetch requestsはデフォルトでキャッシュされなくなった
   - 本プロジェクトでは外部fetchを使用していないため影響なし

4. **next/image の変更**
   - `squoosh` が `sharp` に置き換え（本番環境で自動インストール）
   - 本プロジェクトでは静的画像のみ使用

5. **next.config.mjs**
   - 設定ファイルはそのまま使用可能

### React 18 → 19 の主な変更点

1. **ref が props として使用可能に**
   - `forwardRef` が不要に（本プロジェクトでは使用なし）

2. **Context の使い方変更**
   - `<Context>` として直接使用可能（本プロジェクトでは使用なし）

3. **新しいフック**
   - `use`, `useActionState`, `useFormStatus`, `useOptimistic` など追加

4. **TypeScript の変更**
   - `@types/react` の更新が必要

### npm → pnpm の変更点

1. **厳格な依存関係管理**
   - pnpmはphantom dependenciesを許可しない
   - 本プロジェクトは依存関係がシンプルなため影響なし

2. **ディスク容量の節約**
   - シンボリックリンクによるパッケージ共有

3. **高速なインストール**
   - キャッシュ効率が良い

## 移行手順

### Step 1: npm → pnpm への移行

```bash
# node_modulesとpackage-lock.jsonを削除
rm -rf node_modules package-lock.json

# pnpmでパッケージをインストール（まず現在のバージョンで）
pnpm install
```

### Step 2: 依存関係の更新

```bash
pnpm add next@15.5.7 react@19.2.1 react-dom@19.2.1
pnpm add -D @types/react@^19 @types/react-dom@^19 eslint-config-next@15.5.7
```

### Step 3: ESLint 設定の更新

Next.js 15ではESLint 9をサポート。既存のESLint 8設定でも動作するが、将来的にはflat config形式への移行を検討。

```bash
pnpm add -D eslint@^9
```

※ ESLint 9移行は任意。ESLint 8でも引き続き動作する。

### Step 4: コードの確認と修正

#### layout.tsx
- `React.ReactNode` の型定義は引き続き有効
- 特に修正不要

#### page.tsx
- `next/image` の `Image` コンポーネントは互換性あり
- `next/link` の `Link` コンポーネントは互換性あり
- 特に修正不要

### Step 5: ビルドとテスト

```bash
pnpm lint
pnpm build
pnpm dev
```

### Step 6: Dockerfile の更新

現在のDockerfile:
```dockerfile
FROM arm64v8/node:21-bullseye
...
COPY package*.json ./
...
RUN npm ci
RUN npm run build
...
CMD ["npm", "start"]
```

pnpm + Node.js 24 対応後のDockerfile:
```dockerfile
FROM arm64v8/node:24-bookworm

WORKDIR /app

# pnpmをインストール
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies based on the preferred package manager
COPY src src
COPY tsconfig.json tsconfig.json
COPY package.json pnpm-lock.yaml ./
COPY next.config.mjs next.config.mjs
COPY tailwind.config.ts tailwind.config.ts
COPY postcss.config.mjs postcss.config.mjs
COPY public public

RUN pnpm install --frozen-lockfile
RUN pnpm build

ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
# permission denied対策
RUN chown nextjs:nodejs /app/.next/cache

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOST 0.0.0.0
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

CMD ["pnpm", "start"]
```

**主な変更点:**
- `arm64v8/node:21-bullseye` → `arm64v8/node:24-bookworm` に変更（Node.js 24 + Debian 12）
- `corepack enable` でpnpmを有効化
- `package*.json` → `package.json pnpm-lock.yaml` に変更
- `npm ci` → `pnpm install --frozen-lockfile` に変更
- `npm run build` → `pnpm build` に変更
- `npm start` → `pnpm start` に変更

## リスク評価

| リスク | レベル | 備考 |
|--------|--------|------|
| ビルドエラー | 低 | シンプルな構成のため |
| ランタイムエラー | 低 | 動的機能を使用していない |
| 型エラー | 低 | @types更新で対応可能 |
| スタイル崩れ | なし | TailwindCSSは影響なし |
| pnpm移行 | 低 | 依存関係がシンプル |
| Dockerfile修正 | 低 | 変更箇所が明確 |

## 注意事項

1. **Node.js バージョン**
   - Next.js 15は Node.js 18.17以上が必要
   - Node.js 24に更新（Debian bookwormベース）

2. **ESLint flat config**
   - ESLint 9ではflat config形式が推奨されるが、従来の設定も動作する
   - 将来的に `.eslintrc.json` から `eslint.config.js` への移行を検討

3. **Turbopack (オプション)**
   - Next.js 15ではTurbopackが安定版に
   - `next dev --turbopack` で開発サーバーを高速化可能

4. **pnpm-lock.yaml**
   - `pnpm install` 実行時に自動生成される
   - gitにコミットすること

## 実行順序

1. node_modules と package-lock.json を削除
2. `pnpm install` で現在の依存関係をインストール
3. pnpmで依存関係を更新
4. `pnpm lint` で型エラーを確認
5. `pnpm build` でビルドエラーを確認
6. `pnpm dev` で動作確認
7. ブラウザで表示を確認
8. Dockerfileを更新
9. Dockerイメージをビルドして動作確認
