# Elder.js Tailwind Template

Based on https://github.com/elderjs/template

Elder.js: https://github.com/elderjs/elderjs

```bash
npx degit meigo/elderjs-template elderjs-tailwind
cd elderjs-tailwind
```

### Use Tailwind classes

directly in html of svelte componets

```html
<div class="grid grid-cols-1 gap-4 bg-red-400 sm:grid-cols-3"></div>
```

or with @apply directives in svelte component styles or globally in src/tailwind.css

```css
code {
  @apply px-1 text-sm bg-gray-300 rounded-lg mr-2 my-1 font-mono inline-block;
}
```

### Manual setup

```console
yarn add -D tailwindcss cssnano postcss-cli@7.1.2
```

```console
yarn add -D cross-env npm-run-all
```

- Create postcss.config.js

```console
code -r postcss.config.js
```

```js
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const plugins = process.env.NODE_ENV === 'production' ? [tailwind, autoprefixer, cssnano] : [tailwind, autoprefixer];

module.exports = { plugins };
```

- Create tailwind.config.js

```console
npx tailwindcss init
```

```js
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

- Delete style.css from assets folder

- Create tailwind.css file under src folder

```console
code -r src/tailwind.css
```

```css
@tailwind base;

h1,
h2,
h3,
h4 {
  @apply font-serif font-bold leading-9;
}

h1 {
  @apply text-4xl leading-10 my-6;
}

h2 {
  @apply text-xl leading-10 my-6;
}

h3 {
  @apply text-lg leading-10 my-6;
}

p {
  @apply text-base leading-6 my-6;
}

a {
  @apply text-red-500 underline;
}

.code,
code {
  @apply px-1 text-sm bg-gray-300 rounded-lg mr-2 my-1 font-mono inline-block;
}

body {
  @apply antialiased text-base text-gray-900 border-gray-800 border-t-8 pt-8 font-sans bg-gray-100;
}

@tailwind components;
@tailwind utilities;
```

- Modify svelte.config.js

```js
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: [
    sveltePreprocess({
      postcss: {},
    }),
  ],
};
```

- Modify package.json

```json
"scripts": {
  "dev": "run-p dev:server dev:rollup watch:tailwind",
  "watch:tailwind": "postcss src/tailwind.css -o public/style.css -w",
  "build:tailwind": "cross-env NODE_ENV=production postcss src/tailwind.css -o public/style.css",
  "start": "npm run build:rollup && npm run dev:server",
  "build": "node ./src/cleanPublic.js && npm run build:tailwind && npm run build:rollup && npm run build:html",
```

- Import tailwind.css into src/layouts/Layout.svelte

```js
import '../tailwind.css';
```
