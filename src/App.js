import React from 'react';
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap';
import FoodList from './components/FoodList';
import CategoryList from './components/CategoryList';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <Navbar bg="warning" variant="dark">
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
      </Container>
    </>
  );
}

export default App;




















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
