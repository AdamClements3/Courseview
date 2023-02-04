import * as React from "react"

function Card(props) {
    return (
      <div className="card">
        <h2>{props.name}</h2>
        <div>
            <h3>Overall Score: {props.score}</h3>
            <h3>Difficulty: {props.diff}</h3>
            <h3>Take Again Percentage: {props.percent}</h3>
        </div>
      </div>
    );
}
export default Card;