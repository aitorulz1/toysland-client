
import React, { Fragment } from 'react'
import {WithAuthConsumer} from '../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-toysland.png'
import Logout from '../../assets/images/menu/logout-button.png'

const Navbar = ({currentUser, logout}) => {
  return(
    <div className="NavbarCotainer">
      <div className="NavbarCotainerContainer">
      <Link to="/" className="logo"><img src={logo} alt=""/><p>Toy's Land</p></Link>

      {currentUser ? (
        <Fragment>
          <button className="BtnLogOut" onClick={logout}><img src={Logout} alt=""/></button>
          <Link to="/product/new" className="BtnSubirProduct">Subir Producto</Link>
          <Link to="/profile" className="BtnMyAccount">Mi Cuenta</Link>
        </Fragment>
      ):(
        <Fragment>
          <Link to="/login" className="BtnMyAccount">Registrarse o Iniciar Sesión</Link>
          <Link to="/login" className="BtnSubirProduct">Subir Producto</Link> 
        </Fragment>
      )}
      </div>
    </div>
  )
}

export default WithAuthConsumer(Navbar)

