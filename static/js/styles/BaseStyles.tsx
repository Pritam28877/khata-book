// libs
import React, { memo } from 'react';
import { Global, css } from '@emotion/core';

// components
import Normalize from './Normalize';

// constants
import { BASE_FONT_SIZE, FONT_NAME, COLORS, COLORS_THEME } from './variables';

const baseStyles = css`
  html {
    font-size: ${BASE_FONT_SIZE};
    text-size-adjust: 100%;
  }

  body {
    font-family: ${FONT_NAME}, 'Ubuntu', 'Helvetica Neue', sans-serif;
    font-size: ${BASE_FONT_SIZE};
    color: ${COLORS.BASE_FONT};
    background-color: ${COLORS_THEME.APP_BACKGROUND};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html * {
    box-sizing: border-box;
  }
`;

function BaseStyles() {
  return (
    <>
      <Normalize />
      <Global styles={baseStyles} />
    </>
  );
}

export default memo(BaseStyles);
