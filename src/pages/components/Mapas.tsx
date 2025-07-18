import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Box } from "@mui/material";

// Mapa de Pontos de Coleta em Natal, RN
export function ColetaMapa() {
  const center: LatLngExpression = [-5.79448, -35.211]; // Coordenadas de Natal, RN
  const zoom = 13;

  // Lista de pontos de coleta (simulados)
  const pontosDeColeta = [
    {
      id: 1,
      name: "Coleta Eletrônicos - EletroRecicla Natal",
      location: [-5.80131375378803, -35.21462572814398] as LatLngExpression
    },
    {
      id: 2,
      name: "Coleta Pilhas - ReciclaPower Natal",
      location: [-5.792546712003911, -35.21108216152871] as LatLngExpression
    },
    {
      id: 3,
      name: "Coleta Lâmpadas - EcoLuz Natal",
      location: [-5.78506846653428, -35.209129899847945] as LatLngExpression
    }
  ];

  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: "#F7F7F8",
        padding: "30px",
        borderRadius: "10px"
      }}
    >
      <Box>
        <h3>Pontos de coleta mais próximos</h3>
      </Box>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {pontosDeColeta.map((ponto) => (
          <Marker key={ponto.id} position={ponto.location}>
            <Popup>{ponto.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
}

// Mapa de Assistências Técnicas em Natal, RN
export function AssistenciaTecnicaMapa() {
  const center: LatLngExpression = [-5.79448, -35.211]; // Coordenadas de Natal, RN
  const zoom = 13;

  // Lista de assistências técnicas (simulados)
  const assistencias = [
    {
      id: 1,
      name: "TechFix - Reparos Eletrônicos Natal",
      location: [-5.785526312196643, -35.21396543184071] as LatLngExpression
    },
    {
      id: 2,
      name: "ReciclaTech - Assistência Técnica Natal",
      location: [-5.7990544854400845, -35.20452801732348] as LatLngExpression
    },
    {
      id: 3,
      name: "Eletrônicos Express - Consertos rápidos Natal",
      location: [-5.792966789631952, -35.20200504275353] as LatLngExpression
    }
  ];

  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: "#F7F7F8",
        padding: "30px",
        borderRadius: "10px"
      }}
    >
      <Box>
        <h3>Assistências técnicas mais próximas</h3>
      </Box>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {assistencias.map((assistencia) => (
          <Marker key={assistencia.id} position={assistencia.location}>
            <Popup>{assistencia.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
}
