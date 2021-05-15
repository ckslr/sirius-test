import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const StyledAppLogo = styled.div`
  position: absolute;
  width: 250px;
  height: 100.71px;
  right: 35px;
  top: 30px;

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

export const AppLogo = () => (
  <StyledAppLogo>
    <Image src="/sirius-logo.png" alt="Vercel Logo" width={337} height={134} />
  </StyledAppLogo>
);
