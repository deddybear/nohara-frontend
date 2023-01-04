import { Breadcrumbs, Link } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";

//TODO : component dibuat untuk dashboard
export default function NextBreadcrumbs() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathList = location.pathname.split("/");
  const filterPath = pathList.filter((item) => {
    return item !== "";
  });

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
                onClick={() => navigate(`/${item}`)}
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
