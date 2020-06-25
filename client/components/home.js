import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Head from './head'
import Header from './header'
import List from './list'
import Basket from './basket'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <Switch>
        <Route exact path="/" component={() => <List />} />
        <Route exact path="/basket" component={() => <Basket />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
