import React from "react";
import './style.css';

const aboutTable = (props) => {
    return(
        <table>
            <tbody>
                <tr><th>Subject</th><th>Tech</th></tr>
                <tr><td>Frontend</td><td>{props.front}</td></tr>
                <tr><td>Backend</td><td>{props.back}</td></tr>
                <tr><td>Database</td><td>{props.db}</td></tr>
                <tr><td>Mobile Responsive</td><td>{props.mResponsive}</td></tr>
            </tbody>
        </table>
    );
}

export default aboutTable;