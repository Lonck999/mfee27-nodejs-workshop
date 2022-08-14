# NodeJS for MFEE 27

## How to setup ESLint & Prettier

### 需要安裝的 vscode 套件

- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

### vscode 的設定

settings.json

僅供參考，注意:

- 不要有重複出現的設定
- tabSize 與是否使用單引號(singleQuote) 請自行判斷決定

```json
"editor.formatOnSave": true,
"editor.tabSize": 2,
"window.title": "${activeEditorLong}${separator}${rootName}",
"window.zoomLevel": 1,
"editor.codeActionsOnSave": {
  // For ESLint and StyleLint
  "source.fixAll": true
},
"prettier.singleQuote": true,
//"prettier.configPath": ".prettierrc",
"eslint.format.enable": true,
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"eslint.alwaysShowStatus": true
```

### 需要安裝的 npm 套件

- 每個專案都要需要安裝一次
- `prettier` 可以安裝在 global （這樣就不用每個專案都安裝）

```bash
npm i --save-dev eslint-config-prettier eslint-plugin-prettier prettier
```

```json
"devDependencies": {
  "eslint-config-prettier": "^8.3.0",
  "eslint-plugin-prettier": "^4.0.0",
  "prettier": "^2.5.1"
}
```

### 專案中需要配置的設定檔

.prettierrc

```json
{
  "singleQuote": true,
  "printWidth": 180,
  "semi": true,
  "tabWidth": 2
}
```

.eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "rules": {}
}
```
