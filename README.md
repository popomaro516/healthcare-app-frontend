# healthcare-app-frontend

このプロジェクトは、大学の授業で開発するヘルスケアアプリのフロントエンド部分です。

## プロジェクトのセットアップ



プロジェクトの依存関係をインストールします。

npm install

### 開発サーバーの起動

開発サーバーを起動します。

npm run dev


## 使用技術

- React
- TypeScript
- Vite
- Tailwind CSS

## ディレクトリ構造
- `pages`ディレクトリには、アプリケーションの各ページコンポーネントを作成します。
- `part`ディレクトリには、再利用可能な小さなコンポーネントを作成します。

app/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   ├── index.css
│   ├── main.tsx
│   ├── pages/
│   ├── part/
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は LICENSE ファイルを参照してください。