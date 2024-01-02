import styled from "styled-components";
import BackImg from "../images/backimg03.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-image: url(${BackImg});
  background-size: cover;
  background-position: center;
  //-----------------------------------------------------------------------
  .logo {
    height: 190px;
    width: 190px;
    margin: -14% 0px 20px 0px;
  }

  .container-grid {
    display: grid;
    place-items: center;
    color: var(--primary-101);
  }
  .container-grid h1 {
    font-size: 2.5rem;
    padding-top: 10px;
    padding-bottom: 25px;
  }
  .container-grid h3 {
    font-size: 1.5em;
    padding-bottom: 30px;
    padding: 0px 300px 30px 300px;
    text-align: center;
  }
  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--primary-103);
    color: #fff;
    text-decoration: none;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
  }
  @media screen and (max-width: 992px) {
    .logo {
      height: 150px;
      width: 150px;
      margin-top: 20%;
      margin-bottom: 20px;
    }
    .container-grid h1 {
      font-size: 2.3rem;
      padding: 0px 5px 35px 5px;
      margin-left: 2%;
      text-align: center;
    }
    .container-grid h3 {
      font-size: 1.3em;
      padding: 0px 20px 50px 20px;
      text-align: center;
    }
    .button {
      font-size: 20px;
    }
  }
`;
export default Wrapper;
