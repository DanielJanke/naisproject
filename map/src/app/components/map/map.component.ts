import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


 
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsamFua2UiLCJhIjoiY2pjbTc5c2M5MDgxMjJxczUxN2RrZ3RuNSJ9.0q10LXe5ZgRrJbubAXpzNQ';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10'
    });
  }

}
