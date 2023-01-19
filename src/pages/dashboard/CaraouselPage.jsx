import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, TablePagination, Typography } from "@mui/material";
import CardImage from "../../components/dashboard/card-image.component";
import { FabButton } from "../../components/dashboard/fab.component";
import axios from "axios";
import Swal from "sweetalert2";

// https://dev.to/stephanieopala/server-side-pagination-in-react-js-material-ui-3bk
//https://medium.com/codeacademia/react-hooks-tutorial-usestate-useeffect-useref-usememo-dan-usecallback-8c8669948f8a

//modal
//https://codesandbox.io/s/4lue5r?file=/demo.js

export const Caraousel = () => {
  const URL_BASE = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [page, setPage] = useState(0);
  const [deleteId, setDeleteId] = useState("");
  const [controller, setController] = useState({
    page: 0,
    rowsPerPage: 8,
    offset: 0,
  });

  const handleAdd = useCallback(() => {
    console.log("");
  }, []);

  const handleDel = (id) => {
    try {
      Swal.fire({
        title: "Apakah Anda Yakin",
        text: "Data yang dihapus tidak bisa dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Hapus",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`${URL_BASE}/caraousel/delete/${id}`, {
              headers: {
                "Content-Type": "application/json",
                "x-access-token": JSON.parse(localStorage.getItem("user"))
                  .token,
              },
            })
            .then((res) => {
              Swal.fire("Sukses !", res.data.message, "success");
              setDeleteId(id);
            })
            .catch((err) => {
              console.log(err);
              if (err.response.data.code === 401) {
                localStorage.clear();
                navigate("/");
              }
              Swal.fire("Warning", err.response.data.message, "warning");
              //   console.log();
            });
        }
      });
    } catch (err) {
      Swal.fire("Peringatan !", err, "error");
    }
  };

  useEffect(() => {
    const fetchDataCaraousel = async () => {
      const url = `${URL_BASE}/caraousel/list?offset=${controller.offset}&limit=${controller.rowsPerPage}`;

      try {
        await axios
          .get(url)
          .then((res) => {
            // console.log(res.data.result.data);
            setDataCount(res.data.result.total);
            setData(res.data.result.data);
          })
          .catch((err) => Swal.fire("Peringatan !", err, "error"));
      } catch (err) {
        Swal.fire("Peringatan !", err, "error");
      }
    };

    fetchDataCaraousel();

    /**
     * * [controller] = maksudnya dependency controller jika ada perubahan di state controller akan melakukan useEffect
     * * [] = jika dependency array kosong akan melakukan perubahan sekali
     * *  jika tidak diberikan dependency akan dijalan terus menerus
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controller, deleteId]);

  const handlePageChange = (event, newPage) => {
    if (newPage > page) {
      setController({
        ...controller,
        page: newPage,
        offset: controller.offset + controller.rowsPerPage,
      });
    } else {
      setController({
        ...controller,
        page: newPage,
        offset: controller.offset - controller.rowsPerPage,
      });
    }

    setPage(newPage);
    // console.log(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setController({
      ...controller,
      rowsPerPage: parseInt(event.target.value),
      page: 0,
    });
  };

  return (
    <div>
      <TablePagination
        component="div"
        rowsPerPageOptions={[8, 16, 24, 32]}
        onPageChange={handlePageChange}
        page={controller.page}
        count={dataCount}
        rowsPerPage={controller.rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Grid
        container
        marginY={5}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
      >
        {data.length > 0 ? (
          data.map((item) => (
            <Grid xs={12} sm={6} md={6} lg={3} item={true} key={item.id}>
              <CardImage
                link={`${process.env.REACT_APP_SERVER_URL}${item.path}`}
                namePost={item.name}
                functionDelete={() => handleDel(item.id)}
              />
            </Grid>
          ))
        ) : (
          <Box mx={"auto"} mt={13}>
            <Typography align="center" variant="h3">
              Data Kosong
            </Typography>
          </Box>
        )}
      </Grid>
      <FabButton handleClick={() => handleAdd("opened")} />
    </div>
  );
};
