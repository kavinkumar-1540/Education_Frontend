import React, { useState, useEffect } from 'react';
import axios from '../../Axios/axios';
import StudentTable from './StudentTable';

const EnrollmentForm = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {
        const fetchStudentsAndCourses = async () => {
            const studentsRes = await axios.get('/getstudent');
            const coursesRes = await axios.get('/getcourses');
            setStudents(studentsRes.data);
            setCourses(coursesRes.data);
        };
        fetchStudentsAndCourses();
    }, []);

    const handleEnrollment = async (e) => {
        e.preventDefault();
        await axios.post('/enrollment', {
            studentId: selectedStudent,
            courseId: selectedCourse,
            inTraining: true
        });
        setSelectedStudent('');
        setSelectedCourse('');
        alert('Student enrolled successfully');
    };

    return (
        <>
        <form onSubmit={handleEnrollment}>
            <h2>Enroll Student in a Course</h2>
            <select
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
                required
            >
                <option value="" disabled>Select Student</option>
                {students.map((student) => (
                    <option key={student._id} value={student._id}>
                        {student.firstName} {student.lastName}
                    </option>
                ))}
            </select>
            <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
            >
                <option value="" disabled>Select Course</option>
                {courses.map((course) => (
                    <option key={course._id} value={course._id}>
                        {course.name}
                    </option>
                ))}
            </select>
            <button type="submit">Enroll</button>
        </form>

        <StudentTable/>
        </>
    );
};

export default EnrollmentForm;
