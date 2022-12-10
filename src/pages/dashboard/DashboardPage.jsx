import React from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { connect } from 'react-redux';
import { NavBar } from '../../components/navbar/navbar.component';
import { SideBar } from '../../components/sidebar/sidebar.component';

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
                </Box>
                {`a : ${this.props.drawerWidth}`}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);