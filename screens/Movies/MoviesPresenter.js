import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Vertical from "../../components/Vertical";

import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View``;
const SliderContainer = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 4}px;
    margin-bottom:50px;
`;
export default ({ loading, nowPlaying, popular }) => (
    <ScrollView style={{ backgroundColor: "black", flex: 1 }}
        contentContainerstyle={{
            flex: 1,
            justifyContent: loading ? "center" : "flex-start"
        }}
    >
        {nowPlaying.length == 0 ? (
            <ActivityIndicator color="white" size="small" />
        ) : (
                <>
                    <SliderContainer>
                        <Swiper controlsEnabled={false} loop timeout={3}>
                            {nowPlaying.map(movie => (
                                <Slide
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    overview={movie.overview}
                                    votes={movie.vote_average}
                                    backgroundImage={movie.backdrop_path}
                                    poster={movie.poster_path}
                                />
                            ))}
                        </Swiper>
                    </SliderContainer>
                    <Container>
                        <Title title={"Popular Movies"} />
                        <ScrollView
                            style={{ marginTop: 20 }}
                            contentContainerStyle={{ paddingLeft: 30 }}
                            horizontal
                        >
                            {popular.map(movie => <Vertical key={movie.id} poster={movie.poster_path} title={movie.title} votes={movie.vote_average} />)}
                        </ScrollView>
                    </Container>
                </>
            )}
    </ScrollView>
);