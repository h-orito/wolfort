# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

wolfortはポートフォリオ/プロフィールサイトです。運営しているWebサービスの紹介、連絡先、寄付情報などを掲載しています。

## Tech Stack

- Next.js 14.2.1 (App Router)
- React 18
- TypeScript 5
- TailwindCSS 3.4
- ESLint + Prettier

## Commands

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start

# Lint実行
npm run lint
```

## Project Structure

- `src/app/` - App Routerのページとレイアウト
  - `layout.tsx` - ルートレイアウト
  - `page.tsx` - トップページ（プロフィール、連絡先、Webサイト一覧を表示）
  - `globals.css` - グローバルスタイル（Tailwindベース + カードホバーアニメーション）
- `public/profile/image/` - サイトで使用する画像

## Configuration Notes

- `next.config.mjs`: basePath が `/profile` に設定されている（wolfort.devのサブパスとしてデプロイされるため）
- パスエイリアス: `@/*` → `./src/*`

## Code Style

- セミコロンなし
- シングルクォート（JSXも含む）
- インデント: 2スペース
- 末尾カンマなし
- 改行: LF

## Deployment

GitHub Actions経由でself-hostedランナーを使用し、Dockerイメージをビルド→GitHub Container Registry (ghcr.io)にpush→Kubernetesにデプロイ
