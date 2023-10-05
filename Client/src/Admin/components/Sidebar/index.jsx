import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SideBarItem from './sidebar-item';

import './styles.css';
// import logo from '../../assets/images/white-logo.png';
import LogoutIcon from '../../assets/icons/logout.svg';
import { Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Redux/authReducer/actions';

function SideBar ({ menu }) {
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }

    const handleLogout = () => {
// console.log("logout");
        dispatch(logout());
        navigate('/login');
        window.location.reload()
    }

    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    {/* <img
                        src={logo}
                        alt="logo" /> */}
                        <Heading color={"#fff"} m={"11%"}>shoesHub</Heading>
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer' onClick={() => handleLogout()}>
                        <span className='sidebar-item-label'>Logout</span>
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;