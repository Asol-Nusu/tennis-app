import React from 'react'
import "../../styles/Header.css"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import Avatar from '@mui/material/Avatar';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img
                src='https://png.pngtree.com/png-clipart/20230802/original/pngtree-tennis-ball-realistic-sport-green-picture-image_7828516.png'
                alt=''
            />
            <div className='header__input'>
                <SearchIcon />
                <input placeholder='Search TennisConnect' type="text"/>
            </div>
        </div>  

        <div className='header__center'>
            <div className='header__option header__option--active'>
                <GroupsIcon fontSize="large"/>
            </div>
            <div className='header__option'>
                <SportsTennisIcon fontSize="large"/>
            </div>
            <div className='header__option'>
                <StorefrontIcon fontSize="large"/>
            </div>
        </div> 

        <div className='header__right'>
            <IconButton className='header__right_icon'>
                <EmailOutlinedIcon />
            </IconButton>
            <IconButton className='header__right_icon'>
                <NotificationsOutlinedIcon />
            </IconButton>

            <div className='header__info'>
                <Avatar style={{marginLeft: '5px'}} src='https://pbs.twimg.com/profile_images/1653050685426921475/Nsvo-X8w_400x400.jpg'/>
                <h4>Sol Baatyr</h4>
            </div>
        </div>
    </div>
  )
}

export default Header