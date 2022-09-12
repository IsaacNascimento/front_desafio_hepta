import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createContato,
  getContatoDetail,
  updateContato,
} from '../../../service/crud';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { contatoValidator } from '../../../validators/contatoValidator';
export const FormContatos = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contato, setContato] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  console.log(contato);
  useEffect(() => {
    if (id) {
      for (let campo in contato) {
        // console.log("", campo);
        setValue(campo, contato[campo]);
      }
    }
  }, [id, contato, setValue]);

  useEffect(() => {
    if (id) {
      getContatoDetail(id).then((result) => {
        setContato(result);
      });
    }
  }, [id]);

  const salvar = (data) => {
    const values = { ...data };

    if (id) {
      updateContato(id, values);
    } else {
      createContato(values);
    }

    navigate('/contatos');
  };

  return (
    <div>
      <div className="margin-top"></div>
      <Container>
        <h1>
          {id ? 'Editar' : 'Nova'} Contato{id ? `: ${contato.nome}` : ''}
        </h1>
        <div>
          <Form>
            <Form.Group className="md-3 my-4" controlId="titulo">
              <label> Nome: </label>
              <Form.Control
                type="text"
                isInvalid={errors.nome}
                {...register('nome', contatoValidator.nome)}
                placeholder="Nome"
              />
              {errors.nome && (
                <span className="text-danger small">{errors.nome.message}</span>
              )}
            </Form.Group>
            <Form.Group className="md-3 my-4" controlId="titulo">
              <label> Email: </label>
              <Form.Control
                type="text"
                isInvalid={errors.email}
                {...register('email', contatoValidator.email)}
                placeholder="email"
              />
              {errors.email && (
                <span className="text-danger small">
                  {errors.email.message}
                </span>
              )}
            </Form.Group>

            <Button
              onClick={() => navigate('/contatos')}
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
