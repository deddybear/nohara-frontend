import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import { DrawerHeader } from "../components/sidebar/sidebar.styles";
import { DrawerDashboard } from "../components/dashboard/drawer.component";
import NextBreadcrumbs from "../components/breadcrumbs/breadcrumbs.component";


//TODO : Auth and layout sidebar
const mapStateToProps = (state) => {
  return {
    open: state.open,
    drawerWidth: state.drawerWidth,
    menuText: state.menuText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpen: () => dispatch({ type: "OPEN_SIDEBAR" }),
    handleClose: () => dispatch({ type: "CLOSE_SIDEBAR" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <DrawerDashboard />
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
