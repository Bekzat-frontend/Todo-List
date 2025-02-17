import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

const Card = () => {
  const [card, setCards] = useState([]);
  const getCard = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCards(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCard();
  }, []);
  return (
    <StyledContainer>
      {card.map((item) => (
        <CardItem {...item} key={item.id} />
      ))}
    </StyledContainer>
  );
};

export default Card;

const StyledContainer = styled.div`
  gap: 15px;
  color: white;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
// const StyledCircle = styled.span`
// position: relative;
//   border-radius: 50%;
//   width:15px;
//   height: 5px;
//   background-color: red;
//   font-size: 10px;
//   color: black  ;
// padding-left: 13px;
// bottom: 10px;
// `;
