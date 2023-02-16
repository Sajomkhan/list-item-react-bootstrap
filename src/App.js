import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import ItemsList from './components/ItemsList';
import CreatItemList from './components/CreatItemList';

function App() {

  const [items, setItems] = useState([
    {
      id: 1,
      title: "Corn Flour",
      bag: "50 kg",
      price: 400,
      date: new Date().toString()
    },

    {
      id: 2,
      title: "Sea Salt",
      bag: "70 kg",
      price: 180,
      date: new Date().toString()
    }
  ]);

  return (
    <>
     <Container>
        <Row>
          <Col>
            <CreatItemList items = {items} setItems = {setItems}/>
          </Col>
          <Col>
            <ItemsList items = {items} setItems = {setItems}/>
          </Col>
        </Row>
     </Container>
    </>
  );
}

export default App;
