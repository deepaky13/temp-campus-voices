import styled from "styled-components";

const Wrapper = styled.nav`
  .navbar-main {
    background-color: rgb(1, 7, 31);
  }
  .white-font {
    font-size: 25px;
    text-decoration: none;
    color: var(--primary-1011);
  }

  .medium-font {
    font-size: var(--medium-font01);
  }
  .head-font {
    font-size: var(--head-font01);
  }
  .head-color {
    color: rgb(255, 255, 255);
    text-shadow: 0px 2px 5px black;
  }
  .head-color:hover,
  .medium-font:hover {
    color: white;
  }
  .margin-center {
    margin-left: 160px;
    margin-right: 260px;
  }
  .padding-center {
    margin: 0 10px;
  }
  .border-right {
    border-right: 1px solid white;
  }
  .good {
    margin-left: 0%;
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    place-items: center;
    column-gap: 10px;
  }
  .user-icon {
    margin-left: -10%;
    font-size: 20px;
    display: grid;
    place-items: center;
  }
  .name {
    font-size: 20px;
  }
  @media screen and (max-width: 992px) {
    .bg-body-tertiary {
      width: 100%;
    }
    .margin-center {
      margin-left: 0px;
      margin-right: 0px;
      height: 250px;
    }
    .id {
      margin-left: 0px;
    }
    .navbar-main {
      margin-top: -10px;
      background-color: rgb(1, 7, 31);
    }
    .good {
      margin-left: 50%;
      display: grid;
      grid-template-columns: 0.1fr 3fr;
      place-items: center;
      column-gap: 20px;
      margin-top: -20px;
      padding-bottom: 20px;
    }
    .name {
      font-size: 23px;
      margin-left: -48%;
    }
    .form-center {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1rem;
    }

    .user-icon {
      font-size: 20px;
      margin-top: 4%;
    }
  }
`;
export default Wrapper;
