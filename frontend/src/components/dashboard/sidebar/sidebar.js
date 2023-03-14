import React from 'react';
import { Link } from 'react-router-dom';
import { sidebarHeaders } from '../../../config/sidebarConfig';
import "./sidebar.css";
function Sidebar() {
    return (
        <div className='sidebar-outer'>
            {sidebarHeaders.map((tab, index)=>{
                return(
                    <>
                    <Link to ={tab.link} >
                    <ul key={index}>
                    <li>{tab.heading}</li>
                    </ul>
                    <hr />
                    </Link>
                    </>
                    
                )
            })}
        </div>
    );
}

export default Sidebar;