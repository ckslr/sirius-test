import React from "react";
import styled from "@emotion/styled";

const StyledAppHeader = styled.header`
  display: grid;
  padding: 2.5rem;
  place-items: center;
`;

const StyledH1 = styled.h1`
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 75px;
  letter-spacing: 0em;
  color: #2b3172;
`;

export const AppHeader = () => (
  <StyledAppHeader>
    <StyledH1>Тренажер «Поле зрения»</StyledH1>
  </StyledAppHeader>
);
