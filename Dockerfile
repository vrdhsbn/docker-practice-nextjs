# ベースイメージの選択
# bookworm-slim は Debian 12 の軽量版
FROM node:22-bookworm-slim

# 作業ディレクトリを /app に設定
# compose.yamlのvolumesと同じパスにする
WORKDIR /app

# アプリケーションの依存ファイル (package.json と package-lock.json) をコンテナにコピー
# 今回は create next-app を Bun でやったからロックファイルが異なってしまうのか。
COPY package*.json ./

# npm を使って依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコンテナにコピー
COPY . .

# コンテナが使用するポート3000を公開
EXPOSE 3000

# npm を使ってアプリケーションを開発モードで起動
CMD ["npm", "run", "dev"]