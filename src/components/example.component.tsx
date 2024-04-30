import React from 'react';
import stylesCssModule from './module-css.module.css';
import stylesScssModule from './module-scss.module.scss';
import './regular-css.css';
import './regular-scss.scss';

import './module-css.module.css';
import './module-scss.module.scss';

const Example = () => (
  <div>
    <h1 className={stylesCssModule.styleRedCss}>Red from css-module</h1>
    <h1 className={stylesScssModule.styleGreenScss}>Green from scss-module</h1>
    <h1 className={'style_css_blue'}>Blue from regular css import</h1>
    <h1 className={'style_scss_red'}>Red from regular scss import</h1>
    <h1 className={'styleGreenCss'}>
      Green from import module as regular css import should not work
    </h1>
    <h1 className={'styleGreenScss'}>
      Blue from import module as regular scss import should not work
    </h1>
  </div>
);

export default Example;
