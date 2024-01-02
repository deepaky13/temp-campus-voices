import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-left: 15%;
  margin-top: -5%;
  text-align: center;

  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    display: block;
  }
  img {
    max-width: 350px;
    height: 350px;
    display: block;
  }
`;
export default Wrapper;
