FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:20-alpine as runner

ENV NODE_ENV=production
ENV PORT=3050

WORKDIR /app
COPY --from=builder /app/.output /app/.output

EXPOSE 3050

CMD [ "node", ".output/server/index.mjs"]