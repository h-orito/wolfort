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
