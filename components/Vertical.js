import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { apiImage } from "../api";
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

const Vertical = ({ poster, title, votes }) => (
    <TouchableOpacity>
        <Container>
            <Poster url={apiImage(poster)} />
            <Title>{title.length > 10 ? `${title.slice(0, 10)}...` : title}</Title>
            <Votes votes={votes}></Votes>
        </Container>
    </TouchableOpacity>
)

Vertical.PropTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
}

export default Vertical;