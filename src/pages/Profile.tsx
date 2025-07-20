import { Box, Stack, TextField, Button, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContainerBox from "./components/ContainerBox";

export function Profile() {
  return (
    <Box width="100%">
      <Navbar />
      <Box display="flex" flexDirection="row" width="100%">
        <Sidebar />
        <ContainerBox>
          <h2 style={{ marginBottom: "20px" }}>Minhas Coletas</h2>

          <Stack flexDirection="row" gap="40px" alignItems="center">
            <Box
              maxWidth={"120px"}
              borderRadius="100%"
              overflow="hidden"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src="./../../public/images/avatar.svg"
                style={{ width: "100%" }}
              />
            </Box>
            <Box display="flex" flexDirection="column">
              <Box
                width="200px"
                height="40px"
                borderRadius="15px"
                color="white"
                sx={{ cursor: "pointer", backgroundColor: "#4D71F1" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="bold"
              >
                Inserir nova foto
              </Box>
              <Box
                width="fit-content"
                height="40px"
                borderRadius="15px"
                color="black"
                sx={{ cursor: "pointer", backgroundColor: "transparent" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="bold"
              >
                Remover
              </Box>
            </Box>
          </Stack>

          <Box paddingTop="30px">
            <h3>Dados pessoais</h3>

            <Grid container spacing={2} width="100%">
              <Grid size={6}>
                <TextField label="Nome" fullWidth />
              </Grid>
              <Grid size={6}>
                <TextField label="Sobrenome" fullWidth />
              </Grid>
              <Grid size={6}>
                <TextField label="E-mail" type="email" fullWidth />
              </Grid>
              <Grid size={6}>
                <TextField label="Telefone" fullWidth />
              </Grid>
              <Grid size={6}>
                <TextField label="Senha" type="password" fullWidth />
              </Grid>
              <Grid size={12}>
                <Button variant="contained" sx={{ backgroundColor: "#4D71F1" }}>
                  Salvar alterações
                </Button>
              </Grid>
            </Grid>
          </Box>
        </ContainerBox>
      </Box>
    </Box>
  );
}
