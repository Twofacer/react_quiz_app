import React from "react"
import classes from "./AnserItem.module.css"

const AnserItem = props => {
    const cls = [classes.AnserItem]
    if(props.state) {
        cls.push(classes[props.state])
    }
    return (
        <li className={cls.join(' ')}
            onClick ={()=> props.onAnswerClick(props.answer.id )}
        >

            {props.answer.text}
        </li>
    )
}

export default AnserItem