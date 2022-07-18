import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Col, Row } from "react-bootstrap";

function Projects() {
  return (
    <>
      <Container className="projects" fluid>
        <Row>
          <Col sm={4}>
            <Card>
              <CardContent className="projects-content">
                <h3>Mini Tweet</h3>

                <p>
                  Built a mini version of Twitter which supported client
                  requests from scratch using socket programming
                </p>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://github.com/kshru9/Mini-Tweet"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <CardContent className="projects-content">
                <h3>Concurrent Web Crawler</h3>

                <p>
                  Programmed a concurrent web crawler with 2 methods: Single
                  Locking, Thread safe data structures in C
                </p>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://github.com/kshru9/Web-Crawler"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <CardContent className="projects-content">
                <h3>Graduation Planner</h3>

                <p>
                  Designed a website using MERN stack in a 1 week long hackathon
                  for students’ to create their graduation plan
                </p>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://github.com/akcgjc007/IITGN-Grad-Planner"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { Projects };
