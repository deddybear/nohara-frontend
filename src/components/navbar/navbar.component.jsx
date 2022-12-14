import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import { AppBar } from './navbar.styles';
import { useDispatch, useSelector } from 'react-redux';

export const NavBar = (props) => {
    const open = useSelector((state) => state.open)
    const theme = useTheme()
    const drawerWidth = useSelector((state) => state.drawerWidth)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({type: 'OPEN_SIDEBAR'})
    }

    return (
        <AppBar position="fixed" theme={theme} open={open} drawerwidth={drawerWidth}>
            <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleClick}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: 'none' }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Mini variant drawer
                </Typography>
            </Toolbar>
      </AppBar>
    );
}
