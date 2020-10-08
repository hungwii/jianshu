import React from 'react';
import Header from './common/header'
import {GlobalStyle} from './style'
import {IconGlobal} from './static/iconfont/iconfont'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IconGlobal />
      <Header></Header>
    </div>
  );
}

export default App;
