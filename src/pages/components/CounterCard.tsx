import { Box } from "@mui/material";

export default function CounterCard({
  title,
  count,
  color,
  textColor = "white"
}: {
  title: string;
  count: string;
  color: string;
  textColor?: string;
}) {
  return (
    <Box bgcolor={color} borderRadius="10px" padding="20px">
      <Box color={textColor}>
        <h3>{title}</h3>
      </Box>
      <Box color={textColor}>
        <h1>{count}</h1>
      </Box>
    </Box>
  );
}
