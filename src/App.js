import React from 'react';
import Header from './common/header'
import store from './store/index'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './page/home/index.js'
import Detail from './page/detail/loadable.js'
import Login from './page/login/index'

import {GlobalStyle} from './style'
import {IconGlobal} from './static/iconfont/iconfont'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <GlobalStyle />
        <IconGlobal />
        <BrowserRouter>
          <>
            <Header></Header>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </>
        </BrowserRouter>
      </div>
    </Provider>

  );
}

export default App;
