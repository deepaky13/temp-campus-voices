import styled from "styled-components";

const wrapper = styled.div`
  .head-logo {
    width: 90vw;
  }
  .container{
    padding:0px;
    margin:0px;
     display:grid;
    grid-template-rows:.2fr 1fr;
    width: 90vw;
  }
  .layer1 {
    display:grid;
    grid-template-columns:1fr 1fr;
    width:100%:
    
  }
  .sideView {
    height: 330px;
    margin: 70px;
    margin-left:100px;

    border-radius: 20px;
  }
  .compose {
    margin-top: 62px;
    margin-left: 120px;
    width: 40vw;
  }
  .compose p {
    margin-top: -20px;
    font-size: 19px;
    word-break: break-word;
  }
  .compose span {
    text-shadow: 1px 1px 0px black;
    font-size: 45px;
    font-weight: 600;
  }
  .topic {
    line-height: 60px;
  }
  .adjust {
    display:grid;
    place-items:center start;
  }
  .text {
    margin-bottom: 30px;
  }

  .btn-compose {
    margin-top: 2%;
  }

  //---------------------------------------------------------------------
  @media screen and (max-width: 992px) {
    .head-logo {
      width: 90vw;
    }
    .container{
    padding:0px;
    margin:0px;
    display:grid;
    grid-template-columns: 1fr;
    width: 90vw;
  }
   .adjust {
    margin-top:6%;
    display:grid;
    place-items:center start;
  }
    .text {
      margin-left: 10vw;
    }

    .sideView {
      height: 200px;
      margin: 0px;
      margin-left: 6%;
    }
    .compose {
      width: 90vw;
      margin-top: 4%;
      margin-left: 0px;
      display: grid;
      place-items: center;
    }
    .head-logo {
      display: none;
    }
    .layer1 {
      display: grid;
      grid-template-columns:1fr  ;
      place-items: center;
      grid-gap:5%;
    }

    .compose p {
      font-size: 16.5px;
      text-align: center;
      margin-top: -5%;
      margin-left: 4%;
    }
    .btn-compose {
      margin-top:-50%:
      font-size: 19px;
      text-align: center;
      border: none;
      
    }
  }
`;
export default wrapper;
