import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill, RiPencilFill } from "react-icons/ri";
import {
  deleteTarefa,
  getContatosList,
  getTarefasList,
} from "../../service/crud";
import { useEffect } from "react";

export const TableComponent = () => {
  const [tarefas, setTarefas] = useState([]);
  // console.log(tarefas);
  const [contato, setContato] = useState([]);
  // console.log(contato);

  const renderAll = async () => {
    await getTarefasList().then((response) => setTarefas(response));
  };

  const remove = async (data) => {
    if (
      window.confirm(
        `Tem certeza que deseja apagar a tarefa: "${data.titulo}" ?`
      )
    ) {
      try {
        await deleteTarefa(data.id);
        renderAll();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getContatoName = (id) => {
    for (let i = 0; i < contato.length; i++) {
      const contatoObj = contato[i];
      // console.log(contatoObj);
      if (contatoObj?.id == id) {
        return <span>{contatoObj?.nome}</span>;
      } else {
        return <span>Sem contato</span>;
      }
    }
  };

  useEffect(() => {
    renderAll();
  }, []);

  const getContatos = async () => {
    await getContatosList().then((result) => setContato(result));
  };

  useEffect(() => {
    getContatos();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Contato</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Ativo</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{getContatoName(item.contato)}</td>
              <td>{item.titulo}</td>
              <td>{item.descricao}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.ativo}
                  onChange={() => {}}
                />
              </td>
              <td>
                <Link to={`/atualizar-tarefa/${item.id}`}>
                  <RiPencilFill className="text-dark" />
                </Link>{" "}
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
