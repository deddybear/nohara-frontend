import { CircularProgress, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [statusLogged, setStatusLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem("user"));
    console.log(dataUser);
    //* if data user is not null status logged is true
    if (dataUser) {
      setStatusLogged(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    if (!loading) {
      setLoading(true);
      event.preventDefault();

      const data = new FormData(event.currentTarget);

      if (!data.get("username") || !data.get("password")) {
        Swal.fire(
          "Peringatan !",
          "Username & Password Tidak Boleh Kosong",
          "warning"
        );

        setLoading(false);
        return;
      }

      await login({
        username: data.get("username"),
        password: data.get("password"),
      })
        .then((result) => {
          setStatusLogged(true);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops... ada Kesalahan Server",
            text: err,
          });
        });

      setLoading(false);

      if (statusLogged) {
        return navigate("/dashboard/", { replace: true });
      }
    }
  };

  return (
    <div>
      {statusLogged ? (
        <Navigate to="/dashboard/" />
      ) : (
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                autoComplete="current-username"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Box sx={{ m: 1, position: "relative" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: blue[500],
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-12px",
                      marginLeft: "-12px",
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </div>
  );
};

export default LoginPage;
