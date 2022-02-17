import React from "react";
import styled from "styled-components";
import TrackPlayerScreen from "../components/TrackPlayerModal";
import TrackListScreen from "./TrackListScreen";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
`;

export const Home = () => {
    return (
        <Container>
            <StyledText>Home</StyledText>
        </Container>
    );
};

export const List = () => {
    return <TrackListScreen />;
};

export const Search = () => {
    return (
        <Container>
            <StyledText>Search</StyledText>
        </Container>
    );
};
