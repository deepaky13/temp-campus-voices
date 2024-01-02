import styled from "styled-components";

const Wrapper = styled.div`
  .feedback-container {
    display: grid;
    place-items: center;
  }
  .full-container {
    min-height: 390px;
  }
  .blocks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 1px solid black;
    margin-top: 2rem;
    width: 210px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    width: 70vw;
    padding: 10px;
    background-color: var(--background-color);
  }
  .header {
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    place-items: center;
    font-size: 17px;
    padding: 10px;
    font-weight: 500;
    color: black;
    border-right: 1px solid black;
  }

  .header-A {
    padding: 10px 3rem;
    display: grid;
    place-items: start;
    border-right: 1px solid black;
    /* overflow: hidden; */
  }
  .date {
    font-weight: 500;
  }
  .content {
    width: 500px;
    word-wrap: break-word;
    font-size: 16px;
    padding-top: 15px;
    font-weight: 00;
    color: black;
  }
  .name {
    display: grid;
    place-items: center;
    font-size: 19px;
  }
  .results {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }

  @media screen and (max-width: 992px) {
    .feedback-container {
      display: grid;
      place-items: center;
    }
    .full-container {
      min-height: 200px;
    }
    .form-title {
      display: grid;
      place-items: center;
    }
    .reset {
      margin-left: 20px;
    }

    //*-----------------layer-2-----------------------
    .results {
      display: grid;
      grid-template-columns: 1fr;
      place-items: center;
    }
    .blocks {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 2rem;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      width: 300px;
      padding: 5px;
      background-color: var(--background-color-101);
    }
    .header {
      margin-left: -20px;
      display: grid;
      place-items: center;
      font-size: 18px;
      padding: 5px;
      font-weight: 500;
      color: black;
      border-right: 0px solid black;
    }

    .header-A {
      padding: 10px;
      display: grid;
      place-items: start;
      border-right: 0px solid black;
    }
    .date {
      font-weight: 500;
    }
    .content {
      width: 100%;
      word-wrap: break-word;
      font-size: 15px;
      padding-top: 10px;
      font-weight: 00;
      color: black;
      border-right: 0px solid black;
    }
    .name {
      margin-left: 50%;
      font-size: 15px;
      font-weight: 700;
    }
  }
`;

export default Wrapper;
