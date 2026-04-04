import { MapContainer, TileLayer, Polygon, Marker } from "react-leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const center = [47.0584, 2.3968];
const initialZoom = 19;

const places = [
  {
    name: "Toilettes",
    points: [
      [47.058155, 2.396675],
      [47.058155, 2.396740],
      [47.058123, 2.396740],
      [47.058123, 2.396675],
    ],
    fillColor: "#ffffff",
    color: "#d6e0ea",
    textColor: "#102a43",
  },
  {
    name: "Buvette",
    points: [
      [47.058645, 2.396790],
      [47.058645, 2.396860],
      [47.058612, 2.396860],
      [47.058612, 2.396790],
    ],
    fillColor: "#ffffff",
    color: "#d6e0ea",
    textColor: "#102a43",
  },
  {
    name: "Podium",
    points: [
      [47.060312, 2.397500],
      [47.060312, 2.397588],
      [47.060270, 2.397588],
      [47.060270, 2.397500],
    ],
    fillColor: "#ffffff",
    color: "#d6e0ea",
    textColor: "#102a43",
  },
  {
    name: "Ponton d'embarquement",
    points: [
      [47.058332, 2.397340],
      [47.058332, 2.397850],
      [47.058292, 2.397850],
      [47.058292, 2.397340],
    ],
    fillColor: "#ffffff",
    color: "#d6e0ea",
    textColor: "#102a43",
  },
];

function getPolygonCenter(points) {
  const lat =
    points.reduce((sum, point) => sum + point[0], 0) / points.length;
  const lng =
    points.reduce((sum, point) => sum + point[1], 0) / points.length;

  return [lat, lng];
}

function getMetersFromLatDiff(latDiff) {
  return latDiff * 111320;
}

function getMetersFromLngDiff(lngDiff, latitude) {
  return lngDiff * 111320 * Math.cos((latitude * Math.PI) / 180);
}

function getPolygonDimensions(points) {
  const lats = points.map(([lat]) => lat);
  const lngs = points.map(([, lng]) => lng);

  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  const centerLat = (minLat + maxLat) / 2;

  const heightMeters = getMetersFromLatDiff(maxLat - minLat);
  const widthMeters = getMetersFromLngDiff(maxLng - minLng, centerLat);

  return {
    widthMeters,
    heightMeters,
    smallestSideMeters: Math.min(widthMeters, heightMeters),
    largestSideMeters: Math.max(widthMeters, heightMeters),
  };
}

function getLabelStyle(place) {
  const { widthMeters, heightMeters, smallestSideMeters, largestSideMeters } =
    getPolygonDimensions(place.points);

  let fontSize = 12;
  let maxWidth = 100;

  if (largestSideMeters >= 35) {
    fontSize = 14;
    maxWidth = 180;
  } else if (largestSideMeters >= 20) {
    fontSize = 12;
    maxWidth = 130;
  } else if (largestSideMeters >= 10) {
    fontSize = 10;
    maxWidth = 90;
  } else {
    fontSize = 8;
    maxWidth = 70;
  }

  if (smallestSideMeters < 4) {
    fontSize = Math.min(fontSize, 8);
    maxWidth = Math.min(maxWidth, 70);
  } else if (smallestSideMeters < 6) {
    fontSize = Math.min(fontSize, 9);
    maxWidth = Math.min(maxWidth, 85);
  }

  const isVeryWide = widthMeters > heightMeters * 2.5;

  return {
    fontSize,
    maxWidth,
    whiteSpace: isVeryWide ? "nowrap" : "normal",
  };
}

function createLabelIcon(place) {
  const style = getLabelStyle(place);

  return L.divIcon({
    className: "building-marker-label-wrapper",
    html: `
      <div
        class="building-marker-label"
        style="
          color: ${place.textColor};
          font-size: ${style.fontSize}px;
          font-weight: 700;
          line-height: 1.1;
          text-align: center;
          max-width: ${style.maxWidth}px;
          white-space: ${style.whiteSpace};
          overflow-wrap: break-word;
          word-break: break-word;
          text-shadow: 0 0 2px rgba(255,255,255,0.95);
          transform: translate(-50%, -50%);
        "
      >
        ${place.name}
      </div>
    `,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });
}

function ResizeMap() {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
}

function Buildings() {
  return (
    <>
      {places.map((place) => (
        <Polygon
          key={`poly-${place.name}`}
          positions={place.points}
          pathOptions={{
            color: place.color,
            weight: 1,
            fillColor: place.fillColor,
            fillOpacity: 0.95,
          }}
        />
      ))}

      {places.map((place) => (
        <Marker
          key={`label-${place.name}`}
          position={getPolygonCenter(place.points)}
          icon={createLabelIcon(place)}
          interactive={false}
        />
      ))}
    </>
  );
}

export default function CarteSite() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        center={center}
        zoom={initialZoom}
        zoomControl={false}
        attributionControl={true}
        dragging={true}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        touchZoom={true}
        boxZoom={true}
        keyboard={true}
        zoomAnimation={false}
        markerZoomAnimation={false}
        fadeAnimation={false}
        style={{ width: "100%", height: "100%" }}
      >
        <ResizeMap />
        <TileLayer
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          maxZoom={20}
        />
        <Buildings />
      </MapContainer>
    </div>
  );
}