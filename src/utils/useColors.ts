export default function useColors() {

  type qColorToken = {
    [x: string]: string
  }

  /**
   * 将生成的样式嵌入头部
   */
  const insertThemeStylesheet = (theme: string, colorMap: qColorToken, mode: 'light' | 'dark') => {
    const isDarkMode = mode === 'dark';
    const root = !isDarkMode ? `:root[theme-color='${theme}']` : `:root[theme-color='${theme}'][theme-mode='dark']`;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `${root}{
      --qp-logo-bg-color: ${colorMap['--qp-logo-bg-color']};
      --qp-logo-text-color: ${colorMap['--qp-logo-text-color']};
    }`;

    document.head.appendChild(styleSheet);
  }

  const init = () => {
    const DEFAULT_COLOR = {
      '--qp-logo-bg-color': '#20222a',
      '--qp-logo-text-color': '#fff'
    }
    insertThemeStylesheet('Q', DEFAULT_COLOR, 'light')
    const html = document.querySelector('html')
    html?.setAttribute('theme-color', 'Q')
    // html?.setAttribute('class', 'dark')
  }

  return {
    init,
    insertThemeStylesheet
  }
}