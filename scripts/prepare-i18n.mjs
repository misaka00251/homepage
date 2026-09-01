// Collects localization files from the homepage, docs, and news repositories.
// The merged output is written to .generated-i18n for Docusaurus to consume.

import { access, cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const output = path.join(root, '.generated-i18n');

async function exists(filePath) {
    try {
        await access(filePath);
        return true;
    } catch {
        return false;
    }
}

async function copyRequired(src, dest) {
    if (!(await exists(src))) {
        throw new Error(
            `Required i18n source does not exist:\n${src}\n\n` +
            'Make sure all submodules are initialized.',
        );
    }

    await mkdir(path.dirname(dest), { recursive: true });
    await cp(src, dest, { recursive: true });
}

async function copyOptional(src, dest) {
    if (!(await exists(src))) {
        return;
    }

    await mkdir(path.dirname(dest), { recursive: true });
    await cp(src, dest, { recursive: true });
}

// Generate fresh i18n each time
await rm(output, {
    recursive: true,
    force: true,
});

const locale = 'zh-Hans';

// homepage's own i18n files
await copyOptional(
    path.join(root, 'i18n', locale, 'code.json'),
    path.join(output, locale, 'code.json'),
);

await copyOptional(
    path.join(root, 'i18n', locale, 'docusaurus-theme-classic'),
    path.join(output, locale, 'docusaurus-theme-classic'),
);

// community repo own it's i18n files
await copyRequired(
    path.join(
        root,
        'community',
        'i18n',
        locale,
        'docusaurus-plugin-content-docs-community',
    ),
    path.join(
        output,
        locale,
        'docusaurus-plugin-content-docs-community',
    ),
);

// docs repo own it's i18n files
await copyRequired(
    path.join(
        root,
        'docs',
        'i18n',
        locale,
        'docusaurus-plugin-content-docs',
    ),
    path.join(
        output,
        locale,
        'docusaurus-plugin-content-docs',
    ),
);

// news repo own it's i18n files
await copyRequired(
    path.join(
        root,
        'news',
        'i18n',
        locale,
        'docusaurus-plugin-content-blog',
    ),
    path.join(
        output,
        locale,
        'docusaurus-plugin-content-blog',
    ),
);

console.log(`Prepared i18n files in ${output}`);
