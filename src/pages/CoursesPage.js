import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseThumb from '../components/common/CourseThumb';

const CoursesPage = () => {

    const allCourses = useLoaderData()

    console.log()



    return (
        <>
            <Container className='mt-5'>
                <Row className='mb-5'>
                    {
                        allCourses.map(courses => <CourseThumb key={courses.id} courses={courses} />)
                    }
                </Row>
            </Container>

        </>
    )
}

export default CoursesPage