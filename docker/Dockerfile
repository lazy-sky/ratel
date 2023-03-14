# 노드 이미지 가져오기
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat

# working directory 지정
WORKDIR /app

# 패키지 목록 업데이트 및 최적화 
# RUN apt-get update -y && \
#     rm -rf /var/lib/apt/lists/*

# install 및 caching
COPY .yarn ./.yarn
COPY ["package.json", ".pnp.cjs", ".pnp.loader.mjs", "yarn.lock", ".yarnrc.yml", "./"]
RUN yarn set version stable 
# RUN yarn install --immutable --immutable-cache --production
RUN yarn plugin import workspace-tools
RUN yarn workspaces focus --production --all

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/.yarn ./.yarn
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/. ./.

RUN yarn rebuild

# USER nextjs

ENV APP_ENV "prod"
EXPOSE 4000
ENV PORT 4000

# CMD ["yarn", "start"]
ENTRYPOINT ["yarn", "start"]
