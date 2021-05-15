import styled from "@emotion/styled";
import React from "react";

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
`;

export const Container: React.FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
