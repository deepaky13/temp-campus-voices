import styled from "styled-components";
const Wrapper = styled.div`
  .seperator {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: start center;
  }
  .form1 {
    display: grid;
    place-items: center;
    width: 45vw;
    margin-top: 0.8%;
    margin-left: 95%;
    margin-bottom: -5.1%;
    border: 2px solid var(--primary-101);
    padding: 2%;
    border-radius: 2%;
  }
  .head-logo {
    width: 90vw;
  }
  .textarea {
    margin-left: 2%;
    height: 100px;
    width: 96%;
    margin-top: 1%;
  }

  .textBox {
    border: 1px solid var(--primary-103);
    border-radius: 10px;
    background-color: var(--background-color);
  }
  .Typ {
    margin-top: 0%;
    color: var(--secondary-101);
    text-align: center;
  }
  .feedback-Type {
    margin-top: 49%;
    border: 1px solid var(--primary-101);
    padding: 5%;
    background-color: var(--primary-100);
    color: var(--primary-1011);
  }
  .feedback-Type h3 {
    text-align: center;
    text-transform: upperCase;
    border-bottom: 1px solid black;
    padding-bottom: 5%;
    //     text-shadow: 0px 1px 4px red;
  }
  .Type {
    margin-top: 5%;
    color: var(--primary-1011);
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    text-transform: upperCase;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2pc;
  }
  .Type p {
    padding: 5%;
    //     text-shadow: 0px 2px 5px red;
  }
  .icon-f {
    margin-right: 1.6rem;
  }
  @media screen and (max-width: 992px) {
    min-height: 559px;
    .form1 {
      display: grid;
      place-items: center;
      width: 85vw;
      margin-top: 18.8%;
      margin-left: 20%;
      margin-bottom: 0%;
      border: 2px solid var(--primary-101);
      padding: 2%;
      border-radius: 2%;
    }
    .textarea {
      margin-left: 4%;
      height: 100px;
      width: 92%;
      margin-top: 3%;
    }
    .Typ {
      margin-top: 13%;
    }
  }
`;

export default Wrapper;
