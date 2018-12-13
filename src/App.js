//loading the map from google map apis
import React, { Component } from 'react';
import './App.css';
import LocationTitle from "./LocationTitle";
import LocationDetail from "./LocationDetail";
import Img from './Hamburger_icon.png'

class App extends Component {
  initMap() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
          center:  {lat: 19.0760, lng: 72.8777},
          zoom: 14
  });
    window.mapObject =map;
}
  loadScript(){
      let scriptElement= this.createMapScript();
      let scriptsOnPage = document.getElementsByTagName('script');
      let script = scriptsOnPage[0];
      script.parentNode.insertBefore(scriptElement, script);
      window.initMap =  this.initMap;
  }

  createMapScript(){
    let mapScript= document.createElement("script");
    const API_KEY = 'AIzaSyDQp6xkhnPd51GF9ecPC-42pcdiGdul4Ic';
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    mapScript.defer=true;
    mapScript.async = true;
    return mapScript;
  }
  render() {
    this.loadScript();
    return (
      
       <div className="App">
       <div id='hamburger_menu'>
       <img src={Img} onClick={() => {
         document.getElementById('sideBars').classList.toggle('show');
       }} alt='menu'/>
			</div>
        <LocationTitle/>
        <LocationDetail/>
       </div>
      )
  }
}
export default App;