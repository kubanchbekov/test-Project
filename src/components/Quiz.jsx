import React from "react";
import styled from "styled-components";
import Question from "./Question";

const Quiz = ({ question, currentQuestion, handlerAmswerOpition }) => {
  return (
    <>
      <QuestionContainer>
        <QuestionCount>
          <span> Question{currentQuestion + 1}</span>/{question.length}
        </QuestionCount>
        <QuestionText>{question[currentQuestion].questionText}</QuestionText>
      </QuestionContainer>
      <AnswerOptionsContainer>
        {question[currentQuestion].answerOptions.map((item) => (
          <Question
            key={item.id}
            {...item}
            handlerAmswerOpition={handlerAmswerOpition}
          />
        ))}
      </AnswerOptionsContainer>
    </>
  );
};

export default Quiz;
const QuestionContainer = styled.div`
  width: 100%;
  position: relative;
`;

const QuestionCount = styled.div`
  margin-bottom: 20px;
`;

const QuestionText = styled.div`
  margin-bottom: 12px;
`;

const AnswerOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
