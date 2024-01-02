import styled from "styled-components";

const Wrapper = styled.div`
  .foot {
    background-color: var(--primary-100);
    color: white;
    font-size: 19px;
    text-align: center;
    padding: 5px;
    margin-top: 5%;
  }
  @media screen and (max-width: 992px) {
    .foot {
      display: grid;
      place-items: center;
    }
  }
`;
export default Wrapper;
