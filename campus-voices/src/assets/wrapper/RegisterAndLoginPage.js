import styled from "styled-components";
import college from "../images/backimg03.png";
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;

  place-items: center;
  // background-color: var(--background-color-101);
  // background-image: url(${college});
  // background-size: cover;
  // background-position: center;
  .logo {
    height: 100px;
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    padding: 0px 80px;
    max-width: 400px;
    border-top: 10px solid var(--primary-102);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4),
      0px 7px 13px -3px rgba(0, 0, 0, 0.3),
      inset 0px -3px 0px rgba(0, 0, 0, 0.2);
    display: grid;
    place-items: center;
    grid-gap: 15px;
  }

  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    text-align: center;
    line-height: 0.1;
    margin-bottom: 20px;
  }
  button {
    background-color: var(--primary-102);
    color: white;
  }
  .member-btn {
    color: var(--secondary-101);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.35rem;
  }
  .head {
    font-size: var(--font-medium);
  }
  @media screen and (max-width: 992px) {
    .form {
      padding: 1px 50px;
    }
  }
  @media screen and (max-width: 280px) {
    .form {
      padding: 1px 5px;
    }
  }
`;
export default Wrapper;
