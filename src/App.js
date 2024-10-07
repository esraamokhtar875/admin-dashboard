import * as React from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { getDesignTokens } from "./theme";
// import LandingPage from "./components/LandingPage";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState("light"); // Initial mode is 'light'

  // Memoized theme that will re-calculate when `mode` changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // @ts-ignore
 
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}












// // @ts-nocheck
// // import React from 'react';
// // import { Navbar, Container, Row, Col, Card } from 'react-bootstrap';
// // import FoodList from './components/FoodList';
// // import CategoryList from './components/CategoryList';
// // import UserList from './components/UserList';

// import * as React from "react";
// import { createTheme, styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// // import MuiDrawer from "@mui/material/Drawer";
// // eslint-disable-next-line no-unused-vars

// import CssBaseline from "@mui/material/CssBaseline";
// // import Typography from "@mui/material/Typography";

// // import TopBar from "components/TopBar";
// import TopBar from "./components/TopBar";
// import SideBar from "./components/SideBar";
// import { Outlet } from 'react-router-dom'; 
// import { ThemeProvider} from '@mui/material/styles';
// import { getDesignTokens } from "./theme";



// // const drawerWidth = 240;



// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));


// export default function MiniDrawer() {
  
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   // eslint-disable-next-line no-unused-vars
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const [mode, setMode] = React.useState("light");
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


//   return (
//     <ThemeProvider theme={theme}>
//         <Box sx={{ display: "flex" }}>
//           <CssBaseline />

//           <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode}/>
//           <SideBar open={open} handleDrawerClose={handleDrawerClose}/>

          
//           <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//             <DrawerHeader />
//             <Outlet/>   
            
//           </Box>
//         </Box>
//     </ThemeProvider>
//   );
// }

