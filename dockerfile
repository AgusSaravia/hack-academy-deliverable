FROM node:22-alpine AS base
WORKDIR /ha-sql-deliverable
COPY package*.json ./
RUN npm install


FROM base AS dev
ENV NODE_ENV=development

EXPOSE 8080
CMD ["npm", "run", "dev"]
