import { Breadcrumbs, Link } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";

//TODO : component dibuat untuk dashboard
export default function NextBreadcrumbs() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pathList = location.pathname.split("/");
  const filterPath = pathList.filter((item) => {
    return item !== "";
  });

  const handleClickBread = (link) => {
    navigate(link);
    dispatch({ type: 'CHOOSE_DASHBOARD'});
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" >
      {filterPath.map((item, index) => {
        return (
          <div key={index}>
            {filterPath.length === index + 1 ? (
              <h5>{item.charAt(0).toUpperCase() + item.slice(1)}</h5>
            ) : (
              <Link
                underline="none"
                color="inherit"
                onClick={() => handleClickBread(`/${item}`)}
              >
                <h5>{item.charAt(0).toUpperCase() + item.slice(1)}</h5>
              </Link>
            )}
          </div>
        );
      })}
    </Breadcrumbs>
  );
}
