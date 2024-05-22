import React, { useState, useEffect  } from 'react';
import axios from '../../Axios/axios';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel,Paper } from '@mui/material';
import Navbar from '../Navbar/Navbar';

const StudentForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            const coursesRes = await axios.get('/getcourses');
            setCourses(coursesRes.data);
        };
        fetchCourses();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const studentRes = await axios.post('/student', { firstName, lastName, email });
        await axios.post('/enrollment', {
            studentId: studentRes.data._id,
            courseId: selectedCourse,
            inTraining: true
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setSelectedCourse('');
        alert('Student enrolled and marked as in training successfully');
    };

    return (
        <>
        <Navbar/>
        <div style={{background:"#072C59",minHeight:"600px"}}>
        <Paper elevation={3} style={{width:"400px",padding:'2rem',textAlign:'center',margin:'0 auto'}}>
        <form onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Course</InputLabel>
                <Select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                >
                    {courses.map(course => (
                        <MenuItem key={course._id} value={course._id}>
                            {course.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Enroll Student
            </Button>
        </form>
        </Paper>
        </div>
        </>
    );
};

export default StudentForm;
