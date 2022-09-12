import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createTarefa,
  getContatosList,
  getTarefaDetail,
  updateTarefa,
} from "../../../service/crud";
import { tarefaValidator } from '../../../validators/tarefaValidator';
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const FormTarefas = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tarefa, setTarefa] = useState({});
  // console.log(tarefa);
  const [contatos, setContato] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // console.log(tarefa);
  useEffect(() => {
    if (id) {
      for (let campo in tarefa) {
        // console.log("", campo);
        setValue(campo, tarefa[campo]);
      }
    }
  }, [id, tarefa, setValue]);

  // const getContatos = async () => {
  //   await getContatosList().then((result) => setContato(result));
  // };

  // useEffect(() => {
  //   getContatos();
  // }, []);

  useEffect(() => {
    if (id) {
      getTarefaDetail(id).then((result) => {
        setTarefa(result);
      });
    }
  }, [id]);

  const salvar = (data) => {
    const values = { ...data };
    values.ativo = values.ativo === "true" ? true : false;

    if (id) {
      updateTarefa(id, values);
    } else {
      createTarefa(values);
    }

    navigate("/");
  };

  return (
    <div>
      <div className="margin-top"></div>
      <Container>
        <h1>
          {id ? "Editar" : "Nova"} Tarefa{id ? `: ${tarefa.titulo}` : ""}
        </h1>
        <div>
          <Form>
            <Form.Group className="md-3 my-4" controlId="titulo">
              <label> Título: </label>
              <Form.Control
                type="text"
                isInvalid={errors.titulo}
                {...register("titulo", tarefaValidator.titulo)}
                placeholder="Titulo"
              />
              {errors.titulo && <span className='text-danger small'>{errors.titulo.message}</span>}
            </Form.Group>
            <Form.Group className="md-3 my-4" controlId="titulo">
              <label> Descrição: </label>
              <Form.Control
                type="text"
                isInvalid={errors.descricao}
                {...register("descricao", tarefaValidator.descricao)}
                placeholder="Descrição"
                />
                {errors.descricao && <span className='text-danger small'>{errors.descricao.message}</span>}
            </Form.Group>
            <Form.Group className="md-3 my-4" controlId="titulo">
              <label> Ativo: </label>
              <Form.Select {...register("ativo")}>
                <option>Selecione</option>
                <option value={true}>Ativo</option>
                <option value={false}>Inativo</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="md-3" controlId="titulo">
              <label> Contato: </label>
              <Form.Select {...register("contato")}>
                <option>Selecione</option>
                {contatos.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nome}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button
              onClick={() => navigate("/")}
              className="btn btn-danger my-4 mx-5"
            >
              Cancelar
            </Button>

            <Button onClick={handleSubmit(salvar)} className="btn btn-dark">
              Salvar
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};
