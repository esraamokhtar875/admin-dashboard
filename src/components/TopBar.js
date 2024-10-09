import { Box, IconButton, InputBase, Stack, styled, Toolbar, Typography, useTheme } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
//import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
//import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: theme.palette.appBar.main, // Use the appBar color from theme
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function TopBar({ open, handleDrawerOpen, setMode, mode }) {
  const theme = useTheme(); // Access the theme

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Food_Project_Dashboard
          </Typography>

          <Box flexGrow={0.15} />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box flexGrow={1} />

          <Stack direction="row">
            <IconButton color="inherit" onClick={toggleTheme}>
              {mode === 'light' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>

          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}


//            <a href="http://127.0.0.1:9000/api/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
//              <IconButton color="inherit">
//                <SettingsOutlinedIcon />
//              </IconButton>
//            </a>
//
//            <a href="http://127.0.0.1:9000/admin" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
//              <IconButton color="inherit">
//                <Person2OutlinedIcon />
//              </IconButton>
//
//             </a>



//export default function TopBar({ open, handleDrawerOpen }) {
//  const theme = useTheme()
//  return (
//    <>
//      <AppBar position="fixed" open={open}>
//        <Toolbar>
//          <IconButton
//            color="inherit"
//            aria-label="open drawer"
//            onClick={handleDrawerOpen}
//            edge="start"
//            sx={[
//              {
//                marginRight: 5,
//              },
//              open && { display: "none" },
//            ]}
//          >
//            <MenuIcon />
//          </IconButton>
//          <Typography variant="h6" noWrap component="div">
//            Food_Project_Dashboard
//          </Typography>
//
//          <Box flexGrow={0.15} />
//
//          <Search>
//            <SearchIconWrapper>
//              <SearchIcon />
//            </SearchIconWrapper>
//            <StyledInputBase
//              placeholder="Search…"
//              inputProps={{ 'aria-label': 'search' }}
//            />
//          </Search>
//
//          <Box flexGrow={1} />
//
//          <Stack direction={"row"}>
//            {theme.palette.mode === "light" ? (
//              <IconButton color={"inherit"}>
//                <LightModeOutlinedIcon />
//              </IconButton>
//            ) : (
//              <IconButton color={"inherit"}>
//                <DarkModeOutlinedIcon />
//              </IconButton>
//            )}
//
//            <a href="http://127.0.0.1:9000/api/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
//              <IconButton color={"inherit"}>
//                <SettingsOutlinedIcon />
//              </IconButton>
//            </a>
//
//            <a href="http://127.0.0.1:9000/admin" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
//              <IconButton color={"inherit"}>
//                <Person2OutlinedIcon />
//              </IconButton>
//            </a>
//          </Stack>
//        </Toolbar>
//      </AppBar>
//    </>
//  );
//}
