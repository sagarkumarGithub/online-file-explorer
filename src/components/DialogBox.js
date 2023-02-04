import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material";

const SubmitButton = styled("Button")`
  height: 30px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  background-color: #48cae4;
  border: none;
`;

const OpenButton = styled("Button")`
  height: 70px;
  width: 60px;
  color: grey;
  border: 4px dotted grey;
  border-radius: 5px;
  font-size: 32px;
  background-color: white;
`;

const DialogBox = ({
  name,
  isEditing,
  setName,
  handleSubmit,
  setOpen,
  open,
  folder,
  setFolder,
}) => {
  return (
    <>
      <OpenButton onClick={() => setOpen(true)}>+</OpenButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle style={{ textAlign: "center" }} id="dialog-title">
          {isEditing ? "Rename" : "Create new"}
        </DialogTitle>
        {!isEditing && (
          <DialogActions style={{ margin: "0 auto 0 auto" }}>
            <button
              className={folder ? "disable" : "enable"}
              onClick={() => setFolder(false)}
            >
              File
            </button>
            <button
              className={folder ? "enable" : "disable"}
              onClick={() => setFolder(true)}
            >
              Folder
            </button>
          </DialogActions>
        )}
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div>
              <div style={{ width: "100%", marginBottom: 30 }}>
                <input
                  style={{ height: 20, padding: 3 }}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <SubmitButton type="submit" onClick={() => setOpen(false)}>
                  {isEditing ? "edit" : "submit"}
                </SubmitButton>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogBox;
