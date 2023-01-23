import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CircularProgress,
  DialogContentText,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  Switch,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import CardImage from "../../components/dashboard/card-image.component";
import { FabButton } from "../../components/dashboard/fab.component";
import axios from "axios";
import Swal from "sweetalert2";
import { ModalComponent } from "../../components/modal/modal.components";
import InputLabel from "@mui/material/InputLabel";

// https://dev.to/stephanieopala/server-side-pagination-in-react-js-material-ui-3bk
//https://medium.com/codeacademia/react-hooks-tutorial-usestate-useeffect-useref-usememo-dan-usecallback-8c8669948f8a

//modal
//https://codesandbox.io/s/4lue5r?file=/demo.js

export const Caraousel = () => {
  const URL_BASE = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [nameCaraousel, setNameCaraousel] = useState();
  const [photoCaraousel, setPhotoCaraousel] = useState();
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [dataCount, setDataCount] = useState(0);
  const [page, setPage] = useState(0);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const [reloadData, setReloadData] = useState(); //* untuk fetch jika fungsi delete / create berhasil
  const [controller, setController] = useState({
    page: 0,
    rowsPerPage: 8,
    offset: 0,
  });

  const handleChangeFiles = (e) => setPhotoCaraousel(e.target.files[0]);
  const handleChangeName = (e) => setNameCaraousel(e.target.value);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  //* function for delete data
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
              setReloadData(id);
            })
            .catch((err) => {
              if (err.response.data.code === 401) {
                localStorage.clear();
                navigate("/");
              }
              Swal.fire("Warning", err.response.data.message, "warning");
            });
        }
      });
    } catch (err) {
      Swal.fire("Peringatan !", err, "error");
    }
  };

  //* function for add data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const headers = {
        "Content-Type": "multipart/form-data",
        "x-access-token": JSON.parse(localStorage.getItem("user")).token,
      };
      const data = new FormData();

      data.append("photo", photoCaraousel);
      data.append("name", nameCaraousel);

      await axios
        .post(`${URL_BASE}/caraousel/create`, data, {
          headers: headers,
        })
        .then((res) => {
          console.log(res);
          Swal.fire("Sukses !", res.data.message, "success");
          setReloadData(res.data.result);
          setOpen(false);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.code === 401) {
            localStorage.clear();
            navigate("/");
          }

          Swal.fire("Warning", err.response.data.message, "warning");
        });
    } catch (err) {
      Swal.fire("Peringatan !", err, "error");
    }

    setLoading(false);
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
    setLoading(false);
    /**
     * * [controller] = maksudnya dependency controller jika ada perubahan di state controller akan melakukan useEffect
     * * [] = jika dependency array kosong akan melakukan perubahan sekali
     * *  jika tidak diberikan dependency akan dijalan terus menerus
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controller, reloadData]);

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
      {loading ? (
        <Box sx={{ display: "flex" }} justifyContent={"center"} paddingY={30}>
          <CircularProgress size={100} />
        </Box>
      ) : (
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
          <FabButton handleClick={() => handleOpen()} />
          <ModalComponent
            handleClose={() => handleClose()}
            onSubmit={(e) => handleSubmit(e)}
            open={open}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
            titlePost="Create New Post Caraousel"
          >
            <DialogContentText>
              You can set my maximum width and whether to adapt or not.
            </DialogContentText>
            <Box component={"div"} marginBottom={2}>
              <FormControl sx={{ mt: 2, minWidth: 200 }}>
                <InputLabel htmlFor="max-width">Size Dialog</InputLabel>
                <Select
                  autoFocus
                  value={maxWidth}
                  onChange={handleMaxWidthChange}
                  label="maxWidth"
                  inputProps={{
                    name: "max-width",
                    id: "max-width",
                  }}
                >
                  <MenuItem value={false}>None</MenuItem>
                  <MenuItem value="xs">Mini</MenuItem>
                  <MenuItem value="sm">Small</MenuItem>
                  <MenuItem value="md">Medium</MenuItem>
                  <MenuItem value="lg">Large</MenuItem>
                  <MenuItem value="xl">XL</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                sx={{ my: 3, mx: 2 }}
                control={
                  <Switch
                    checked={fullWidth}
                    onChange={handleFullWidthChange}
                  />
                }
                label="Full width"
              />
            </Box>
            <hr />
            <DialogContentText>Form Data Caraousel</DialogContentText>
            <Box
              component={"div"}
              sx={{ display: "flex", flexWrap: "wrap" }}
              marginTop={2}
            >
              <FormControl sx={{ mt: 2 }}>
                <TextField
                  required
                  id="nama-caraousel"
                  label="Name Caraousel"
                  name="name_caraousel"
                  onChange={handleChangeName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
            <Box component={"div"} marginTop={2}>
              <p style={{ margin: 0 }}>File Photo Caraousel</p>
              <FormControl sx={{ mt: 2 }}>
                <Input
                  required
                  type={"file"}
                  id="standard-file-caraousel"
                  name="file_caraousel"
                  label="File Photos"
                  onChange={handleChangeFiles}
                  inputProps={{ accept: "image/*" }}
                />
              </FormControl>
            </Box>
          </ModalComponent>
        </div>
      )}
    </div>
  );
};
