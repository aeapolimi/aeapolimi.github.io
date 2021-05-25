import React from "react"

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import CodeIcon from '@material-ui/icons/Code';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import { Link } from "gatsby-plugin-intl"
import 'fontsource-roboto';

function ElementiDrawer(props){
    return (
        <List>
            <ListItem button key="Login" component={Link} to="/userpage" style={{backgroundColor: "#ef6c00", color:"white"}}>
                <ListItemIcon><CodeIcon style={{fill: "white"}} /></ListItemIcon>
                <ListItemText primary="LOGIN" />
            </ListItem>
            <Divider />
            <ListItem button key="Home" component={Link} to="/" style={{color:"black"}}>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="About" component={props.home ? "a" : Link} href="#about" to="/#about" style={{color:"black"}}>
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
            <ListItem button key="team" component={props.home ? "a" : Link} href="#team" to="/#team" style={{color:"black"}}>
                <ListItemIcon><PeopleIcon /></ListItemIcon>
                <ListItemText primary="Team" />
            </ListItem>
            <Divider />
            <ListItem button key="Join us" component={Link} to="/associates" style={{color:"black"}}>
                <ListItemIcon><BusinessCenterIcon /></ListItemIcon>
                <ListItemText primary="Join us" />
            </ListItem>
            <ListItem button key="Insiders" component={Link} to="/insiders" style={{color:"black"}}>
                <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                <ListItemText primary="Insiders" />
            </ListItem>
            <ListItem button key="Events" component={Link} to="/events" style={{color:"black"}}>
                <ListItemIcon><EventIcon /></ListItemIcon>
                <ListItemText primary="Events" />
            </ListItem>
            <ListItem button key="Projects" component={Link} to="/projects" style={{color:"black"}}>
                <ListItemIcon><ComputerIcon /></ListItemIcon>
                <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button key="AEA+" component={Link} to="/aeaplus" style={{color:"black"}}>
                <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
                <ListItemText primary="AEA+" />
            </ListItem>
            <ListItem button key="FAQ" component={Link} to="/domande" style={{color:"black"}}>
                <ListItemIcon><QuestionAnswerIcon /></ListItemIcon>
                <ListItemText primary="FAQ" />
            </ListItem>
        </List>
    )
}

export default ElementiDrawer