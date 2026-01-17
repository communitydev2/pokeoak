import mantine from 'eslint-config-mantine';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

// @ts-check
export default defineConfig(
  tseslint.configs.recommended,
  ...mantine,
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] },
  {
    files: ['**/*.story.tsx'],
    rules: { 'no-console': 'off' },
  },
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.vue', '.ts', '.d.ts'],
            },
            alias: {
                extensions: ['.vue', '.js', '.ts', '.scss', '.d.ts'],
                map: [
                    ['@/components', './src/components'],
                    ['@/pages', './src/pages'],
                    ['@/router', './src/router'],
                    ['@/store', './src/store'],
                    ['@/styles', './src/styles'],
                    ['@/types', './src/types'],
                    ['@/utils', './src/utils'],
                ],
            },
        },
    },
  }
);
