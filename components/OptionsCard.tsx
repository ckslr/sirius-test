import React from "react";
import styled from "@emotion/styled";

export const StyledOptionsCard = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background: #ffffff;

  box-shadow: 0px 4px 4px 0px #00000040;

  border-radius: 2.5rem;
  padding-top: 2em;
  padding-bottom: 1.5rem;
`;

export const StyledCardName = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  color: #371548;
  margin-bottom: 0.8rem;
`;

const StyledInputRange = styled.input`
  height: 2.5rem;
  width: 80%;

  &[type="range"]::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    background: #0e0c0b;
    margin-top: -12px;
    border: 13px solid #fdd207;
    border-radius: 50%;
    cursor: pointer;
  }

  &[type="range"]::-webkit-slider-runnable-track {
    background: #fdd207;
    border-radius: 20px;
    width: 100%;
    height: 23px;
    cursor: pointer;
  }
`;

const StyledDatalistWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const StyledDatalistUnit = styled.span<{ isSelected: boolean }>`
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0px;
  text-align: left;

  color: ${props => (props.isSelected ? "hotpink" : "black")};
`;

interface OptionsCardProps {
  description: string;
  name: string;
  datalist: Array<number>;
  step: number;
  min: number;
  max: number;
  selectedUnit: number;
  onSelectedOptionChange: (e: any) => void;
}

export const OptionsCard = ({
  description,
  datalist,
  min,
  max,
  step,
  name,
  selectedUnit,
  onSelectedOptionChange,
}: OptionsCardProps) => (
  <StyledOptionsCard>
    <StyledCardName>{description}</StyledCardName>

    <StyledDatalistWrapper>
      {datalist.map(d => {
        let isSelected = false;

        if (selectedUnit === d) {
          isSelected = true;
        }

        return (
          <StyledDatalistUnit isSelected={isSelected} key={d}>
            {d}
          </StyledDatalistUnit>
        );
      })}
    </StyledDatalistWrapper>

    <StyledInputRange
      name={name}
      type="range"
      step={step}
      min={min}
      max={max}
      onChange={onSelectedOptionChange}
    />
  </StyledOptionsCard>
);
