import React from "react";
import AddButton from "../../components/add-button";
import { Wrapper, Footer } from "./styles";
import { GlobalStyle } from "../../globalStyles";
import logo from "../../assets/navbar/logo.svg";

const DeveloperLanding = ({ businessName = "Alveo Landing Corporation" }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Hey {businessName}!</h1>
        <p>What do you wanna do today?</p>
        <div>
          <AddButton
            title={"Add Development"}
            description="Create a brochure page for your development under 5 minutes!"
            state={true}
          />
          <AddButton
            title={"Add Site Listing"}
            description="Set up a listings and connect them with existing development pages."
            state={true}
          />
          <AddButton
            title={"Edit Existing Pages"}
            description="You have not made any pages yet! Go and add one above first"
            state={false}
          />
        </div>
        <Footer>
          <img className="logo" src={logo} alt="Instahomes" />
        </Footer>
      </Wrapper>
    </>
  );
};

export default DeveloperLanding;
