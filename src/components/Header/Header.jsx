import React from 'react'
import './header.css'
import { useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()

  const gotoHome =()=>{
    navigate("/")
  }

  const gotoLogin =()=>{
    navigate("/login")
  }

  return (
    <div>
        <div className="navbar-container">
            <div className='header-section1'>
                <img onClick={gotoHome} src="https://res.cloudinary.com/dlbodeuso/image/upload/v1718886387/logo_cienwq.png" alt="user story"/>
                <p onClick={gotoHome}>Dashboard</p>
            </div>
            <div className='header-section2'>
                
                <p onClick={gotoLogin}>Logout</p>
                <img src="https://res.cloudinary.com/dlbodeuso/image/upload/v1721393038/menu_ghniye.svg"/>
            </div>    
        </div>   

    </div>
  )
}

export default Header