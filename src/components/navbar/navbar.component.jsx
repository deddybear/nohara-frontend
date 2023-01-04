import React from 'react'
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from './navbar.styles';
import { useDispatch, useSelector } from 'react-redux';

//TODO : component dibuat untuk dashboard
export const NavBar = (props) => {
    const open = useSelector((state) => state.open)
    const theme = useTheme()
    const drawerWidth = useSelector((state) => state.drawerWidth)
    const menuText = useSelector((state) => state.menuText);
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
                  {menuText}
                </Typography>
            </Toolbar>
      </AppBar>
    );
}
