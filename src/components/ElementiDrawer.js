import React from "react"

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import CodeIcon from '@material-ui/icons/Code';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';

import { navigate } from "gatsby"

function ElementiDrawer(){
    return (
        <List>
            <ListItem button key="Login" onClick = {() => navigate("/UserPage")} style={{backgroundColor: "#ef6c00", color:"white"}}>
                <ListItemIcon><CodeIcon style={{fill: "white"}} /></ListItemIcon>
                <ListItemText primary="LOGIN" />
            </ListItem>
            <Divider />
            <ListItem button key="Home" onClick = {() => navigate("/")}>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="About" onClick = {() => navigate("/#about")}>
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
            <ListItem button key="Chi siamo" onClick = {() => navigate("/#team")}>
                <ListItemIcon><PeopleIcon /></ListItemIcon>
                <ListItemText primary="Chi siamo" />
            </ListItem>
            <Divider />
            <ListItem button key="FAQ" onClick = {() => navigate("/Domande")}>
                <ListItemIcon><QuestionAnswerIcon /></ListItemIcon>
                <ListItemText primary="FAQ" />
            </ListItem>
        </List>
    )
}

export default ElementiDrawer