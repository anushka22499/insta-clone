import React from 'react'
import instagramName from '../assets/assets/instagramName.png'
import '../assets/Component.css'
import explore from '../assets/assets/explore.png'
import messenger from '../assets/assets/messenger.png'
import { NavLink } from "react-router-dom";

function Sidemenu() {
    let activeStyle = {
        textDecoration: "underline",
      };
    
    
    return (
        <div className='sidemenu'>
            <div className='sidemenu_content'>
                <div className='app_logo'><img src={instagramName} width="110px" /></div>
                <div className='nav_links'>
                    <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "navlinks_title_activeStyle" : "navlinks_title"
                    }
                    > 
                    <svg xmlns="http://www.w3.org/2000/svg" fill={({ isActive }) =>isActive ? "navlinks_title_activeStyle" : "navlinks_title"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <p>Home</p>
                    </NavLink>
                    <NavLink
                    to="/searchpage"
                    className={({ isActive }) =>
                      isActive ? "navlinks_title_activeStyle" : "navlinks_title"
                    }
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                        <p>Search</p>
                    </NavLink>
                    <NavLink
                    to="/explore/"
                    className={({ isActive }) =>
                    isActive ? "navlinks_title_activeStyle" : "navlinks_title"
                  }
                    >
                        <img src={explore}/>
                        <p>Explore</p>
                    </NavLink>
                    <NavLink
                    to="/messagespage"
                    className={({ isActive }) =>
                    isActive ? "navlinks_title_activeStyle" : "navlinks_title"
                  }
                    >
                        <img src={messenger}/>
                        <p>Messages</p>
                    </NavLink>
                    <NavLink
                    to="/notificationpage"
                    className={({ isActive }) =>
                    isActive ? "navlinks_title_activeStyle" : "navlinks_title"
                  }
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                        <p>Notification</p>
                    </NavLink>
                    <NavLink
                    to="createnewpage"
                    className={({ isActive }) =>
                    isActive ? "navlinks_title_activeStyle" : "navlinks_title"
                  }
                    >
                    <svg style={{border:"solid 2px", borderRadius:"8px",width:"20px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                        <p>Create</p>
                    </NavLink>
                    <NavLink
                    to="/profilepage"
                    className={({ isActive }) =>
                    isActive ? "navlinks_title_activeStyle" : "navlinks_title"
                  }
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                        <p>Profile</p>
                    </NavLink>
                </div>
                <div className='nav_more'>
                <NavLink
                    to="/moremenu"
                    className={({ isActive }) =>
                    isActive ? "navlinks_title_activeStyle" : "navlinks_title"
                  }
                    >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                    <p>More</p>
                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidemenu