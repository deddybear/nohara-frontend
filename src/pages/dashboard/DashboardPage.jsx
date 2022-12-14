import React from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { connect } from 'react-redux';
import { NavBar } from '../../components/navbar/navbar.component';
import { SideBar } from '../../components/sidebar/sidebar.component';
import { Typography } from '@mui/material';
import { DrawerHeader } from '../../components/sidebar/sidebar.styles';

const mapStateToProps = (state) => {
    return {
        open: state.open,
        drawerWidth: state.drawerWidth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOpen: () => dispatch({type: 'OPEN_SIDEBAR'}),
        handleClose: () => dispatch({type: 'CLOSE_SIDEBAR'})
    }
}

class Dashboard extends React.Component {

    render(){
        // console.log(this.props);
        return (
            <div>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline/>
                    <NavBar/>
                    <SideBar/>
                    <Box component="main" sx={({ flexGrow: 1, p: 3})}>
                        <DrawerHeader/>
                        <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
                        </Typography>

                    </Box>
                </Box>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);