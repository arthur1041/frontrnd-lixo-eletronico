import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ColetaMapa } from "./components/Mapas";
import ContainerBox from "./components/ContainerBox";

export function PontosDeColeta() {
  const pontos = [
    {
      id: 1,
      nome: "EcoCentro Zona Sul",
      endereco: "Av. Ayrton Senna, 1000 - Nova Parnamirim",
      status: "Aberto"
    },
    {
      id: 2,
      nome: "Natal Recicla",
      endereco: "R. Jaguarari, 2333 - Lagoa Nova",
      status: "Aberto"
    },
    {
      id: 3,
      nome: "ColetaTech",
      endereco: "Av. Prudente de Morais, 987 - Tirol",
      status: "Fechado"
    }
  ];

  return (
    <Box width="100%">
      <Navbar />
      <Box display="flex" flexDirection="row" width="100%">
        <Sidebar />
        <ContainerBox>
          <Box width="100%" padding="50px">
            <h2 style={{ marginBottom: "20px" }}>Pontos de Coleta</h2>

            <Box marginBottom="40px">
              <ColetaMapa />
            </Box>

            <Box display="flex" flexDirection="column" gap={2}>
              {pontos.map((ponto) => (
                <Box
                  key={ponto.id}
                  border="1px solid #ccc"
                  borderRadius="10px"
                  padding="20px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <h3 style={{ margin: 0 }}>{ponto.nome}</h3>
                    <p style={{ margin: "5px 0" }}>{ponto.endereco}</p>
                    <p
                      style={{
                        margin: 0,
                        color: ponto.status === "Aberto" ? "green" : "red",
                        fontWeight: "bold"
                      }}
                    >
                      {ponto.status}
                    </p>
                  </Box>
                  <button
                    disabled={ponto.status !== "Aberto"}
                    style={{
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor:
                        ponto.status === "Aberto" ? "pointer" : "not-allowed",
                      opacity: ponto.status === "Aberto" ? 1 : 0.5
                    }}
                  >
                    Solicitar coleta
                  </button>
                </Box>
              ))}
            </Box>
          </Box>
        </ContainerBox>
      </Box>
    </Box>
  );
}
