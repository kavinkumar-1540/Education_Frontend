import React, { useEffect, useState } from 'react';
import axios from '../../Axios/axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const res = await axios.get('/getstudent');
            setStudents(res.data);
        };
        fetchStudents();
    }, []);

    return (
        <div>
            <h2>Students</h2>
            <ul>
                {students.map(student => (
                    <li key={student._id}>{student.firstName} {student.lastName}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
