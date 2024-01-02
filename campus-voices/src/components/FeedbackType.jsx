import React from "react";
import Card from "react-bootstrap/Card";
import Wrapper from "../assets/wrapper/StudentFormLayout";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
const FeedbackType = () => {
  return (
    <Wrapper>
      <div className="feedback-Type">
        <h3>
          <FaPaperPlane className="icon-f" />
          FeedBack Type
        </h3>
        <div className="Type">
          <p>Suggestion</p>
          <p>Feedback</p>
          <p>comment</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeedbackType;
