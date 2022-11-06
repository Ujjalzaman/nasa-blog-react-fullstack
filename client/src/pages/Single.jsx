import React from 'react'
import { Link } from 'react-router-dom';
import Delete from '../assets/delete.png';
import Edit from '../assets/edit.png';
import Menu from './Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      
        <div className="user">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
          
          <div className="info">
            <span>Ujjal zaman</span>
            <p>Posted : Date 4 Feb 2022</p>
          </div>

          <div className="edit">
              <Link><img src={Edit} alt="" /></Link>
              <Link><img src={Delete} alt="" /></Link>
          </div>

        </div>
        
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</p>
      </div>

      <Menu/>
    </div>
  )
}

export default Single