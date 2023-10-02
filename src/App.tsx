import React from 'react';
import './App.css';
import {FaDiscord} from "react-icons/fa";
import lrg from "./lrg.png";

function App() {
    return (
        <div className="App">
            <div className="header">
                <span className="service-status">準備中</span>
                <span className="service-name">Domination Stats</span>
                <a className="discord-link" href="https://discord.gg/emc8GpVhHh">
                    <FaDiscord size={32} color="white"/>
                </a>
            </div>
            <div className="copy-right">
                <img src={lrg} className="copy-right-logo" alt="logo"/>
                <span className="copy-right-text">© 2023 LRG Minecraft Server.</span>
            </div>
        </div>
    );
}

export default App;
