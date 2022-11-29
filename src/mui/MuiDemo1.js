import { Button, Fab, IconButton, Slider } from "@mui/material";
import React from "react";
import { BTNCOLOR } from "../constant";
import SendIcon from "@mui/icons-material/Send";



export const MuiDemo1 = () => {
  return (
    <div>
      <Button variant="contained" color={BTNCOLOR}>
        Primary
      </Button>
      <Button variant="contained" color="error" startIcon={<SendIcon />}>
        Error
      </Button>
      <Button variant="contained" color="error" endIcon={<SendIcon />}>
        send
      </Button>
      <Fab color="primary" aria-label="add">
        <SendIcon />
      </Fab>
      <IconButton>
        <SendIcon />
      </IconButton>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </div>
  );
};
