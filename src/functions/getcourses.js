import axios from 'axios'

export default function getCourses(){
    return [
        {_id: '1', nome: 'curso1'},
        {_id: '1', nome: 'curso2'},
        {_id: '1', nome: 'curso3'},
        {_id: '1', nome: 'curso4'},
    ]
    /*const promise = axios.get(
        "http://localhost:5001/curses",
    );
    promise.then(response => {
        console.log(response);
        return response.data;
    });
    promise.catch(error => {
        console.log(error.response);
    });
    */
}