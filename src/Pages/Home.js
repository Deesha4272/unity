import './Home.css';
import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className = "Home">
            <h2>Title, Map, and Message box goes on this page</h2>
            <div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="BLM" src="//utdepps.maps.arcgis.com/apps/Embed/index.html?webmap=2a9e60cd99034f6fbad720e60a1fa440&extent=-142.0796,10.6385,-45.312,52.7892&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"></iframe></div>
        </div>
 
    );
}

export default Home;
