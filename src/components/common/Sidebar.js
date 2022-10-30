import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [courseTitles, setCourseTitles] = useState([])

    useEffect(() => {
        fetch(`https://my-learning-server-main.vercel.app/courses/all`)
            .then(res => res.json())
            .then(data => setCourseTitles(data))

    }, [])

    return (
        <div className="sidebar sticky-top main-class">
            <ListGroup>
                {
                    courseTitles.map(title => <div key={title.id}><NavLink to={`/course/${title.id}`} className="sidebar-list sidebar-edit">{title.title}</NavLink></div>)
                }
            </ListGroup>
        </div>
    )
}

export default Sidebar