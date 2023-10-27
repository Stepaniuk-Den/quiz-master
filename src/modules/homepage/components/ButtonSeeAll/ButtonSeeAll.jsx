import React from 'react';
import { Link } from "react-router-dom";
import { ButtonSeeALL } from './ButtonSeeAllStyled';

const ButtonSeeAll = ({ to }) => {
    return (
        <Link to={to}>
            <ButtonSeeALL>See all</ButtonSeeALL>
        </Link>
    );
};

export default ButtonSeeAll;