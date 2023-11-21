import axios from "axios";
import { DataProps } from "../App";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo: React.Dispatch<React.SetStateAction<DataProps[]>>) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log("data ---->", data);
            setToDo(data);
        })
        .catch((err) => console.log(err));
};

const addToDo = (text: string, setText: (text: string) => void, setToDo: React.Dispatch<React.SetStateAction<DataProps[]>>) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("");
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

const updateToDo = (toDoId: string, text: string, setToDo: React.Dispatch<React.SetStateAction<DataProps[]>>, setText: (text: string) => void, setIsUpdating: (payload: boolean) => void) => {
    axios
        .patch(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            console.log(data);
            setText("");
            setIsUpdating(false);
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

const deleteToDo = (_id: string, setToDo: React.Dispatch<React.SetStateAction<DataProps[]>>) => {
    axios
        .delete(`${baseUrl}/delete/${_id}`)
        .then((data) => {
            console.log(data);
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
