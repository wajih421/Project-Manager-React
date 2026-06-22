import React from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box
} from "@mui/material";


import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";

import { Link } from "react-router-dom";


const menuItems = [
  {
    text:"Dashboard",
    icon:<DashboardIcon/>,
    path:"/"
  },
  {
    text:"Projects",
    icon:<FolderIcon/>,
    path:"/projects"
  }
];


function Sidebar(){


return (

<Drawer

variant="permanent"

sx={{

width:260,

"& .MuiDrawer-paper":{

width:260,

background:"#513030",

color:"white",

boxSizing:"border-box"

}

}}

>


<Box sx={{padding:3}}>

<Typography

variant="h5"

sx={{
fontWeight:"bold",
color:"#fafa60"
}}

>

My Dashboard

</Typography>


</Box>




<List>


{

menuItems.map((item)=>(


<ListItem key={item.text} disablePadding>


<ListItemButton


component={Link}

to={item.path}


sx={{

margin:"8px 15px",

borderRadius:"12px",

color:"white",

"&:hover":{

background:"#e8eb25"

}

}}


>


<ListItemIcon sx={{color:"white"}}>

{item.icon}

</ListItemIcon>



<ListItemText primary={item.text}/>


</ListItemButton>


</ListItem>


))


}



</List>


</Drawer>


)

}


export default Sidebar;