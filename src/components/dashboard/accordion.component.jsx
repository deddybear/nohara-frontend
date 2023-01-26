import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";

export const AccordionCustom = (props) => {
  const handleClick = (keys) => (event, isExpanded) => props.handleChange(keys, isExpanded);
  const handleSubmit = (keys) => (event) => props.handleSubmit(event, keys)

  return (
    <Accordion
      expanded={props.tab === props.keys}
      onChange={handleClick(props.keys)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="desctab-content"
        id="desctab-header"
      >
        {props.tab === props.keys ? (
          <Grid>
            <Typography>
              <b>Edit {props.title.charAt(0).toUpperCase() + props.title.slice(1)} Company</b>
            </Typography>
          </Grid>
        ) : (
          <Grid container>
            <Grid item xs={4}>
              {" "}
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {" "}
              <Typography sx={{ color: "text.secondary" }}>
                {props.display.substring(0, 75)} ....
              </Typography>
            </Grid>
          </Grid>
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Box component={"form"} onSubmit={handleSubmit(props.keys)}>
          <Grid container marginBottom={3}>
            <Grid item xs={2}>
              {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
            </Grid>
            <Grid item xs={10}>
              <TextField
                focused
                required
                fullWidth
                multiline
                id="outlined-multiline-static"
                name={`${props.title}`}
                label={`${props.title.charAt(0).toUpperCase() + props.title.slice(1)} Company`}
                rows={5}
                defaultValue={props.defaultValue}
                // onChange={(e) => props.onChange(e)}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained">Edit</Button>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
