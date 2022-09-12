import { ApiTarefas } from "./constants";

export const getTarefasList = async () => {
  const response = await ApiTarefas.get(`/tarefas`);
  return response.data;
};

export const getTarefaDetail = async (id) => {
  const response = await ApiTarefas.get(`/detalhe-tarefa/${id}`);
  return response.data;
};

export const createTarefa = async (form) => {
  // console.log(form);
  const response = await ApiTarefas.post(`/criar-tarefa/`, form);
  return response.data;
};

export const updateTarefa = async (id, form) => {
  // console.log(id);
  const response = await ApiTarefas.post(`/atualizar-tarefa/${id}/`, form);
  console.log(response);
  return response;
};

export const deleteTarefa = async (id) => {
  const response = await ApiTarefas.delete(`/deletar-tarefa/${id}`);
  return response.data;
};

/*  CONTATOS SESSION */

export const getContatosList = async () => {
  const reponse = await ApiTarefas.get('/contatos');
  return reponse.data;
}

export const getContatoDetail = async (id) => {
  const response = await ApiTarefas.get(`/detalhe-contato/${id}`);
  return response.data;
};

export const createContato = async (form) => {
  // console.log(form);
  const response = await ApiTarefas.post(`/criar-contato/`, form);
  return response.data;
};

export const updateContato = async (id, form) => {
  // console.log(id);
  const response = await ApiTarefas.post(`/atualizar-contato/${id}`, form);
  console.log(response);
  return response;
};

export const deleteContato = async (id) => {
    const reponse = await ApiTarefas.delete(`/deletar-contato/${id}`);
  return reponse.data;
}