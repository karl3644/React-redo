### steps

1. create html page with <div id="root">not rendered</div> & <script type="module" src="./App.jsx"></script>
2. create App.jsx
3. initializes node project `npm init -y`
4. `npm i -D vite` & `npm i -D @vitejs/plugin-react`. add vite.config.js
5. `npm i react react-dom`
6. `npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`. update eslintrc.json

### optional

1. `npm i -D prettier` (D is save dev dependency). create .prettierrc file and give {} for default settings. in settings tick `prettier: require config`. add script to package.json `"format": "prettier --write \"src/**/*.{js, jsx}\"",`. run with npm run format.
2. `npm i -D eslint` & `npm i -D eslint-config-prettier`. add eslintrc.json and script `"lint": "eslint \"src/**/*.{js,jsx}\" --quiet",`
