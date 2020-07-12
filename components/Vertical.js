import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { apiImage } from "../api";
import { trimText } from "../utils";
import Poster from "./Poster";
import Votes from "./Votes";
const Container = styled.View`
    align-items:center;
    margin-right:20px;
`;

const Title = styled.Text`
    color: white;
    font-weight:500;
    margin-top:10px;
    margin-bottom:5px;
`;

const Vertical = ({ id, poster, title, votes }) => (
    <TouchableOpacity>
        <Container>
            <Poster url={poster} />
            <Title>{trimText(title, 10)}</Title>
            <Votes votes={votes}></Votes>
        </Container>
    </TouchableOpacity>
)

Vertical.PropTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
}

export default Vertical;