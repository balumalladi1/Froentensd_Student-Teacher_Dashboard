import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header />
      <div className='home-main-container'>
        <div className='home-sidebar'>
          <p>UserRegister</p>
          <Link to="/student">
            <p className='color1'>StudentDetails</p>
          </Link>
          <Link to="/teacher">
            <p>TeacherDetails</p> 
          </Link>   
          <p>Logout</p>
        </div> 
        <div className='home-main-content'>
          <img
            className='home-image-p'
            src="https://c8.alamy.com/comp/2FM3RB3/welcome-vector-illustration-for-the-opening-of-web-page-banner-presentation-social-media-documents-posters-or-greeting-cards-2FM3RB3.jpg"
            alt="Welcome"
          />
        </div>  
      </div>
    </>
  );
};

export default Home;