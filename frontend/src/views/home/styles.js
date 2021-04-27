import styled from "styled-components";
import heroBg from "../../assets/home/hero.png";
import signupImg from "../../assets/home/signup-img.png";
import { Input } from "../../components/elements";

export const HeroFrame = styled.section`
  height: 792px;
  width: 100%;
  background: linear-gradient(
      180deg,
      #f9f9f9 4.69%,
      rgba(254, 254, 254, 0.226848) 78.38%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${heroBg});
  background-size: cover;
`;

export const HomeListings = styled.section`
  padding: 3em var(--main-padding-x);
  // padding: 3em var(--main-padding-x);
`;

export const ListingRow = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 400px;
  column-gap: 20px;
`;

export const NewsletterFrame = styled.section`
  background-color: ${({ theme }) => theme.colors.signupBg};
  display: flex;
`;

export const NewsletterImage = styled.div`
  width: 95%;
  background-image: url(${signupImg});
  background-size: cover;
  background-position: center;
`;

export const NewsletterText = styled.div`
  padding: 10rem var(--main-padding-x);
`;

export const SignupForm = styled.div`
  display: flex;
  margin-top: 2em;
`;

export const SignupInput = styled(Input)`
  width: 55%;
  font-size: 1em;
`;

export const SignupButton = styled.button`
  font-size: 1em;
  width: 45%;
  background-color: ${({ theme }) => theme.colors.mutedLightBlue};
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const ListingFormFrame = styled.section`
  padding: 10rem var(--main-padding-x);
  display: flex;
`;

export const ListingFormText = styled.div`
  width: 50%;
  padding-right: 5em;
`;

export const ListingForm = styled.form`
  width: 50%;
`;

export const ListingFormDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  box-shadow: 0px 4px 16px 0px rgb(0, 0, 0, 0.1);
  padding: 1.6875em;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;
