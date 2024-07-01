import React from 'react';
import {Link} from "react-router-dom";
import styles from "./HomePage.css"
function HomePage(props) {
    return (
        <div  className={"homeContainer"}>
            <div className={"backdrop"}></div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8ZFyKnGmLedZx4NkTTL7ZQra8dc7T6vk6Q&s" alt=""/>
            <div className={"container content"}>
                <h1 className={"text-center"}>ძაღლი</h1>
                <h2 className={"text-center"}>ნახეთ ძაღლები</h2>
            </div>

        </div>
    );
}

export default HomePage;