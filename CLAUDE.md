# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

wolfortはポートフォリオ/プロフィールサイトです。運営しているWebサービスの紹介、連絡先、寄付情報などを掲載しています。

## Tech Stack

- Next.js 15 (App Router, `output: 'export'` による静的エクスポート)
- React 19
- TypeScript 5
- TailwindCSS 3.4
- ESLint + Prettier

## Commands

パッケージマネージャは pnpm を使用します。

```bash
# 開発サーバー起動
pnpm dev

# プロダクションビルド（out/ に静的エクスポート）
pnpm build

# ビルド結果をローカルで配信（wrangler dev）
pnpm preview

# Cloudflare Workersへ手動デプロイ（pnpm deploy はビルトインと衝突するため run 必須）
pnpm run deploy

# Lint実行
pnpm lint
```

## Project Structure

- `src/app/` - App Routerのページとレイアウト
  - `layout.tsx` - ルートレイアウト
  - `page.tsx` - トップページ（プロフィール、連絡先、Webサイト一覧を表示）
  - `globals.css` - グローバルスタイル（Tailwindベース + カードホバーアニメーション）
- `public/image/` - サイトで使用する画像

## Configuration Notes

- `next.config.mjs`: `output: 'export'` で静的エクスポート（basePathなし、profile.wolfort.dev で配信）
- `wrangler.jsonc`: Cloudflare Workers Static Assets 設定（`out/` を配信、カスタムドメイン profile.wolfort.dev）
- パスエイリアス: `@/*` → `./src/*`

## Code Style

- セミコロンなし
- シングルクォート（JSXも含む）
- インデント: 2スペース
- 末尾カンマなし
- 改行: LF

## Deployment

Cloudflare Workers Builds（Git連携）でデプロイする。mainブランチへのpushをCloudflareが検知し、`pnpm build` → `npx wrangler deploy` でCloudflare Workers (Static Assets) にデプロイされる。ビルド設定・ログはCloudflareダッシュボードの Workers & Pages > wolfort > Settings > Builds で管理する。GitHub側にCloudflareのAPIトークンは置かない。
