import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const AppBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Tarefas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/contatos">Contatos</Nav.Link>
            <Nav.Link href="#">Projeto Documentação</Nav.Link>
            <Nav.Link href="#">Sobre Mim</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
