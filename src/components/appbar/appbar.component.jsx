import { useOutlet } from "react-router";
import { Box, CssBaseline } from "@mui/material";
import { NavBar } from "../navbar/navbar.component";
import { SideBar } from "../sidebar/sidebar.component";
import { connect } from "react-redux";

// https://codesandbox.io/s/react-router-v6-auth-demo-updated-t28l48?file=/src/components/HomeLayout.jsx:470-478

const mapStateToProps = (state) => {
  return {
    open: state.open,
    drawerWidth: state.drawerWidth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpen: () => dispatch({ type: "OPEN_SIDEBAR" }),
    handleClose: () => dispatch({ type: "CLOSE_SIDEBAR" }),
  };
};

function AppBarComponent() {
  const outlet = useOutlet();

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavBar />
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {outlet}
        </Box>
      </Box>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent)
