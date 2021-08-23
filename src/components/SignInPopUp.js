import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    /* ...; */
    /* background-color: black; */
  }
  // use your custom style for ".popup-content"
  &-content {
    background-color: black;
    border-radius: 4px;
    /* ...; */
    /* width: 100%; */
    padding: 5em 5px;
    .card {
      width: 60%;
      margin: auto;
      padding: 3em;
    }
  }
`;

const SignInPopUp = () => (
  <StyledPopup
    trigger={<button className='button'> Sign In </button>}
    modal
    closeOnDocumentClick
  >
    <div className='card'>
      <button className='btn btn-info'>Google signin</button>
    </div>
  </StyledPopup>
);

export default SignInPopUp;
