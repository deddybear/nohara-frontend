import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DrawerHeader } from "../../components/sidebar/sidebar.styles";
import axios from "axios";
import Swal from "sweetalert2";
import { Box } from "@mui/system";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";

//* contact

export const About = () => {
  const URL_BASE = process.env.REACT_APP_API_URL;
  const [tab, setTabs] = useState(false);
  const [isPanel, setIsPanel] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [contact, setContact] = useState({
    desc_company: "",
    address: "",
    whatsapp: "",
    telephone: "",
    email: "",
    facebook: "",
    instagarm: "",
    tiktok: "",
  });

  const handleChange = (panel) => (event, isExpanded) => {
    // console.log(isExpanded);
    setIsPanel(panel);
    console.log(isPanel);
    setTabs(isExpanded ? panel : false);
  };

  useEffect(() => {
    const fetchDataContact = async () => {
      const url = `${URL_BASE}/contact`;
      try {
        await axios
          .get(url)
          .then((res) => {
            // console.log(res.data.result);

            setContact(res.data.result);
          })
          .catch((err) => Swal.fire("Peringatan !", err, "error"));
      } catch (err) {
        Swal.fire("Peringatan !", err, "error");
      }
    };
    fetchDataContact();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdate]);

  return (
    <div>
      <DrawerHeader />
      <Accordion expanded={tab === "desc"} onChange={handleChange("desc")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="desctab-content"
          id="desctab-header"
        >
          {tab === "desc" ? (
            <Grid>
              <Typography>
                <b>Edit Description Company</b>
              </Typography>
            </Grid>
          ) : (
            <Grid container>
              <Grid item xs={4}>
                {" "}
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Description Company
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography sx={{ color: "text.secondary" }}>
                  {contact.desc_company.substring(0, 75)} ....
                </Typography>
              </Grid>
            </Grid>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Box component={"form"} onSubmit={() => alert("submit")}>
            <Grid container marginBottom={3}>
              <Grid item xs={2}>
                Description Company
              </Grid>
              <Grid item xs={10}>
                <TextField
                  focused
                  required
                  fullWidth
                  multiline
                  id="outlined-multiline-static"
                  label="Description Company"
                  rows={5}
                  defaultValue={contact.desc_company}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                Edit
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={tab === "address"}
        onChange={handleChange("address")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="address-content"
          id="address-header"
        >
          {tab === "address" ? (
            <Grid>
              <Typography>
                <b>Edit Adress Company</b>
              </Typography>
            </Grid>
          ) : (
            <Grid container>
              <Grid item xs={4}>
                {" "}
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Adress Company
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography sx={{ color: "text.secondary" }}>
                  {contact.address.substring(0, 30)} ....
                </Typography>
              </Grid>
            </Grid>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Box component={"form"} onSubmit={() => alert("submit")}>
            <Grid container marginBottom={3}>
              <Grid item xs={2}>
                Address Company
              </Grid>
              <Grid item xs={10}>
                <TextField
                  focused
                  required
                  fullWidth
                  multiline
                  id="outlined-multiline-static"
                  label="Address Company"
                  rows={5}
                  defaultValue={contact.address}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                Edit
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={tab === "email"} onChange={handleChange("email")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="email-content"
          id="email-header"
        >
          {tab === "email" ? (
            <Grid>
              <Typography>
                <b>Edit Email Company</b>
              </Typography>
            </Grid>
          ) : (
            <Grid container>
              <Grid item xs={4}>
                {" "}
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Email Company
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography sx={{ color: "text.secondary" }}>
                  {contact.email}
                </Typography>
              </Grid>
            </Grid>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Box component={"form"} onSubmit={() => alert("submit")}>
            <Grid container marginBottom={3}>
              <Grid item xs={2}>
                Email Company
              </Grid>
              <Grid item xs={10}>
                <TextField
                  focused
                  required
                  fullWidth
                  multiline
                  id="outlined-multiline-static"
                  label="Email Company"
                  rows={5}
                  defaultValue={contact.email}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                Edit
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={tab === "telephone"}
        onChange={handleChange("telephone")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="telephone-content"
          id="telephone-header"
        >
          {tab === "telephone" ? (
            <Grid>
              <Typography>
                <b>Edit Telephone Company</b>
              </Typography>
            </Grid>
          ) : (
            <Grid container>
              <Grid item xs={4}>
                {" "}
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Telephone Company
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography sx={{ color: "text.secondary" }}>
                  {contact.telephone}
                </Typography>
              </Grid>
            </Grid>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Box component={"form"} onSubmit={() => alert("submit")}>
            <Grid container marginBottom={3}>
              <Grid item xs={2}>
                Telephone Company
              </Grid>
              <Grid item xs={10}>
                <TextField
                  focused
                  required
                  fullWidth
                  multiline
                  id="outlined-multiline-static"
                  label="Telephone Company"
                  rows={5}
                  defaultValue={contact.telephone}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                Edit
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={tab === "whatsapp"}
        onChange={handleChange("whatsapp")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="whatsapp-content"
          id="whatsapp-header"
        >
          {tab === "whatsapp" ? (
            <Grid>
              <Typography>
                <b>Edit Whatsapp Company</b>
              </Typography>
            </Grid>
          ) : (
            <Grid container>
              <Grid item xs={4}>
                {" "}
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Whatsapp Company
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography sx={{ color: "text.secondary" }}>
                  {contact.whatsapp}
                </Typography>
              </Grid>
            </Grid>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Box component={"form"} onSubmit={() => alert("submit")}>
            <Grid container marginBottom={3}>
              <Grid item xs={2}>
                Whatsapp Company
              </Grid>
              <Grid item xs={10}>
                <TextField
                  focused
                  required
                  fullWidth
                  multiline
                  id="outlined-multiline-static"
                  label="Whatsapp Company"
                  rows={5}
                  defaultValue={contact.whatsapp}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                Edit
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={tab === "facebook"}
        onChange={handleChange("facebook")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="facebook-content"
          id="facebook-header"
        >
          {tab === "facebook" ? (
            <Grid>
              <Typography>
                <b>Edit Facebook Company</b>
              </Typography>
            </Grid>
          ) : (
            <Grid container>
              <Grid item xs={4}>
                {" "}
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Facebook Company
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography sx={{ color: "text.secondary" }}>
                  {contact.facebook}
                </Typography>
              </Grid>
            </Grid>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Box component={"form"} onSubmit={() => alert("submit")}>
            <Grid container marginBottom={3}>
              <Grid item xs={2}>
                Facebook Company
              </Grid>
              <Grid item xs={10}>
                <TextField
                  focused
                  required
                  fullWidth
                  multiline
                  id="outlined-multiline-static"
                  label="Facebook Company"
                  rows={5}
                  defaultValue={contact.facebook}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                Edit
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={tab === "instagarm"}
        onChange={handleChange("instagarm")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="instagarm-content"
          id="instagarm-header"
        >
          {tab === "instagarm" ? (
            <Grid>
              <Typography>
                <b>Edit Instagarm Company</b>
              </Typography>
            </Grid>
          ) : (
            <Grid container>
              <Grid item xs={4}>
                {" "}
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Instagarm Company
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography sx={{ color: "text.secondary" }}>
                  {contact.instagarm}
                </Typography>
              </Grid>
            </Grid>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Box component={"form"} onSubmit={() => alert("submit")}>
            <Grid container marginBottom={3}>
              <Grid item xs={2}>
                Instagarm Company
              </Grid>
              <Grid item xs={10}>
                <TextField
                  focused
                  required
                  fullWidth
                  multiline
                  id="outlined-multiline-static"
                  label="Instagarm Company"
                  rows={5}
                  defaultValue={contact.instagarm}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                Edit
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={tab === "tiktok"} onChange={handleChange("tiktok")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="tiktok-content"
          id="tiktok-header"
        >
          {tab === "tiktok" ? (
            <Grid>
              <Typography>
                <b>Edit Tiktok Company</b>
              </Typography>
            </Grid>
          ) : (
            <Grid container>
              <Grid item xs={4}>
                {" "}
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Tiktok Company
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography sx={{ color: "text.secondary" }}>
                  {contact.tiktok}
                </Typography>
              </Grid>
            </Grid>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Box component={"form"} onSubmit={() => alert("submit")}>
            <Grid container marginBottom={3}>
              <Grid item xs={2}>
                Tiktok Company
              </Grid>
              <Grid item xs={10}>
                <TextField
                  focused
                  required
                  fullWidth
                  multiline
                  id="outlined-multiline-static"
                  label="Tiktok Company"
                  rows={5}
                  defaultValue={contact.tiktok}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                Edit
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
