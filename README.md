# openRuyi Website

Guten Tag! This repository contains the source code for the openRuyi website.

Separate repositories maintain the documentation and news content, which are included as Git submodules:

 * `community` - openRuyi community articles, including localized content and assets.
 * `docs/` - openRuyi documentation, including localized documentation and documentation assets.
 * `news/` - openRuyi news, including localized news content and news assets.
 * `i18n/` - translations maintained by the website repository, such as UI and theme.

## Getting Started

This project uses [Docusaurus](https://docusaurus.io).

### Installation

1. Clone this repository together with its submodules:

```bash
git clone --recurse-submodules https://github.com/openRuyi-Project/homepage.git
```

If you already cloned the repository without submodules, initialize them with: `git submodule update --init --recursive`.

2. Change into the folder you just cloned into.
3. Run `npm ci` to install the project dependencies.
4. Run `npm run start:en` to start an English development server on `localhost:3000`.
5. (Optional) Run `npm run start:zh` to start a zh-Hans development server.
6. Run `npm run build` to generate static content into the `build` directory.
7. (Optional) Run `npm run preview` to preview the production build and test locale switching.
8. (Optional) Run `npm run build -- --locale zh-Hans` to build only zh-Hans.
9.  (Optional) Run `npm run build -- --locale en` to build only English.

> Note: Docusaurus dev server (`start`) runs one locale at a time. Switching locale in dev mode may return 404 if that locale server is not running. Use `start:en` / `start:zh` for locale-specific development, or `npm run preview` to test cross-locale navigation.

## Translations

Each repository maintains its own translation sources:

```
i18n/              Website UI and theme translations
docs/i18n/         Documentation translations
news/i18n/         News translations
community/i18n/    Community documentation translations
```

Development and build scripts combine these translation sources into `.generated-i18n` directory locally. **DO NOT** edit or commit files in that directory.

To update an existing translation, edit the source file in the repository that owns the corresponding content or Docusaurus plugin. Docusaurus **DOES NOT** update the translation sources in `i18n/`, `community/i18n`, `docs/i18n`, or `news/i18n` directly.

When new translatable UI or plugin strings appear, run `npm run write-translations -- --locale zh-Hans` (example for zh-Hans), review the generated changes, and manually apply the relevant JSON updates to the owning repository's `i18n/` directory.

## Run with GHCR Image

This repository publishes a container image to GHCR:

- `ghcr.io/openruyi-project/homepage:latest` (default branch)
- `ghcr.io/openruyi-project/homepage:sha-<commit>`
- `ghcr.io/openruyi-project/homepage:<version>` (for example, `1.2.3`)
- `ghcr.io/openruyi-project/homepage:<major>.<minor>` (for example, `1.2`)

Run directly:

```bash
docker run --rm -p 8080:80 ghcr.io/openruyi-project/homepage:latest
```

Then open <http://localhost:8080>.

## License

This project is licensed under the [Mulan Permissive Software License v2](./LICENSE) (MulanPSL-2.0).
