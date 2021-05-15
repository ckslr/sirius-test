import styled from "@emotion/styled";
import React from "react";

import { StyledOptionsCard, StyledCardName } from "./OptionsCard";

interface SpeedOptionsCardProps {
  speed: number;
  onSpeedChange: (e: any) => void;
  onSpeedIncrement: () => void;
  onSpeedDecrement: () => void;
}

const StyledSpeedButtonsWrapper = styled.div`
  display: flex;
`;

const StyledSpeedButton = styled.button`
  width: 4rem;
  height: 4rem;
  background: #fdd207;
  border: 0;
  cursor: pointer;
  font-size: 4.5rem;
  margin: 0 0.5rem;
  text-align: center;
  line-height: 4rem;
`;

const StyledSpeedInput = styled.input`
  width: 120px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 20px;
  outline: none;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  text-align: center;
  padding: 1rem;
`;
const StyledCardHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1.5rem;
  align-items: baseline;
  margin-bottom: 1.2rem;
`;

export const SpeedOptionsCard = ({
  onSpeedChange,
  onSpeedIncrement,
  onSpeedDecrement,
  speed,
}: SpeedOptionsCardProps) => (
  <StyledOptionsCard>
    <StyledCardHeader>
      <StyledCardName>Скорость</StyledCardName>
      <StyledSpeedInput type="number" onChange={onSpeedChange} value={speed} />
      <StyledCardName>сек.</StyledCardName>
    </StyledCardHeader>

    <StyledSpeedButtonsWrapper>
      <StyledSpeedButton onClick={onSpeedDecrement}>-</StyledSpeedButton>
      <StyledSpeedButton onClick={onSpeedIncrement}>+</StyledSpeedButton>
    </StyledSpeedButtonsWrapper>
  </StyledOptionsCard>
);
