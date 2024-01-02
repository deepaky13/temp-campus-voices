import React from "react";
import Card from "react-bootstrap/Card";
import Wrapper from "../assets/wrapper/AboutLayout";
const About = () => {
  return (
    <Wrapper>
      <div className="about">
        <h3>About This Application</h3>
        <div className="set">
          <Card
            className="set-text"
            border="danger"
            bg="danger"
            style={{ width: "17rem", color: "black" }}
          >
            <Card.Header>Feature 01</Card.Header>
            <Card.Body>
              <Card.Title className="cardTitle">
                Student Feedback Submission :
              </Card.Title>
              <Card.Text>
                Students are provided with a platform where they can easily
                share their opinions,suggestions and concerns regarding
                different aspects of their academic journey . This might include
                feedback about courses, instructors, facilities and overall
                campus experiences
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="set-text"
            border="success"
            bg="success"
            style={{ width: "17rem", color: "black" }}
          >
            <Card.Header>Feature 02</Card.Header>
            <Card.Body>
              <Card.Title className="cardTitle">Feedback Tracking :</Card.Title>
              <Card.Text>
                THe system could allow administrators to track the progress of
                action taken in response to specific feedback. This helps
                demonstrate accountability and continuous improvement.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="set-text"
            border="warning"
            bg="warning"
            style={{ width: "17rem", color: "black" }}
          >
            <Card.Header>Feature 03</Card.Header>
            <Card.Body>
              <Card.Title className="cardTitle">
                User Authentication :
              </Card.Title>
              <Card.Text>
                The system incorporated a secure authentication system to ensure
                that only authorized individuals can access specific
                functionalities. Students abd staff members would have login
                credentials to access their respective portals.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="set-text"
            border="secondary"
            bg="secondary"
            style={{ width: "17rem", color: "black" }}
          >
            <Card.Header>Feature 04</Card.Header>
            <Card.Body>
              <Card.Title className="cardTitle">
                Feedback Management :
              </Card.Title>
              <Card.Text>
                Once students submit their feedback, the system collects and
                organizes the data for administrative review, Feedback entries
                can be categorized and tagged for easy retrieval and analysis.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
