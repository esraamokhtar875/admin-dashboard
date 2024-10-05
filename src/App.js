// @ts-nocheck
// import React from 'react';
// import { Navbar, Container, Row, Col, Card } from 'react-bootstrap';
// import FoodList from './components/FoodList';
// import CategoryList from './components/CategoryList';
// import UserList from './components/UserList';

import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// eslint-disable-next-line no-unused-vars

import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";

// import TopBar from "components/TopBar";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { Outlet } from 'react-router-dom'; 
import { ThemeProvider} from '@mui/material/styles';
import { getDesignTokens } from "./theme";



// const drawerWidth = 240;



const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));





export default function MiniDrawer() {
  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // eslint-disable-next-line no-unused-vars
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode,setMode] = React.useState("dark");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)),[mode]);

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <TopBar open={open} handleDrawerOpen={handleDrawerOpen}/>
          <SideBar open={open} handleDrawerClose={handleDrawerClose}/>

          
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Outlet/>   
            
          </Box>
        </Box>
    </ThemeProvider>
  );
}

// function App() {
//   return (
//     <>
//     <div className='app'>
//       <h1>
//           hellow in my front end dashboard
//       </h1>
//        </div>
// eslint-disable-next-line no-lone-blocks
{
  /* <Navbar bg="warning" variant="dark">
        <Navbar.Brand href="#home" className="mx-auto">Dashboard</Navbar.Brand>
      </Navbar>
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Food List</Card.Title>
                <FoodList />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Category List</Card.Title>
                <CategoryList />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>User List</Card.Title>
                <UserList />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */
}
//     </>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css';
// import FoodList from './components/FoodList';
// import CategoryList from './components/CategoryList';
// import UserList from './components/UserList';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Dashboard</h1>
//       </header>
//       <main>
//         <div className="dashboard-section">
//           <FoodList />
//         </div>
//         <div className="dashboard-section">
//           <CategoryList />
//         </div>
//         <div className="dashboard-section">
//           <UserList />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
