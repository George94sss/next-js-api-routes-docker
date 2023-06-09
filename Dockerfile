FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat

RUN mkdir -p /app/public
WORKDIR /app

COPY package.json tsconfig.json  next.config.js postcss.config.js tailwind.config.js ./
COPY pages  ./pages
COPY components  ./components
COPY public  ./public


RUN  npm install --production


FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/package.json /app/tsconfig.json /app/next.config.js /app/postcss.config.js /app/tailwind.config.js ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/public ./public
COPY --from=deps /app/pages  ./pages
COPY --from=deps /app/components  ./components




ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm","run", "start"]



# # base image
# FROM node:alpine
# RUN apk add --no-cache libc6-compat

# # create & set working directory
# RUN mkdir -p /usr/src
# WORKDIR /usr/src

# ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs


# # copy source files
# COPY . /usr/src

# # install dependencies
# RUN npm install -g npm@latest
# RUN npm install

# # start app
# RUN npm run build
# EXPOSE 3000
# CMD npm run start


# FROM node:18-alpine AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# RUN mkdir -p /app

# # package-lock.json 
# # COPY package.json ./
# COPY . .

# RUN npm install --production

# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY node_modules ./node_modules
# COPY --from=deps /app/* .

# ENV NEXT_TELEMETRY_DISABLED 1

# RUN npm run build


# FROM node:18-alpine AS runner
# WORKDIR /app

# ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/static ./static

# USER nextjs

# EXPOSE 3000

# ENV PORT 3000

# CMD ["npm", "run", "start"]
