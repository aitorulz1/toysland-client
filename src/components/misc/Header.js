
import React from 'react'
import {WithAuthConsumer} from '../context/AuthContext'
import Navbar from '../misc/Navbar'
import Search from '../src/Search'


const Header = ({currentUser, logout}) => {
  return(
    <div className="HeaderContainer">
        <Navbar />
        <Search />
    </div>
  )
}

export default WithAuthConsumer(Header)