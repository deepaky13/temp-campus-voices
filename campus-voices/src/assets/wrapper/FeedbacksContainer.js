import styled from "styled-components";

const Wrapper = styled.div`

    .head-box{
  background-color:transparent;
  display: grid;
  place-items:center;
  font-size:30px;
  font-weight:500;
  margin:2% 0%;
    }
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .Feeds {
    min-height:348px;
    display: grid;
    grid-template-columns: 1fr ;
    row-gap:2rem;   
    
  }
  .FullContainer{
 
    width:100%;
    display:grid;
    grid-template-columns :.6fr .9fr;
    padding-left:3%;
    column-gap:2rem;
  }
  .container {
    padding:0px;
    border:1px solid var(--tertiary-101);
    display: grid;
    grid-template-rows: 0.8fr 1.5fr ;
    background-color:  --background-color-101;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    width: 70vw;
    min-height: 23vh;
   
  }
  .replay{
    display: grid;
    place-items:center;
    height:100%;
    width:100%;
    border:1px solid black;
  }
  .header {
    background-color:var(--background-color-102);
    display: grid;
    grid-template-columns:.6fr 1fr .3fr;
    color: var(--tertiary-100);
    border-bottom: 1px solid var(--tertiary-100);
  }
 
  }
  .content {
    display: grid;
    padding:2%;
    background-color:var(--background-color-101);

  }
   .date {
    margin-left: 2%;
    display: flex;
    gap: 10px;
    -webkit-box-align: center;
    align-items: center;
}
  
  }
 
  .heading {
    font-size:20px;
    font-weight:500;
    display: grid;
    place-items:center;
    margin-left:-30%;
  }
  .alter{
    min-height:348px;
    display:grid;
    place-items :center;
 
  }
  .NoFeedback{
    height:50vh;
    width:50vw;
  }
.trash{
  display: grid;
  place-items:center;
  }
.trash button{
  border:none;
  background-color:transparent;
  display: grid;
  place-items:center;
  font-size:25px;
  font-weight:400;
}
//=======================================================

  @media screen and (max-width: 992px) {
    .FullContainer{
    width:100%;
    display:grid;
    grid-template-columns : 1fr;
    place-items:center;
    padding-left:3%;
    row-gap:2rem;
  }
    .Feeds {
      grid-template-columns: 1fr ;
      row-gap: 2rem;
    }
    .container {
      display: grid;
     background-color:var(--background-color-100);
      width: 90vw;
      height: 18vh;
    }
    .replay{
    display: grid;
    place-items:center;
    height:100%;
    width: 90vw;
    border:1px solid black;
  }
  }
  

`;
export default Wrapper;
