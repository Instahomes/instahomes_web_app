import React from "react";
import styled from "styled-components";
import facebook from "../../assets/footer/facebook.svg";
import instagram from "../../assets/footer/instagram.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import { Link } from "react-router-dom";

const FooterFrame = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  padding: 3rem var(--main-padding-x);
`;

const FooterList = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;

    &.social-media {
      display: block;

      h4 {
        display: none;
      }
    }
  }
`;

const FooterText = styled.li`
  color: ${({ theme }) => theme.colors.darkBody};
  list-style: none;
  font-size: 0.8em;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const FooterIcon = styled.a`
  margin-right: 1em;
`;

const FooterIconRow = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 1em;
    ${FooterIcon}:nth-child(3) {
      margin-right: 0;
    }
  }
`;

const Footer = React.memo(() => (
  <FooterFrame>
    <FooterList>
      <FooterItem>
        <h4>JOIN OUR BETA</h4>
        <ul>
          <FooterText>
            <Link to="/signup">Sign up</Link>
          </FooterText>
          <FooterText>
            <Link to="/#developer-signup">Apply as Developer</Link>
          </FooterText>
        </ul>
      </FooterItem>
      <FooterItem>
        <h4>CONTACT</h4>
        <ul>
          <FooterText>
            <a href="mailto:instahomes.ph@gmail.com">Inquiries</a>
          </FooterText>
          <FooterText>
            <Link>User Support</Link>
          </FooterText>
          {/* <FooterText><Link></Link>Invest in Us</FooterText> */}
        </ul>
      </FooterItem>
      <FooterItem>
        <h4>ABOUT US</h4>
        <ul>
          <FooterText>
            <a href="https://www.linkedin.com/company/instahomes-ph/">
              Company Profile
            </a>
          </FooterText>
          <FooterText>
            <a href="https://instahomes.com.ph/Articles.html">Blogs/Press</a>
          </FooterText>
        </ul>
      </FooterItem>
      <FooterItem>
        <h4>TERMS & PRIVACY</h4>
        <ul>
          <FooterText>
            <Link>Terms & Conditions</Link>
          </FooterText>
          <FooterText>
            <Link>Privacy Policy</Link>
          </FooterText>
          {/* <FooterText><Link></Link>Cookies</FooterText> */}
        </ul>
      </FooterItem>
      <FooterItem className="social-media">
        <h4>CONNECT WITH US</h4>
        <FooterIconRow>
          <FooterIcon href="https://www.facebook.com/Instahomes.com.ph">
            <img src={facebook} alt="Facebook" />
          </FooterIcon>
          <FooterIcon href="https://www.instagram.com/instahomes.ph/">
            <img src={instagram} alt="Instagram" />
          </FooterIcon>
          <FooterIcon href="https://www.linkedin.com/company/instahomes-ph/">
            <img src={linkedin} alt="LinkedIn" />
          </FooterIcon>
        </FooterIconRow>
      </FooterItem>
    </FooterList>
    <FooterText>© 2021 Instahomes Philippines</FooterText>
  </FooterFrame>
));

export default Footer;
