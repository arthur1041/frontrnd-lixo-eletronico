import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContainerBox from "./components/ContainerBox";

export function MinhasColetas() {
  const coletas = [
    {
      id: 1,
      empresa: "Natal Recicla",
      endereco: "R. Jaguarari, 2333 - Lagoa Nova",
      data: "10/07/2025",
      status: "Concluída"
    },
    {
      id: 2,
      empresa: "EcoCentro Zona Sul",
      endereco: "Av. Ayrton Senna, 1000 - Nova Parnamirim",
      data: "14/07/2025",
      status: "Agendada"
    },
    {
      id: 3,
      empresa: "ColetaTech",
      endereco: "Av. Prudente de Morais, 987 - Tirol",
      data: "17/07/2025",
      status: "Pendente"
    }
  ];

  return (
    <Box width="100%">
      <Navbar />
      <Box display="flex" flexDirection="row" width="100%">
        <Sidebar />

        <ContainerBox>
          <Box width="100%" padding="50px">
            <h2 style={{ marginBottom: "20px" }}>Minhas Coletas</h2>

            <Box display="flex" flexDirection="column" gap={2}>
              {coletas.map((coleta) => (
                <Box
                  key={coleta.id}
                  border="1px solid #ccc"
                  borderRadius="10px"
                  padding="20px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <h3 style={{ margin: 0 }}>{coleta.empresa}</h3>
                    <p style={{ margin: "5px 0" }}>{coleta.endereco}</p>
                    <p style={{ margin: "5px 0" }}>
                      <strong>Data:</strong> {coleta.data}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        color:
                          coleta.status === "Concluída"
                            ? "green"
                            : coleta.status === "Agendada"
                              ? "#FFA500"
                              : "red",
                        fontWeight: "bold"
                      }}
                    >
                      {coleta.status}
                    </p>
                  </Box>

                  {coleta.status === "Agendada" && (
                    <button
                      style={{
                        backgroundColor: "#d32f2f",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                      }}
                    >
                      Cancelar
                    </button>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </ContainerBox>
      </Box>
    </Box>
  );
}
