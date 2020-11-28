"use strict";
exports.__esModule = true;
var mapbox_gl_1 = require("mapbox-gl");
mapbox_gl_1["default"].accessToken =
    "pk.eyJ1Ijoia2FtaS14ZCIsImEiOiJjazlrenk4Z2MwMDZxM2tzNXlyajY3Z2dnIn0.XcA9Afgnbx-l-L5X6SHCfg";
var map = new mapbox_gl_1["default"].Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-74.5, 40],
    zoom: 9
});
