import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Fill, RiPencilFill } from 'react-icons/ri';
import { deleteContato, getContatosList } from '../../service/crud';
import { useEffect } from 'react';

export const TableContatos = () => {
  const [contatos, setContato] = useState([]);
  //   console.log(contatos);

  const renderAll = async () => {
    await getContatosList().then((result) => setContato(result));
  };

  const remove = async (data) => {
    if (
      window.confirm(
        `Tem certeza que deseja apagar o contato: "${data.nome}" ?`
      )
    ) {
      try {
        await deleteContato(data.id);
        renderAll();
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    renderAll();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {contatos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/atualizar-contato/${item.id}`}>
                  <RiPencilFill className="text-dark" />
                </Link>{' '}
                <RiDeleteBin6Fill
                  className="text-dark"
                  onClick={() => remove(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
