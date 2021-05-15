import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { prepareWords } from "../utils";
import Image from "next/image";

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  height: 98vh;
`;

const StyledWord = styled.div<{ gap: number }>`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: ${props => (props.gap ? `${props.gap}px` : "")};

  font-size: 60px;
  font-style: normal;
  font-weight: 900;
  line-height: 70px;
  letter-spacing: 0px;
  text-align: left;
  color: #371548;
`;

const StyledResultDesc = styled.div`
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: center;
  color: #2b3172;
`;

export default function Quiz() {
  const {
    query: { speed, numberOfWords, wordsLength, distance, distanceScale },
  } = useRouter();

  const [words] = useState(() => {
    const preparedWords = prepareWords(numberOfWords, wordsLength);

    if (prepareWords.length === 0) {
      return [];
    }

    return preparedWords;
  });
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [wordDistance, setWordDistance] = useState<number>(+distance);
  const [status, setStatus] = useState<string | undefined>("kek");

  useEffect(() => {
    const id = setInterval(() => {
      if (words.length !== 0) {
        if (currentWordIndex < words.length - 1) {
          setCurrentWordIndex(i => i + 1);
          setWordDistance(d => d + +distanceScale);
        } else {
          clearInterval(id);
          setStatus("end");
        }
      } else {
      }
    }, +speed * 1000);

    return () => {
      clearInterval(id);
    };
  }, [currentWordIndex, setStatus, words, setWordDistance]);

  return (
    <StyledContainer>
      {status === "end" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Image src="/dog.png" alt="dog Logo" width={460} height={540} />
          <StyledResultDesc>Отличная работа!</StyledResultDesc>
        </div>
      ) : words.length !== 0 ? (
        <StyledWord gap={wordDistance}>
          {words[currentWordIndex].substr(
            0,
            words[currentWordIndex]?.length / 2,
          )}
          <span>~</span>
          {words[currentWordIndex]?.substr(words[currentWordIndex].length / 2)}
        </StyledWord>
      ) : (
        <StyledResultDesc>
          Таких слов нет!
          <br />
          Попробуй другие!
        </StyledResultDesc>
      )}
    </StyledContainer>
  );
}

// https://github.com/vercel/next.js/discussions/11484
export async function getServerSideProps() {
  return { props: {} };
}
