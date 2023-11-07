import { Button } from '@mui/material';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { InputName, PageWrapper, QuizeBox } from './BaseQuizFormStyled';


const BaseQuizForm = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const quizId = searchParams.get("quizId");
    const category = searchParams.get("category");
    return (
        <PageWrapper>
            <QuizeBox>
            <h2>Log in to take the quiz</h2>
            <p>{category}</p>
            <InputName type="text" placeholder="Name"/>
            <Link to={`/quiz/${quizId}`}><Button>Start</Button></Link>
       </QuizeBox> 
        </PageWrapper>
    )
}

export default BaseQuizForm;