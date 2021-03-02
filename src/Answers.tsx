import React from "react";
import {AnswersType} from "./App";

export function Answers(props:AnswersType){
    return(
        <div>
            <div className="title">
                <div className="question">{props.question}</div>
                <div className="answer">{props.answer}</div>
            </div>
        </div>
    )
}