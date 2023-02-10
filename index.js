'use strict';

const backgroundColor = '#3a3d4b';
const foregroundColor = '#eaf2f1';
const borderColor = '#CCCCCC';
const cursorColor = '#eaf2f1';
const selectionColor = '#eaf2f126';
const colors = {
  white: '#eaf2f1',
  black: '#3a3d4b',
  blue: '#ff9b5e',
  cyan: '#9cd1bb',
  green: '#bad761',
  magenta: '#c39ac9',
  red: '#ff657a',
  yellow: '#ffd76d',

  lightWhite: '#eaf2f1',
  lightBlack: '#696d77',
  lightBlue: '#ff9b5e',
  lightCyan: '#9cd1bb',
  lightGreen: '#bad761',
  lightMagenta: '#c39ac9',
  lightRed: '#ff657a',
  lightYellow: '#ffd76d',
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    selectionColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}

      // Inactive tab
      .tab_tab {
        background-color: #23252d;
        color: ${colors.lightBlack};
      }

      // Active tab
      .tab_tab:hover,
      .tab_tab.tab_active,
      .tabs_title,
      .tab_icon:before {
        background-color: ${backgroundColor};
        color: ${foregroundColor}
      }

      // Tab process icon
      .tab_tab:hover .tab_process:before,
      .tab_tab.tab_active .tab_process:before,
      .tabs_title .tab_process:before {
        background-color: ${foregroundColor}
      }
    `,
  });
};
