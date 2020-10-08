import React from 'react';
import Header from './common/header'
import store from './store/index'
import {Provider} from 'react-redux'

import {GlobalStyle} from './style'
import {IconGlobal} from './static/iconfont/iconfont'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <GlobalStyle />
        <IconGlobal />
        <Header></Header>
      </div>
    </Provider>

  );
}

export default App;
