# Vitest config

`npm i -D vitest @testing-library/react @testing-library/jest-dom js-dom`

En `tsconfig.json` añadir:

```json
"types": ["vitest/globals"]
```

En `vite.config.ts` añadir en la cabecera:

```ts
/// <reference types="vitest" />
```

Y dentro:

```ts
test: {
  globals: true,
  environment: "jsdom",
  setupFiles: "./src/setupTests.ts",
},
```

Crear un archivo `src/setupTests.ts` con:

```ts
import "@testing-library/jest-dom";
```
