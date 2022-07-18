import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function CreatePaper(props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "20rem",
            height: "20rem",
          },
        }}
      >
        <Paper className="paper-exp" elevation={3}>
          {" "}
          <h3> {props.title}</h3>
          {" "}
          <h5>{props.company}</h5>
          <p> {props.date}</p>
        </Paper>
      </Box>
    </>
  );
}

export { CreatePaper };
