import React from 'react'
import { useEffect, useState } from "react";
import CardCourse from '../../components/Curso/Curso.js'
import getCourses from '../../functions/getcourses.js';
import Header from '../../components/Header'

import {Main} from './styled'

const Home = () => {
    const [courses,setCourses] = useState([{ nome: 'Matematica' }, { nome: 'Geografia' }])

    useEffect(() => {
        async function listCourses() {
            try {
                const response = await getCourses();
                setCourses(response);
            } catch (e) {
                console.log(e.message);
            }
        };
        listCourses();
    }, []);    

  return (
    <>
      <Header />
      {/* { courses.map( course => <CardCourse nome={course.nome}/> } */}
      <Main>
        {courses && courses.map( item => (
          <>
            <CardCourse key={courses._id} nome={courses.name} />
          </>
        ) )}
      </Main>
    </>
  )
}

export default Home