import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, View, SafeAreaView } from "react-native";
import RestaurantCard from "../components/restaurant-card.component";
import { mockRestaurantData } from "../mock/restaurant";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchBarContainer = styled(View)`
  padding: 10px;
`;

const StyledSearchBar = styled(Searchbar)`
  background-color: #d8e6ec;
`;

const StyledListBlock = styled(View)`
  flex: 1;
  padding: 10px;
`;

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchBarContainer>
        <StyledSearchBar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchBarContainer>
      <StyledListBlock>
        <RestaurantCard restaurant={mockRestaurantData} />
      </StyledListBlock>
    </SafeArea>
  );
};

export default RestaurantsScreen;
