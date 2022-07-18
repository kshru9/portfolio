import React from "react";
import Avatar from "@mui/material/Avatar";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <Container className="home" fluid="true">
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Avatar
              className="avatar"
              sx={{ bgcolor: "black", width: "100px", height: "100px" }}
            >
              SK
            </Avatar>
            <h1 className="home-title">Shruti Katpara</h1>
          </Col>
          <Col sm={4}></Col>
        </Row>

        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <p className="home-content">
              I am a passionate, driven software engineer. Currently, I am
              focused on building databases at <span>Oracle</span>. I hold a
              Bachelors in computer science from IIT Gandhinagar.
            </p>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </>
  );
}
export { Home };
