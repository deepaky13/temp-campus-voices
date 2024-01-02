import React from "react";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import FeedbacckInfo from "./FeedbacckInfo";
import Wrapper from "../assets/wrapper/FeedbacksContainer";
import { BsTrash3 } from "react-icons/bs";
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { Form } from "react-router-dom";
day.extend(advancedFormat);

const FeedbackStuff = ({ _id, comment, createdAt }) => {
  const date = day(createdAt).format("MMM Do, YYYY");

  return (
    <Wrapper>
      <div className="FullContainer">
        <div className="container">
          <header className="header">
            <div className="date">
              <FaCalendarAlt />
              <p>{date}</p>
            </div>
            <div className="heading">FeedBacks</div>
            <div className="trash">
              <Form method="post" action={`../stuff/${_id}`}>
                <button type="submit">
                  <BsTrash3 className="can" />
                </button>
              </Form>
            </div>
          </header>
          <div className="content">
            <FeedbacckInfo
              icon={<IoArrowRedoSharp />}
              text={comment}
              className="comment"
            />
          </div>
        </div>
        <div className="replay">Reply from the Admin </div>
      </div>
    </Wrapper>
  );
};

export default FeedbackStuff;
