import styled from "styled-components";
import signupImg from "../../assets/home/signup-img.png";
import { Input, OutlineButton } from "../../components/elements";

export const HeroFrame = styled.section`
  height: 550px;
  width: 100%;
  padding-top: 10em;
  background: url(${({ heroBg }) => heroBg});
  background-size: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: ${({ showAdvanced }) => (showAdvanced ? "750px" : "460px")};
  }
`;

export const HomeListings = styled.section`
  padding: 3em 0;

  .center {
    padding: 0 var(--main-padding-x);
  }

  .listing-row-div {
    padding-left: var(--main-padding-x);
    padding-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .listing-row-div {
      padding-right: var(--main-padding-x);
    }
  }
`;

export const ListingRow = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  overflow-x: scroll;
  padding: 5px;

  display: flex;
  // justify-content: ${({ threeOrLess }) =>
    threeOrLess ? "center" : "flex-start"};
  justify-content: flex-start;
  gap: 1em;

  // & > div:nth-child(3) {
  //   margin-right: 10px;
  // }

  // & > div:not(:first-child) {
  //   margin-left: 20px;
  // }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 10px;
    overflow-x: scroll;
  }
`;

export const NewsletterFrame = styled.section`
  background-color: ${({ theme }) => theme.colors.signupBg};
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const NewsletterImage = styled.div`
  width: 95%;
  background-image: url(${signupImg});
  background-size: cover;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    height: 70vw;
  }
`;

export const BetaSignupButton = styled(OutlineButton)`
  margin-top: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors.softWhite};
  color: ${({ theme }) => theme.colors.softWhite};
`;

export const NewsletterText = styled.div`
  padding: 10rem var(--main-padding-x);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 4rem var(--main-padding-x);
  }
`;

export const SignupForm = styled.div`
  display: flex;
  margin-top: 2em;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const SignupInput = styled(Input)`
  width: 55%;
  font-size: 1em;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: initial;
    margin-bottom: 1em;
  }
`;

export const SignupButton = styled.button`
  font-size: 1em;
  width: 45%;
  background-color: ${({ theme }) => theme.colors.mutedLightBlue};
  color: ${({ theme }) => theme.colors.darkBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
`;

export const ListingFormFrame = styled.section`
  padding: 10rem var(--main-padding-x);
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem var(--main-padding-x);
    flex-direction: column;
  }
`;

export const ListingFormText = styled.div`
  width: 50%;
  padding-right: 5em;

  ul {
    font-size: 1em;

    li {
      font-size: 1em;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: initial;
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;
