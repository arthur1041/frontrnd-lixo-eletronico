import * as React from "react";
import {
  Button,
  FormControl,
  Checkbox,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  Link,
  IconButton,
  Box
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { mockedDb } from "../../data/mockedDatabase";
import { useNavigate } from "react-router-dom";

import authService from "../service/authService";

const providers = [{ id: "credentials", name: "Email and Password" }];

function CustomEmailField() {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Email"
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle fontSize="inherit" />
            </InputAdornment>
          )
        }
      }}
      variant="outlined"
    />
  );
}

function CustomPasswordField() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel size="small" htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        name="password"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? (
                <VisibilityOff fontSize="inherit" />
              ) : (
                <Visibility fontSize="inherit" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}

function CustomButton() {
  return (
    <Button
      type="submit"
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      sx={{ my: 2 }}
    >
      Entrar
    </Button>
  );
}

function SignUpLink() {
  return (
    <Link href="/" variant="body2">
      Cadastrar-se
    </Link>
  );
}

function ForgotPasswordLink() {
  return (
    <Link href="/" variant="body2">
      Esqueceu a senha?
    </Link>
  );
}

function Title() {
  return <h2 style={{ marginBottom: 8 }}>Login</h2>;
}

function RememberMeCheckbox() {
  const theme = useTheme();
  return (
    <FormControlLabel
      label="Permanecer conectado"
      control={
        <Checkbox
          name="remember"
          value="true"
          color="primary"
          sx={{ padding: 0.5, "& .MuiSvgIcon-root": { fontSize: 20 } }}
        />
      }
      slotProps={{
        typography: {
          color: "textSecondary",
          fontSize: theme.typography.pxToRem(14)
        }
      }}
    />
  );
}

export default function Login({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate();

  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <Box
        width="100%"
        sx={{
          backgroundImage: "url(/images/login-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh"
        }}
      >
        <Box
          width="100%"
          height="100vh"
          sx={{
            position: "absolute",
            inset: "0",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 1
          }}
        >
          <SignInPage
            signIn={(provider, formData) => {
              const email = formData.get("email")
                ? String(formData.get("email")).trim()
                : undefined;
              const password = formData.get("password")
                ? String(formData.get("password")).trim()
                : undefined;
              const foundUser = mockedDb.mockedUsers.find(
                (el) => el.username === email
              );

              if (foundUser && foundUser.password === password) {
                authService.doLogIn(foundUser.username);
                onLogin();
                navigate("/authenticated/home");
              } else {
                // toast
              }
            }}
            slots={{
              title: Title,
              emailField: CustomEmailField,
              passwordField: CustomPasswordField,
              submitButton: CustomButton,
              signUpLink: SignUpLink,
              rememberMe: RememberMeCheckbox,
              forgotPasswordLink: ForgotPasswordLink
            }}
            sx={{
              zIndex: 2,
              "& .MuiTypography-gutterBottom": {
                display: "none"
              }
            }}
            providers={providers}
          />
        </Box>
      </Box>
    </AppProvider>
  );
}
