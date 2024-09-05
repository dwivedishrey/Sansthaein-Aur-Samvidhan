import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const pages = []; // Add your pages here

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ background: 'linear-gradient(90deg, rgba(255,248,220,1) 25%, rgba(245,222,179,1) 52%, rgba(255,239,213,1) 76%, rgba(253,245,230,1) 87%, rgba(250,235,215,1) 100%)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src='./logo.png' height='50px' alt='Logo' />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              marginLeft: '20px',
              color: '#333', // Changed text color to dark gray
              textDecoration: 'none',
            }}
          >
            SAMVIDHAN
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page === 'Login' ? (
                    <Typography
                      textAlign="center"
                      component={Link}
                      to={`/${page.toLowerCase()}`}
                      style={{ marginLeft: "20px", textDecoration: 'none', color: 'inherit' }}
                    >
                      {page}
                    </Typography>
                  ) : (
                    <Typography
                      textAlign="center"
                      component={ScrollLink}
                      to={page.toLowerCase()}
                      smooth={true}
                      duration={500}
                      style={{ marginLeft: "20px", cursor: 'pointer', color: '#333' }} // Adjusted color for better visibility
                    >
                      {page}
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#333', // Changed text color to dark gray
              textDecoration: 'none',
            }}
          >
            SAMVIDHAN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#333', display: 'block' }} // Adjusted color for better visibility
              >
                {page === 'Login' ? (
                  <Link
                    to={`/${page.toLowerCase()}`}
                    style={{ textDecoration: 'none', color: '#333' }} // Adjusted color for better visibility
                  >
                    {page}
                  </Link>
                ) : (
                  <ScrollLink
                    to={page.toLowerCase()}
                    smooth={true}
                    duration={500}
                    style={{ cursor: 'pointer', textDecoration: 'none', color: '#333' }} // Adjusted color for better visibility
                  >
                    {page}
                  </ScrollLink>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
