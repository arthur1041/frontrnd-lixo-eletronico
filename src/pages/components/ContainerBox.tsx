import { Box } from "@mui/material";

export default function ContainerBox({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%", // tela pequena (mobile)
          sm: "640px", // ≥600px
          md: "768px", // ≥900px
          lg: "1024px", // ≥1200px
          xl: "1280px" // ≥1536px
        },
        margin: "0 auto",
        padding: {
          xs: "16px",
          sm: "24px",
          md: "32px"
        }
      }}
    >
      {children}
    </Box>
  );
}
