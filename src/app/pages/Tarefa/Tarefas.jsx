import React from "react";
import { TableComponent } from "../../components/TableTarefas";
import { Row, Col, Button, Container } from "react-bootstrap";
import "../../../styles/App.css";
import { Link } from 'react-router-dom';

export const Tarefas = () => {

  return (
    <div>
      <div className="margin-top"></div>
      <Container>
        <Row>
          <Col sm={3}>
            <h1>Tarefas</h1>
          </Col>
          <Col sm={6}>
          </Col>
          <Col sm={3}>
            <Link to='/create-tarefa'>
             <Button>Nova Tarefa</Button>
            </Link>
          </Col>
        </Row>
      <TableComponent />
      </Container>
    </div>
  );
};
