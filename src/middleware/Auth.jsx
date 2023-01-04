import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Box, CssBaseline } from "@mui/material";

import { connect } from "react-redux";
import { NavBar } from "../components/navbar/navbar.component";
import { SideBar } from "../components/sidebar/sidebar.component";
import NextBreadcrumbs from "../components/breadcrumbs/breadcrumbs.component";
import { DrawerHeader } from "../components/sidebar/sidebar.styles";

//TODO : Auth and layout sidebar
const mapStateToProps = (state) => {
  return {
    open: state.open,
    drawerWidth: state.drawerWidth,
    menuText: state.menuText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpen: () => dispatch({ type: "OPEN_SIDEBAR" }),
    handleClose: () => dispatch({ type: "CLOSE_SIDEBAR" }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(() => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    console.log(user);
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <SideBar />
        <CssBaseline />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box padding={3}>
          <DrawerHeader />
            <NextBreadcrumbs />
            {outlet}
          </Box>
        </Box>
      </Box>
    </div>
  );
});
