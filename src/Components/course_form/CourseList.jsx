import React, { useEffect, useState } from 'react';
import axios from '../../Axios/axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Typography } from '@mui/material';


const CourseList = ({showList}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get('/getcourses');
            setCourses(res.data);
        };
        fetchCourses();
    }, []);

    return (
        <>
        <Typography variant='h6' align='center' fontWeight={600}>Course List</Typography>
        <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses.map((course) => (
                        <TableRow key={course._id}>
                            <TableCell>{course.name}</TableCell>
                            <TableCell>{course.description}</TableCell>
                            <TableCell>{course.duration}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Box sx={{display:"flex",alignItems:"center",margin:"1rem",justifyContent:'center'}}>
            <Button variant='contained' onClick={showList}>Back</Button>
        </Box>
        </>
    );
};

export default CourseList;
