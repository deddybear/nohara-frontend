import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import { DialogActions, DialogContent } from "@mui/material";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

/**
 * * Modal Dragable
 * * Modal Scrollable
 * @param {object} props
 * @returns component
 */

export const ModalComponent = (props) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        scroll="paper"
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        maxWidth={props.maxWidth}
        fullWidth={props.fullWidth}
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {props.titlePost}
        </DialogTitle>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={props.onSubmit}
        >
          <DialogContent dividers={true}>{props.children}</DialogContent>
          <DialogActions>
            <Button autoFocus onClick={props.handleClose} color="error">
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};
