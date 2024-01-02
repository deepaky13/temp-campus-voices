import React from "react";
import { useAllStuffContext } from "../pages/AllStuffPage";
import FeedbackStuff from "./FeedbackStuff";
import Wrapper from "../assets/wrapper/FeedbacksContainer";
import noFeedbackFound from "../assets/images/NoFeedback-found.svg";
const StuffContainer = () => {
  const { data } = useAllStuffContext();
  const { Feeds } = data;
  if (Feeds.length === 0) {
    return (
      <Wrapper>
        <div className="alter">
          <img src={noFeedbackFound} alt="NoFeedback" className="NoFeedback" />
          <h2>No Feedbacks to display...</h2>
        </div>
      </Wrapper>
    );
  }
  return (
    <div className="Feeds">
      {Feeds.map((feed) => {
        return <FeedbackStuff key={feed._id} {...feed} />;
      })}
    </div>
  );
};

export default StuffContainer;
