import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const getTodos = async () => {
  try {
    const res = await axios.get(`${baseUrl}/todos`);
    return res.data;
  } catch (error) {
    console.error('[Get Todos failed]: ', error);
  }
};

// payload 通常用來表示「打包後的資訊」，在這裡打包了想要新增的 todo 內容
export const createTodo = async (payload) => {
  const { title, isDone } = payload;
  try {
    const res = await axios.post(`${baseUrl}/todos`, {
      title,
      isDone,
    });
    return res.data;
  } catch (error) {
    console.error('[Create Todo failed]: ', error);
  }
};

export const patchTodo = () => {};
export const deleteTodo = () => {};
