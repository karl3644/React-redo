### steps

1. create html page with `<div id="root">not rendered</div> & <script type="module" src="./App.jsx"></script>`
2. create App.jsx
3. initializes node project `npm init -y`
4. `npm i -D vite` & `npm i -D @vitejs/plugin-react`. add vite.config.js
5. `npm i react react-dom`

### optional

1. `npm i -D prettier` (D is save dev dependency). create .prettierrc file and give {} for default settings. in settings tick `prettier: require config`. add script to package.json `"format": "prettier --write \"src/**/*.{js, jsx}\"",`. run with npm run format.
2. `npm i -D eslint` & `npm i -D eslint-config-prettier`. add eslintrc.json and script `"lint": "eslint \"src/**/*.{js,jsx}\" --quiet",`
3. `npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`. update eslintrc.json
4. `npm install typescript --save-dev` & `npx tsc --init`. update tsconfig . `npm i -D @types/react @types/react-dom`

## react router dom

methods differ between different routers, choose a router on the react router docs. in this instance we are using `createBrowserRouter` which can handle new data APIs

at top level `import { createBrowserRouter, RouterProvider } from "react-router-dom";`

add routes as follows

```[javascript]
 const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage name="land prop" />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/Main",
        element: <Main />,
        errorElement: <ErrorPage />,
    },
 ]);
```

render `root.render(<RouterProvider router={router} />)` into root

When using link, add/remove `/` to have either none nested link, or nested

`<Link to="/FakeShop">Test</Link>` direct `root/FakeShop`
`<Link to="FakeShop">Test</Link>` through `root/main/FakeShop`

## app requirements/ideas

- typescript
- login/authentication
- sass/css modules
- TDD with vitest/jest
- data fetching and caching
- error boundaries. test with async try catch
<!-- put in error handing for missing links -->
- page to use react query? & page to use rtk?
- hooks practice. useRef, useReducer, useMemo
- code splitting (lazy & suspense)
- useDeferredValue & useTransition
