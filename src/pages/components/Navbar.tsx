import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [anchorNotif, setAnchorNotif] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorMsg, setAnchorMsg] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isNotifMenuOpen = Boolean(anchorNotif);
  const isMsgMenuOpen = Boolean(anchorMsg);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = () => navigate("/authenticated/profile");

  const handleNotifOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorNotif(event.currentTarget);
  const handleNotifClose = () => setAnchorNotif(null);

  const handleMsgOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorMsg(event.currentTarget);
  const handleMsgClose = () => setAnchorMsg(null);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setMobileMoreAnchorEl(event.currentTarget);

  const notifMenu = (
    <Menu
      anchorEl={anchorNotif}
      open={isNotifMenuOpen}
      onClose={handleNotifClose}
    >
      <MenuItem onClick={handleNotifClose}>
        Status da coleta #123 atualizado
      </MenuItem>
      <MenuItem onClick={handleNotifClose}>Nova avaliação disponível</MenuItem>
      <MenuItem onClick={handleNotifClose}>
        Assistência contratada confirmou agendamento
      </MenuItem>
    </Menu>
  );

  const msgMenu = (
    <Menu anchorEl={anchorMsg} open={isMsgMenuOpen} onClose={handleMsgClose}>
      <MenuItem onClick={handleMsgClose}>
        Empresa ReparoTec: "Estamos a caminho!"
      </MenuItem>
      <MenuItem onClick={handleMsgClose}>
        Coletor João: "Chegarei em 10 minutos."
      </MenuItem>
      <MenuItem onClick={handleMsgClose}>
        Empresa EcoReparo: "Obrigado pela avaliação!"
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMsgOpen}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={3} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Mensagens</p>
      </MenuItem>
      <MenuItem onClick={handleNotifOpen}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notificações</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit" onClick={handleMsgOpen}>
              <Badge badgeContent={3} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit" onClick={handleNotifOpen}>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {notifMenu}
      {msgMenu}
      {renderMobileMenu}
    </Box>
  );
}
