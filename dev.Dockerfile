FROM node:16-alpine

ENV NODE_ENV development

#add turborepo
RUN yarn global add turbo

# Set working directory
WORKDIR /app

# Install app dependencies
COPY  ["yarn.lock", "package.json", "./"] 

# Copy source files
COPY . .

# Install app dependencies
RUN yarn install

EXPOSE 3000 3333 5432

CMD ["yarn", "dev"]