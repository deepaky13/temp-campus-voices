import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-left: -15%;
    margin-top: 10%;
  }
  .extra {
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: var(--medium-font01);
  text-decoration: none;
  color: var(--primary-1011);
}
  .DropDown {
    margin-left:260px;
    display: grid;
    place-items: center;
    position: absolute;
    color: white;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }

  .dropdown-btn {
    display: grid;
    grid-template-columns:1fr 1fr;
    place-items: center;
    margin-top:-40%;
    margin-left:-300%;
    border-radius: var(--border-radius);
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 80%;
    height: 100%;
  }
  @media screen and (max-width: 992px) {
    .dropdown-btn {
    display:flex;
    margin-top:-25px;
    margin-left:-100px;
    border-radius: var(--border-radius);
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .extra {
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: var(--medium-font01);
  text-decoration: none;
  color: var(--primary-1011);
}
  .DropDown {
    width:0px;
    margin-top:-10%;
    display: grid;
    place-items: center;
    position: absolute;
    color: white;
    box-shadow: var(--shadow-2);
    text-align: center;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }
  }
`;

export default Wrapper;
