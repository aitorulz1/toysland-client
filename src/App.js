import React from 'react';
import './App.css';
import Header from './components/misc/Header'
import { Switch, Route } from 'react-router-dom'
import Home from './components/src/Home'
import Register from './components/misc/Register'
import Login from './components/misc/Login'
import Profile from './components/misc/Profile'
import UpProduct from './components/misc/UpProduct'
import Products from './components/misc/Products'
import EditProduct from './components/misc/EditProduct'
import SingleCategoryPage from './components/misc/SingleCategoryPage'
import SingleProduct from './components/misc/SingleProduct'
import PrivateRoute from './components/src/guards/PrivateRoute'
import Chat from './components/misc/Chat'
import ChatList from './components/misc/ChatList'
import Likes from './components/misc/Likes'


function App() {
  return (
    <div className="App">
      <Header />
       
      <Switch>
       
        <div className="BodyCont">

          <Route exact path="/" component={Home} />

          <Route exact path="/register" component={Register} />

          <Route exact path="/login" component={Login} />

          <PrivateRoute exact path="/profile" component={Profile} />

          <PrivateRoute exact path="/product/new" component={UpProduct} />

          <Route exact path="/products" component={Products} />

          <PrivateRoute exact path="/product/:id/edit" component={EditProduct} />

          <Route exact path="/categories/:category" component={SingleCategoryPage} />
          
          <Route exact path="/items/:id" component={SingleProduct} />
          
          <PrivateRoute exact path="/chat/:id" component={Chat} />
          
          <PrivateRoute exact path="/chats" component={ChatList} />
          
          <PrivateRoute exact path="/likes" component={Likes} />
          
          

          </div>
     
      </Switch>

    </div>
  );
}

export default App;
