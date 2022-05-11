import React from "react";
import AddButton from "../../../components/add-button";
import { Wrapper, Footer } from "./styles";
import logo from "../../../assets/navbar/logo.svg";

const DeveloperLanding = ({ businessName = "Alveo Landing Corporation" }) => {
  return (
    <>
      <Wrapper>
        <h1>Hey {businessName}!</h1>
        <p>What do you wanna do today?</p>
        <div>
          <AddButton
            title={"Add Development"}
            description="Create a brochure page for your development under 5 minutes!"
            isDisabled={false}
            link={null}
          />
          <AddButton
            title={"Add Site Listing"}
            description="Set up a listings and connect them with existing development pages."
            isDisabled={false}
            link={null}
          />
          <AddButton
            title={"Edit Existing Pages"}
            description="You have not made any pages yet! Go and add one above first"
            isDisabled={true}
            link={null}
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
