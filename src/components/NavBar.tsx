import { AppBar, Toolbar, Box, Tooltip, Link, IconButton } from "@mui/material";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";
import links from "../data/links";

const NavBar = () => {
  return (
    <AppBar position="sticky" elevation={1} sx={{ flexGrow: 1, minHeight: 95 }}>
      <Toolbar>
        {/* Mobile logo */}
        <Box
          sx={{
            flexGrow: 1,
            m: 1,
            display: { xs: "block", md: "none" },
          }}
        >
          <img
            src="img/192.png"
            alt="Ancona Autopartes"
            width={48}
            height={48}
          />
        </Box>
        {/* Desktop logo */}
        <Box
          sx={{
            flexGrow: 1,
            m: 1,
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src="https://ancona.s3.us-east-2.amazonaws.com/logo/logo-ancona.webp"
            alt="Ancona Autopartes"
            width={210}
            height={75}
          />
        </Box>
        <Box className="social-links">
          <Tooltip title="Síguenos en Twitter">
            <Link href={links.twitter} target="_blank" rel="noopener">
              <IconButton>
                <Twitter />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Síguenos en Facebook">
            <Link href={links.facebook} target="_blank" rel="noopener">
              <IconButton>
                <Facebook />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Síguenos en Instagram">
            <Link href={links.instagram} target="_blank" rel="noopener">
              <IconButton>
                <Instagram />
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
