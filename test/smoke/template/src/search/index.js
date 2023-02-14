'use strict';

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { common } from '../../common/index.js';
import logo from './images/1.jpeg';
import logo1 from './images/150.png';
import largeNumber from 'large-number-laffy';
import './search.less';

const Index = () => {
  const [Text, setText] = useState(null);

  const loadComponent = () => {
    import('./text.js').then(res => {
      setText(res.default);
    });
  };
  console.log(Text);
  return (
    <div className="search-text">
      hello react www
      {common()}
      {Text ? Text : ''}
      {largeNumber('999', '0')}
      <img src={logo} onClick={loadComponent} />
      <img src={logo1} />
    </div>
  );
};
createRoot(document.getElementById('root')).render(<Index />);
