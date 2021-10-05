import React from 'react';
import SidebarMenu from '../sidebarMenu/SidebarMenu';
import './SidebarLeft.css';
import { useStateValue } from '../../StateProvider';

const Sidebar = () => {

    const [dark] = useStateValue();

    return (
        <div className={ ! dark.dark ? "sidebar" : "sidebarLight"}>
            <SidebarMenu />
        </div>
    )
}

export default Sidebar;
