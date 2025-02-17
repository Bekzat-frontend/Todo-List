import React from "react";
import styled from "styled-components";
const isActivePersons = {
  Alive:
    "https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-green-circle-png-image_2382000.jpg",
  unknown:
    "https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-gray-circle-png-image_2381994.jpg",
  Dead: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Red_Circle_full.png",
};

function CardItem(props) {
  console.log(props);
  const { name, image, status, species, origin, location } = props;
  

  return (
    <div>
      <StyledCircle>
        <img src={image} />
        <section>
          <div>
            <h1>{name}</h1>
            <h1>
              <img src={isActivePersons[status]} />
              {status} - {species}
            </h1>
          </div>
          <div>
            <h4>Last known location:</h4>
            <h2>{origin.name}</h2>
          </div>
          <div>
            <h4>First seen in:</h4>
            <h2>{location.name}</h2>
          </div>
        </section>
      </StyledCircle>
    </div>
  );
}
const StyledCircle = styled.div`
  display: flex;
  width: 600px;
  height: 220px;
  background-color: #3c3e44;
  border-radius: 16px;
  line-height: 5px;
  section {
    display: flex;
    padding-left: 5px;
    flex-direction: column;
    height: 220px;
    justify-content: start;
  }
  img {
    width: 229px;
    height: 220px;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
  }
  h1 {
    display: flex;
    align-items: center;
  }
  h4 {
    color: gray;
  }
  h1 img {
    border-radius: 50%;

    width: 12px;
    height: 12px;
  }
`;

export default CardItem;
