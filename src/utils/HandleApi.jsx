import axios from "axios";

const baseUrl = "https://todo-fullstack-backend.onrender.com";

const getAllTodo = (setTodo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log("data --->", data);
      setTodo(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const AddToDo = (text, setText, setTodo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllTodo(setTodo);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateToDo = (todoId, text, setTodo, setText, setisUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: todoId, text })
    .then((data) => {
      setText("");
      setisUpdating(false);
      getAllTodo(setTodo);
    })
    .catch((error) => {
      console.log(error);
    });
};

const DeleteToDo = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
        console.log(data)
      getAllTodo(setTodo);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getAllTodo, AddToDo, updateToDo, DeleteToDo };
