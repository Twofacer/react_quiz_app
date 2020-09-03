import React from "react"
import classes from "./AnswersList.module.css"
import AnserItem from './AnserItem/AnserItem.js'
const AnswersList = props => (
    <ul className={classes.AnswersList}>
     {props.answers.map((answer,index) => {
         return (
             <AnserItem 
             key={index}
             answer = {answer} 
             onAnswerClick = {props.onAnswerClick}
             state={props.state ? props.state[answer.id]: null}
             />
         )
     })}
    </ul>
)

export default AnswersList