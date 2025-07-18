import { Box, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AssistenciaTecnicaMapa, ColetaMapa } from "./components/Mapas";
import CounterCard from "./components/CounterCard";

export function Home() {
  return (
    <Box width="100%">
      <Navbar />

      <Box display="flex" flexDirection="row" width="100%">
        <Sidebar />

        <Box width="100%" padding="50px">
          <Grid container spacing={2} width="100%">
            <Grid size={6}>
              <div>
                <CounterCard
                  color="#8D7DFE"
                  count="3"
                  title="Número de coletas solicitadas"
                />
              </div>
            </Grid>
            <Grid size={6}>
              <div>
                <CounterCard
                  color="#C67AFF"
                  count="2"
                  title="Número de assistências contratadas"
                />
              </div>
            </Grid>
            <Grid size={6}>
              <ColetaMapa />
            </Grid>
            <Grid size={6}>
              <AssistenciaTecnicaMapa />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
