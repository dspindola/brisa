import { codeToANSI } from '@shikijs/cli';
export function loadShiki() {
  const theme: import('shiki').BundledTheme =
    (process.env.SHIKI_BUNDLED_THEME as any) || 'github-dark';
  const lang: import('shiki').BundledLanguage =
    (process.env.SHIKI_BUNDLED_LANG as any) || 'typescript';
  return (code: string) => codeToANSI(code, lang, theme);
}
