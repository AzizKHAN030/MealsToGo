import React from "react";
import { Card, Text } from "react-native-paper";
import { RestaurantCardType } from "../types";
import { styled } from "styled-components/native";

interface RestaurantCardProps {
  restaurant: RestaurantCardType;
}

const StyledCard = styled(Card)`
  background-color: #d8e6ec;
`;

const StyledCardContent = styled(Card.Content)`
  padding: 15px;
`;

const Title = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <StyledCard>
      <Card.Cover source={{ uri: restaurant.photos[0] }} />
      <StyledCardContent>
        <Title>{restaurant.name}</Title>
      </StyledCardContent>
    </StyledCard>
  );
};

export default RestaurantCard;
