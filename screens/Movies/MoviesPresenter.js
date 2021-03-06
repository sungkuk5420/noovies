import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View``;
const UpcomingContainer = styled.View`
  margin-top: 20px;
`;
const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 4}px;
    margin-bottom:50px;
`;
export default ({ loading, nowPlaying, popular, upcoming }) => (
    <ScrollView style={{ backgroundColor: "black", flex: 1 }}
        contentContainerstyle={{
            flex: loading ? 1 : "auto",
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
                            style={{ marginTop: 20, marginBottom: 40 }}
                            contentContainerStyle={{ paddingLeft: 30 }}
                            horizontal
                        >
                            {popular.map(movie => (
                                <Vertical
                                    id={movie.id}
                                    key={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    votes={movie.vote_average}
                                />
                            ))}
                        </ScrollView>
                        <Title title={"Coming Soon"}></Title>
                        <UpcomingContainer>
                            {upcoming.filter(movie => movie.poster_path).map(movie => (
                                <Horizontal
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    releaseDate={movie.release_date}
                                    poster={movie.poster_path}
                                    overview={movie.overview}
                                />
                            ))}
                        </UpcomingContainer>
                    </Container>
                </>
            )}
    </ScrollView>
);