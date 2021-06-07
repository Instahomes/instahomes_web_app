import React, { useState } from "react";
import styled from "styled-components";

export const AccountDropdownStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.9em;

  span {
    color: ${({ theme, dark }) =>
      dark ? theme.colors.softWhite : theme.colors.darkBlue};
    font-size: 16px;
    line-height: 1px;
    font-weight: 500;
  }
`;

export const DropdownDiv = styled.div`
  position: absolute;
  background: #fbfbfb;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  font-size: 0.9em;
  top: 2.2em;

  ul {
    padding: 1em 1em;
    margin: 0;
  }

  li {
    list-style: none;
    margin: 0;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.darkBody};
    font-size: 1em;
  }
`;

const AccountDropdown = ({ dark }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <React.Fragment>
      <AccountDropdownStyle dark={dark}>
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9934 14.6894C15.1503 13.3309 13.2942 11.875 9.50012 11.875C5.70604 11.875 3.85115 13.3297 3.00684 14.6894C3.78475 15.6646 4.77256 16.4519 5.89677 16.9926C7.02097 17.5333 8.25264 17.8136 9.50012 17.8125C10.7476 17.8136 11.9793 17.5333 13.1035 16.9926C14.2277 16.4519 15.2155 15.6646 15.9934 14.6894Z"
            fill={dark ? "#F7F7F7" : "#3F526A"}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.5 10.6875C10.4448 10.6875 11.351 10.3122 12.0191 9.64407C12.6872 8.97598 13.0625 8.06984 13.0625 7.125C13.0625 6.18017 12.6872 5.27403 12.0191 4.60593C11.351 3.93783 10.4448 3.5625 9.5 3.5625C8.55517 3.5625 7.64903 3.93783 6.98093 4.60593C6.31283 5.27403 5.9375 6.18017 5.9375 7.125C5.9375 8.06984 6.31283 8.97598 6.98093 9.64407C7.64903 10.3122 8.55517 10.6875 9.5 10.6875Z"
            fill={dark ? "#F7F7F7" : "#3F526A"}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.5 1.1875C7.29539 1.1875 5.18107 2.06328 3.62217 3.62217C2.06328 5.18107 1.1875 7.29539 1.1875 9.5C1.1875 11.7046 2.06328 13.8189 3.62217 15.3778C5.18107 16.9367 7.29539 17.8125 9.5 17.8125C11.7046 17.8125 13.8189 16.9367 15.3778 15.3778C16.9367 13.8189 17.8125 11.7046 17.8125 9.5C17.8125 7.29539 16.9367 5.18107 15.3778 3.62217C13.8189 2.06328 11.7046 1.1875 9.5 1.1875ZM0 9.5C0 6.98044 1.00089 4.56408 2.78249 2.78249C4.56408 1.00089 6.98044 0 9.5 0C12.0196 0 14.4359 1.00089 16.2175 2.78249C17.9991 4.56408 19 6.98044 19 9.5C19 12.0196 17.9991 14.4359 16.2175 16.2175C14.4359 17.9991 12.0196 19 9.5 19C6.98044 19 4.56408 17.9991 2.78249 16.2175C1.00089 14.4359 0 12.0196 0 9.5Z"
            fill={dark ? "#F7F7F7" : "#3F526A"}
          />
        </svg>
        <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          DANI DEL RIO
        </span>
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.46967 6.1819C5.76256 6.4748 6.23744 6.4748 6.53033 6.1819L11.3033 1.40893C11.5962 1.11604 11.5962 0.641165 11.3033 0.348272C11.0104 0.0553792 10.5355 0.0553792 10.2426 0.348272L6 4.59091L1.75736 0.348272C1.46447 0.0553792 0.989593 0.0553792 0.696699 0.348272C0.403806 0.641165 0.403806 1.11604 0.696699 1.40893L5.46967 6.1819ZM5.25 4V5.65157H6.75V4H5.25Z"
            fill={dark ? "#E0E0E0" : "#879EBB"}
          />
        </svg>
        {isDropdownOpen && (
          <DropdownDiv>
            <ul>
              <li>Account Settings</li>
              <li>Log out</li>
            </ul>
          </DropdownDiv>
        )}
      </AccountDropdownStyle>
    </React.Fragment>
  );
};

export default AccountDropdown;
