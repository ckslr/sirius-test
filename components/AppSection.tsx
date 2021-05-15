import styled from "@emotion/styled";
import React from "react";

const StyledAppSection = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));

  align-items: center;
`;

export const StyledStartButton = styled.button`
  height: 109.52693176269531px;
  width: 389.1086730957031px;
  cursor: pointer;

  place-self: center;
  background: #fdd207;
  border: 0;

  font-size: 3rem;
  color: #371548;
  font-style: normal;
  font-weight: 700;
  line-height: 57px;
  letter-spacing: 0em;
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-transform: uppercase;

  border-radius: 81.52752685546875px;
`;

export const AppSection: React.FC = ({ children }) => (
  <StyledAppSection>{children}</StyledAppSection>
);
