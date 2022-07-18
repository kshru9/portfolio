import React from "react";
import Paper from "@mui/material/Paper";
import { Col, Container, Row } from "react-bootstrap";
import Box from "@mui/material/Box";

function Experience() {
  return (
    <>
      <Container className="experience">
        <Row>
          <Col sm={4} xs={6}>
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
                <h3>Member of Technical Staff</h3>
                {" "}
                <p>Aug 2022 - Present</p>
              </Paper>
            </Box>
          </Col>
          <Col sm={4} xs={6}>
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
                <h3>Software Engineer Intern</h3>
                {" "}
                <p>Jan - Jun 2022</p>
              </Paper>
            </Box>
          </Col>
          <Col sm={4}>
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
                <h3>Software Engineer Intern</h3>
                {" "}
                <p>Jun - Aug 2021</p>
              </Paper>
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { Experience };
