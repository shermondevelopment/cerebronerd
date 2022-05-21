import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import getCourse from '../../functions/getCoursePage.js';
import styled from "styled-components"

const Course = () => {
    const courseId = useParams
    const [course,setCourse] = useState(null)

    useEffect(() => {
        async function coursePage() {
            try {
                const response = await getCourse(courseId);
                setCourse(response);
                console.log(course.modulos)
            } catch (e) {
                console.log(e.message);
            }
        };

        coursePage();
    }, []);    

  return (
    <CoursePage>
        <Tabs size='md' variant='line'>
            <TabList>
                { course ? (course.modulos).map(item => {<Tab> {item.nome} </Tab>}): <></>}
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>content one!</p>
                </TabPanel>
                <TabPanel>
                    <p>content two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </CoursePage>
  )
}

export default Course

const CoursePage = styled.div`
    background-color: gray;
    box-sizing: border-box;
    position: fixed;
    top: 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`