import styled from "styled-components";

const Wrapper = styled.div`
  .stats-heading {
    text-align: center;
  .stats-container-box {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    background-color: transparent;
    padding: 0px 100px;
  }

  .stats-container {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid black;
    text-align: center;
    padding: 30px 0;
    font-size: 30px;
  }

  .box-one {
    border-bottom: 5px solid orange;
    grid-column: 1 / span 2;
    color: orange;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
  .p {
    color: navy;
  }
  .count {
    color: orange;
    font-size: 32px;
  }

  .box-two {
    border-bottom: 5px solid orange;
    color: orange;
    grid-column: 3 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
  .year {
    border-bottom: 4px solid teal;
    font-size: 1.5rem;
  }
  .depart {
    border-bottom: 4px solid navy;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 992px) {
    .stats-container-box {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 10px;
      background-color: transparent;
      padding: 0px 20px;
      min-height: 563px;
    }
    .stats-container {
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid black;
      text-align: center;
      padding: 10px 0;
      font-size: 20px;
    }
    .box-one {
      border-bottom: 5px solid orange;
      grid-column: 1 / span 2;
      color: orange;
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;
    }
    .p {
      color: navy;
    }
    .count {
      color: orange;
      font-size: 22px;
    }

    .box-two {
      border-bottom: 5px solid orange;
      color: orange;
      grid-column: 1 / span 2;
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;
    }
  }
`;
export default Wrapper;
