import React, { useState } from "react";
import { useRouter } from "next/router";

import { AppHeader } from "../components/AppHeader";
import { AppSection, StyledStartButton } from "../components/AppSection";
import { Container } from "../components/Container";
import { OptionsCard } from "../components/OptionsCard";
import { SpeedOptionsCard } from "../components/SpeedOptionsCard";

const numberOfWords = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const wordsLength = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const wordDistance = [5, 10, 15, 20, 25, 30, 35, 40];

export default function Home() {
  const [options, setOptions] = useState<{ [k: string]: number }>(() => ({
    numberOfWords: numberOfWords[numberOfWords.length / 2],
    wordsLength: wordsLength[wordsLength.length / 2],
    distance: wordDistance[wordDistance.length / 2],
    distanceScale: wordDistance[wordDistance.length / 2],
    speed: 1,
  }));

  const router = useRouter();

  const onSpeedIncrement = () => {
    if (options.speed < 5)
      setOptions({ ...options, speed: options.speed + 0.5 });
  };

  const onSpeedDecrement = () => {
    if (options.speed > 1)
      setOptions({ ...options, speed: options.speed - 0.5 });
  };

  const onSpeedChange = e =>
    setOptions({ ...options, speed: e.target.valueAsNumber });

  const onSelectedOptionChange = e =>
    setOptions({ ...options, [e.target.name]: e.target.valueAsNumber });

  const onClick = () => {
    router.push({
      pathname: "/quiz",
      query: {
        numberOfWords: options.numberOfWords,
        wordsLength: options.wordsLength,
        distance: options.distance,
        distanceScale: options.distanceScale,
        speed: options.speed,
      },
    });
  };

  return (
    <>
      <AppHeader />

      <Container>
        <AppSection>
          <OptionsCard
            selectedUnit={options.numberOfWords}
            name="numberOfWords"
            onSelectedOptionChange={onSelectedOptionChange}
            step={1}
            min={1}
            max={10}
            description="Сколько слов"
            datalist={numberOfWords}
          />
          <OptionsCard
            selectedUnit={options.wordsLength}
            name="wordsLength"
            onSelectedOptionChange={onSelectedOptionChange}
            step={1}
            min={3}
            max={16}
            description="Сколько букв в словах"
            datalist={wordsLength}
          />
          <OptionsCard
            selectedUnit={options.distance}
            name="distance"
            onSelectedOptionChange={onSelectedOptionChange}
            step={5}
            min={5}
            max={40}
            description="Стартовое расстояние"
            datalist={wordDistance}
          />
          <OptionsCard
            selectedUnit={options.distanceScale}
            name="distanceScale"
            onSelectedOptionChange={onSelectedOptionChange}
            step={5}
            min={5}
            max={40}
            description="Увеличение расстояния"
            datalist={wordDistance}
          />

          <SpeedOptionsCard
            speed={options.speed}
            onSpeedChange={onSpeedChange}
            onSpeedIncrement={onSpeedIncrement}
            onSpeedDecrement={onSpeedDecrement}
          />

          <StyledStartButton onClick={onClick}>Старт</StyledStartButton>
        </AppSection>
      </Container>
    </>
  );
}
