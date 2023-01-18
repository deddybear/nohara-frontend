import React, { useEffect, useState } from "react";
import { Grid, TablePagination } from "@mui/material";
import CardImage from "../../components/dashboard/card-image.component";
import { FabButton } from "../../components/dashboard/fab.component";
import axios from "axios";
import Swal from "sweetalert2";

// https://dev.to/stephanieopala/server-side-pagination-in-react-js-material-ui-3bk
// https://dev.to/stephanieopala/server-side-pagination-in-react-js-material-ui-3bk
//https://medium.com/codeacademia/react-hooks-tutorial-usestate-useeffect-useref-usememo-dan-usecallback-8c8669948f8a

//modal
//https://codesandbox.io/s/4lue5r?file=/demo.js
/**
 * * Component ini diperuntukan untuk fecth data
 * * agar bisa digunakan oleh halaman lain
 * * dan re-useable
 * @param {object} props
 */
export const Items = (props) => {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [page, setPage] = useState(0);
  const [controller, setController] = useState({
    page: 0,
    rowsPerPage: 8,
    offset: 0,
  });

  useEffect(() => {
    const fetchDataCaraousel = async () => {
      const url = `${process.env.REACT_APP_API_URL}/caraousel/list?offset=${controller.offset}&limit=${controller.rowsPerPage}`;

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
     * *  jika tidak diberikan dependency akan dijalan pada saat ada perubahaan semua state
     */
  }, [controller]);

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

  const handleClick = (dispatch) => {
    alert(dispatch);
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
        {data.map((item) => (
          <Grid xs={12} sm={6} md={6} lg={3} item={true} key={item.id}>
            <CardImage
              link={`${process.env.REACT_APP_SERVER_URL}${item.path}`}
              namePost={item.name}
            />
          </Grid>
        ))}
      </Grid>
      <FabButton handleClick={() => handleClick("opened")} />
    </div>
  );
};
