import React from "react"

import IconButton from '@material-ui/core/IconButton';

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';

function IconeSocial(){
    return( 
    <><IconButton href = "https://www.instagram.com/aeapolimi/" rel="noopener" target="_blank"><InstagramIcon style={{fill: "white"}}/></IconButton>
    <IconButton href = "https://www.linkedin.com/company/aeapolimi" rel="noopener" target="_blank"><LinkedInIcon style={{fill: "white"}}/></IconButton>
    <IconButton href = "https://t.me/aeapolimi" rel="noopener" target="_blank"><TelegramIcon style={{fill: "white"}}/></IconButton>
    </>
    )
}

export default IconeSocial