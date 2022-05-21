import axios from 'axios'

export default function getCoursePage(id){
    return {_id: '1',
         nome: 'curso1',
         modulos: [
            {nome: 'modulo 1', conteudo:'conteudo 1'},
            {nome: 'modulo 2', conteudo:'conteudo 2'},
            {nome: 'modulo 3', conteudo:'conteudo 3'},
         ]
        }
    
    /*
    const promise = axios.get(
        `http://localhost:5001/curses/:${id}`,
    );
    promise.then(response => {
        console.log(response);
        return response.data;
    });
    promise.catch(error => {
        console.log(error.response);
    });
    */
};