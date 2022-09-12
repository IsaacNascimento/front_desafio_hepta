import React from "react";
import { TableContatos } from "../../components/TableContatos";
import { Row, Col, Button, Container } from "react-bootstrap";
import "../../../styles/App.css";
import { Link } from 'react-router-dom';


export const Contatos = () => {
  return (
    <div>
      <div className="margin-top"></div>
      <Container>
        <Row>
          <Col sm={3}>
            <h1>Contatos</h1>
          </Col>
          <Col sm={6}>
          </Col>
          <Col sm={3}>
            <Link to='/create-contato'>
             <Button>Novo Contato</Button>
            </Link>
          </Col>
        </Row>
        <TableContatos />
      </Container>
    </div>
  )
}
