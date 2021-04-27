import React from "react";
import styled from "styled-components";
import facebook from "../../assets/footer/facebook.svg";
import instagram from "../../assets/footer/instagram.svg";
import email from "../../assets/footer/email.svg";
import phone from "../../assets/footer/phone.svg";

const FooterFrame = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  padding: 3rem var(--main-padding-x);
`;

const FooterList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterItem = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
`;

const FooterText = styled.li`
  color: ${({ theme }) => theme.colors.darkBody};
  list-style: none;
  font-size: 1em;
`;

const FooterIcon = styled.a`
  margin-right: 1em;
`;

const Footer = () => (
  <FooterFrame>
    <FooterList>
      <FooterItem>
        <h4>JOIN OUR BETA</h4>
        <ul>
          <FooterText>Customer Sign up</FooterText>
          <FooterText>Developer Sign up</FooterText>
        </ul>
      </FooterItem>
      <FooterItem>
        <h4>CONTACT</h4>
        <ul>
          <FooterText>Inquiries</FooterText>
          <FooterText>User Support</FooterText>
          <FooterText>Invest in Us</FooterText>
        </ul>
      </FooterItem>
      <FooterItem>
        <h4>ABOUT US</h4>
        <ul>
          <FooterText>Our Company</FooterText>
          <FooterText>Expertise</FooterText>
          <FooterText>Blogs/Press</FooterText>
        </ul>
      </FooterItem>
      <FooterItem>
        <h4>TERMS & PRIVACY</h4>
        <ul>
          <FooterText>Terms & Conditions</FooterText>
          <FooterText>Privacy Policy</FooterText>
          <FooterText>Cookies</FooterText>
        </ul>
      </FooterItem>
      <FooterItem>
        <h4>CONNECT WITH US</h4>
        <div>
          <FooterIcon href="https://www.facebook.com/Instahomes.com.ph">
            <img src={facebook} alt="Facebook" />
          </FooterIcon>
          <FooterIcon href="tel:+639989688302">
            <img src={phone} alt="Phone" />
          </FooterIcon>
          <FooterIcon href="mailto:instahomes.ph@gmail.com">
            <img src={email} alt="Email" />
          </FooterIcon>
        </div>
      </FooterItem>
    </FooterList>
    <FooterText>© 2021 Instahomes Philipppines</FooterText>
  </FooterFrame>
);

export default Footer;
