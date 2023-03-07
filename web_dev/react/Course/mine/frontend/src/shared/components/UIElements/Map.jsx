import React, { useEffect } from "react";
import OpenMap from "ol/Map.js";
import View from "ol/View.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import { useGeographic } from "ol/proj.js";
import { Vector as VectorLayer } from "ol/layer.js";
import { Vector as VectorSource } from "ol/source.js";
import { Feature } from "ol/index.js";
import { Point } from "ol/geom.js";

import "./Map.css";

const Map = (props) => {
  const { center, zoom } = props;
  // const mapRef = useRef();

  useGeographic();
  const point = new Point([center.lng, center.lat]);

  useEffect(() => {
    new OpenMap({
      target: "map",
      view: new View({
        center: [center.lng, center.lat],
        zoom: zoom,
      }),
      layers: [
        new TileLayer({ source: new OSM() }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          style: {
            "circle-radius": 4,
            "circle-fill-color": "red",
          },
        }),
      ],
    });
  }, [center, zoom]);

  return (
    <div
      // ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;
