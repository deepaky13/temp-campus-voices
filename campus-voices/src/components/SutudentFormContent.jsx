import React from "react";
import Wrapper from "../assets/wrapper/StudentFormLayout";
import { Form } from "react-router-dom";
import { Row } from "react-bootstrap";
import FormRow from "./FormRow";
import SubmitBtn from "./SubmitBtn";
import { STUDENT_YEAR, DEP_STATUS } from "../../../utils/constants";

const SutudentFormContent = () => {
  return (
    <Wrapper>
      <div>
        <h3 className="Typ">Feedback Form</h3>
        <div className="seperator">
          <Form method="post" className="form1">
            <Row className="mb-3">
              <FormRow type="text" name="name" defaultValue="Smith" />
              <div className="form-row">
                <label htmlFor="department" className="form-label">
                  Year
                </label>
                <select
                  name="department"
                  id="department"
                  className="form-select textBox"
                  defaultValue={DEP_STATUS.CSE}
                >
                  {Object.values(DEP_STATUS).map((itemValue) => {
                    return (
                      <option key={itemValue} value={itemValue}>
                        {itemValue}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="year" className="form-label">
                  Year
                </label>
                <select
                  name="year"
                  id="year"
                  className="form-select textBox"
                  defaultValue={STUDENT_YEAR.FIRST}
                >
                  {Object.values(STUDENT_YEAR).map((itemValue) => {
                    return (
                      <option key={itemValue} value={itemValue}>
                        {itemValue}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label>Feedback</label>
              <textarea
                className="textarea textBox"
                name="comment"
                placeholder="wrtie something here"
              ></textarea>
            </Row>
            <SubmitBtn />
          </Form>
        </div>
        <div />
      </div>
    </Wrapper>
  );
};

export default SutudentFormContent;
