import React, {Component} from 'react';

import './Ads.css';
// import Remarkable from 'remarkable';
// import RemarkableReactRenderer from 'remarkable-react';

// const adsURL = `http://localhost:3000/ads/?r=' ${+ Math.floor(Math.random()*1000)}'`;
// const adPic = <img className="ad" src={adsURL} />

// const adPic = document.write('<img class="ad" src="/ads/?r=' + Math.floor(Math.random()*1000) + '"/>')

const mathOperation = Math.floor(Math.random()*1000);
const baseURL = `http://localhost:3000/ads/?r=${mathOperation}`
console.log(baseURL)
const Ads = () =>(
    
    // <div className="ad-container">
    //     <script>

    //     {document.write('<img class="ad" src="http://localhost:3000/ads/?r=' + Math.floor(Math.random()*1000) + '"/>')}
    //     {document.close()}
    //     </script>
    // </div>
    <div dangerouslySetInnerHTML={{__html: `http://localhost:3000/ads/?r=${mathOperation}`}}/>
)

export default Ads;