import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {CreatePaper} from './Paper';

function Experience() {
  return (
    <>
      <Container className="experience">
        <Row>
          <Col sm={4} xs={6}>
            
            <CreatePaper title = "Member of Technical Staff" company="@ Oracle" date="Aug 2022 - Present"/>
          </Col>
          <Col sm={4} xs={6}>
          <CreatePaper title = "Software Engineer Intern" company="@ Amazon" date="Jan - Jun 2022"/>
          </Col>
          <Col sm={4}>
          <CreatePaper title = "Software Engineer Intern" company="@ Optum, UHG" date="Jun - Aug 2021"/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { Experience };
