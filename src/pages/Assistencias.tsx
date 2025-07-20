import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Rating,
  Button,
  Modal,
  Divider
} from "@mui/material";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AssistenciaTecnicaMapa } from "./components/Mapas";
import ContainerBox from "./components/ContainerBox";

type Assistencia = {
  id: number;
  nome: string;
  endereco: string;
  nota: number;
  descricao: string;
};

const assistenciasMock: Assistencia[] = [
  {
    id: 1,
    nome: "Tech Reparo Natal",
    endereco: "Rua dos Ipês, 123 - Lagoa Nova",
    nota: 4.5,
    descricao: "Especializada em eletrônicos e eletrodomésticos."
  },
  {
    id: 2,
    nome: "HelpTec Serviços",
    endereco: "Av. Prudente de Morais, 456 - Tirol",
    nota: 4.2,
    descricao: "Reparo de celulares, computadores e televisores."
  },
  {
    id: 3,
    nome: "ECO Reparo",
    endereco: "Rua Ceará-Mirim, 78 - Alecrim",
    nota: 4.7,
    descricao: "Atendimento rápido e sustentável."
  }
];

export default function Assistencias() {
  const [modalAberto, setModalAberto] = useState(false);
  const [assistenciaSelecionada, setAssistenciaSelecionada] =
    useState<Assistencia | null>(null);

  const abrirModal = (a: Assistencia) => {
    setAssistenciaSelecionada(a);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setAssistenciaSelecionada(null);
  };

  return (
    <Box width="100%">
      <Navbar />
      <Box display="flex" flexDirection="row" width="100%">
        <Sidebar />
        <ContainerBox>
          <Box width="100%" padding="50px">
            <Typography variant="h4" gutterBottom>
              Assistências Técnicas
            </Typography>

            <Box mb={4}>
              <AssistenciaTecnicaMapa />
            </Box>

            <Grid container spacing={2}>
              {assistenciasMock.map((a) => (
                <Grid key={a.id} size={4}>
                  <Card elevation={2}>
                    <CardContent>
                      <Typography variant="h6">{a.nome}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {a.endereco}
                      </Typography>
                      <Rating
                        value={a.nota}
                        precision={0.1}
                        readOnly
                        sx={{ mt: 1, mb: 2 }}
                      />
                      <Button
                        fullWidth
                        variant="outlined"
                        size="small"
                        onClick={() => abrirModal(a)}
                      >
                        Ver mais
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Modal open={modalAberto} onClose={fecharModal}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 24,
                  p: 4
                }}
              >
                {assistenciaSelecionada && (
                  <>
                    <Typography variant="h6" gutterBottom>
                      {assistenciaSelecionada.nome}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="body1" gutterBottom>
                      {assistenciaSelecionada.descricao}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Endereço: {assistenciaSelecionada.endereco}
                    </Typography>
                    <Rating
                      value={assistenciaSelecionada.nota}
                      precision={0.1}
                      readOnly
                      sx={{ mt: 2 }}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3 }}
                      onClick={fecharModal}
                    >
                      Fechar
                    </Button>
                  </>
                )}
              </Box>
            </Modal>
          </Box>
        </ContainerBox>
      </Box>
    </Box>
  );
}
