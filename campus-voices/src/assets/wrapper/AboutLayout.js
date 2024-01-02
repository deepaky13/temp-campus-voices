import styled from "styled-components";

const Wrapper = styled.div`
  .about {
    // margin-top: -13%;
    width: 90vw;
    display: grid;
    grid-template-rows: 3fr 6fr;
    place-items: start center;
  }
  .about h3 {
    margin-top: 3%;
  }
  .set {
    display: flex;
    grid-gap: 25px;
    margin-left: 10%;
  }
  .set-text {
    text-align: left;
    font-size: 16px;
  }
  .cardTitle {
    font-size: 20px;
  }
  @media screen and (max-width: 992px) {
    .set {
      display: grid;
      grid-gap: 25px;
    }
    .about {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }
    .about h3 {
      display: flex;
    }
    .set-text {
      height: 430px;
      font-size: 18px;
    }
  }
`;
export default Wrapper;
