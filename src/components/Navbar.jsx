import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";


const pages = ["Home", "About", "Services", "Contact"];


function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);


  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleCloseMenu = () => {
    setAnchorEl(null);
  };


  return (

    <AppBar 
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "black",
        borderBottom: "1px solid #ddd"
      }}
    >

      <Container maxWidth="lg">

        <Toolbar>


          {/* Logo */}

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              flexGrow: 1,
              color:"#1976d2"
            }}
          >
            MyBrand
          </Typography>



          {/* Desktop Menu */}

          <Box
            sx={{
              display:{
                xs:"none",
                md:"flex"
              },
              gap:3
            }}
          >

            {
              pages.map((page)=>(
                <Button
                  key={page}
                  sx={{
                    color:"black",
                    fontWeight:500,
                    "&:hover":{
                      color:"#1976d2"
                    }
                  }}
                >
                  {page}
                </Button>
              ))
            }


            <Button
              variant="contained"
              sx={{
                borderRadius:3,
                textTransform:"none",
                px:3
              }}
            >
              Login
            </Button>


          </Box>




          {/* Mobile Menu Button */}


          <Box
            sx={{
              display:{
                xs:"block",
                md:"none"
              }
            }}
          >

            <IconButton
              onClick={handleOpenMenu}
            >

              <MenuIcon />

            </IconButton>



            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >

              {
                pages.map((page)=>(

                  <MenuItem
                    key={page}
                    onClick={handleCloseMenu}
                  >

                    {page}

                  </MenuItem>

                ))
              }


              <MenuItem>
                Login
              </MenuItem>


            </Menu>


          </Box>



        </Toolbar>


      </Container>


    </AppBar>

  );

}


export default Navbar;