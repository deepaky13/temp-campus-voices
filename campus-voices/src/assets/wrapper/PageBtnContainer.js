import styled from "styled-components";

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    margin-top:5%;
    background: var(--background-secondary-color);
    border-radius: var(--border-radius-100);
    color:black;
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1rem;
    color: var(--primary-500);
    border-radius:  var(--border-radius-100);
    cursor:pointer:
  }
  .active{
    background:var(--primary-500);
        color: white;

  }
  .prev-btn,.next-btn{
    background: var(--background-secondary-color);
    border-color: transparent;
        border-radius: var(--border-radius-100);

    width: 100px;
    height: 40px;
        color:black;
text-transform:capitalize;
letter-spacing:var(--letter-spacing);
display:flex;
align-items:center;
justify-content:center;
gap:0.5rem;
cursor:pointer;
  }
  .prev-btn:hover,.next-btn:hover{
    background:var(--primary-500);
        color: var(--white);
        transition:var(--transition);
  }
.dots{
  display:grid;
  place-items:center;
  cursor:text;
}
@media screen and (max-width: 992px) {

 height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: start;
  // flex-wrap: wrap;
  gap: 1rem;

.prev-btn,.next-btn{
  width:60px;
  padding:10px;

}
 
}

`;
export default Wrapper;
