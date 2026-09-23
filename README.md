# Gleap JavaScript Admin Helper

A DOM element picker used by Gleap admin tools. It lets a user select a page element and returns a unique CSS selector through `onElementPicked`.

The helper switches between `picker` and `navigate` modes. It excludes the Gleap admin overlay from selection.

For customer-facing live chat, in-app bug reporting and feedback, use the [Gleap JavaScript SDK](https://github.com/GleapSDK/JavaScript-SDK).

[Gleap](https://www.gleap.ai) · [JavaScript SDK documentation](https://docs.gleap.ai/documentation/javascript/README)

## Development

The package uses Webpack and Babel. Its source is in `src/lib/index.js`.

```sh
npm install
npm run build
```

## Attribution and license

The build setup originated from Francisco Hodge's [JavaScript Library Boilerplate Basic](https://github.com/hodgef/js-library-boilerplate-basic). See [LICENSE](LICENSE) for the retained MIT license and copyright notice.
