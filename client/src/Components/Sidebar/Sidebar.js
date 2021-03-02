import React from 'react'
import '../Css/Sidebar.css'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';

function Sidebar() {
    return (
        <div className="Sidebar_container">
            {SidebarData.map((item,index) => {
                return <Submenu item={item} key={index}/>

               
        })}
            
        </div>
    )
}

export default Sidebar
