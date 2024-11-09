import { useState } from "react";
import "./module.Rows.css"

function Rows(props) {

    return(
        <div key={"container" + props.row.name + props.index}>
            <div key={"name" + props.row.name + props.index}>{props.row.name}</div>
            <div key={"description" + props.row.name + props.index}>{props.row.description}</div>
            <div key={"deadline" + props.row.name + props.index}>{props.row.deadline}</div>
        </div>
    )
}

export default Rows