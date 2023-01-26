import React, { useEffect, useState } from "react";
import { DrawerHeader } from "../../components/sidebar/sidebar.styles";
import axios from "axios";
import Swal from "sweetalert2";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AccordionCustom } from "../../components/dashboard/accordion.component";

//* contact

export const About = () => {
  const URL_BASE = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [tab, setTabs] = useState(false);
  const [isPanel, setIsPanel] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [contact, setContact] = useState({
    description: "",
    address: "",
    whatsapp: "",
    telephone: "",
    email: "",
    facebook: "",
    instagarm: "",
    tiktok: "",
  });

  useEffect(() => {
    const fetchDataContact = async () => {
      const url = `${URL_BASE}/contact`;
      try {
        await axios
          .get(url)
          .then((res) => {
            setContact(res.data.result);
            setLoading(false);
          })
          .catch((err) => Swal.fire("Peringatan !", err, "error"));
      } catch (err) {
        Swal.fire("Peringatan !", err, "error");
      }
    };
    fetchDataContact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdate]);

  const handleClik = (panel) => (event, isExpanded) => {
    // console.log(isExpanded);
    setIsPanel(panel);
    setTabs(isExpanded ? panel : false);
  };

  const handleSubmit = async (e, keys) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setLoading(true);

    try {
      const headers = {
        "Content-Type": "application/json",
        "x-access-token": JSON.parse(localStorage.getItem("user")).token,
      };

      const form = new FormData(e.currentTarget);

      const data = {
        [keys]: form.get(keys),
      };

      await axios
        .patch(`${URL_BASE}/contact/update/${keys}`, data, { headers: headers })
        .then((res) => {
          Swal.fire("Sukses !", res.data.message, "success");
          setIsUpdate(res.data.result);
        })
        .catch((err) => {
          if (err.response.data.code === 401) {
            localStorage.clear();
            navigate("/");
          }
          Swal.fire("Warning", err.response.data.message, "warning");
        });
    } catch (err) {
      Swal.fire("Peringatan !", err, "error");
    }
  };

  return (
    <div>
      <DrawerHeader />
      {isLoading ? (
        <Box sx={{ display: "flex" }} justifyContent={"center"} paddingY={30}>
          <CircularProgress size={100} />
        </Box>
      ) : (
        <div>
          {Object.entries(contact).map(([keys, value], i) => (
            <AccordionCustom
              key={i}
              tab={tab}
              keys={keys}
              handleChange={handleClik(keys)}
              handleSubmit={(e, keys) => handleSubmit(e, keys)}
              //   onChange={(e) => handleChange(e)}
              display={value}
              title={keys}
              defaultValue={value}
            />
          ))}
        </div>
      )}
    </div>
  );
};
