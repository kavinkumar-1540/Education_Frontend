// src/components/StudentTable.js
import React, { useEffect, useState } from 'react';
import axios from '../../Axios/axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const StudentTable = () => {
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        const fetchEnrollments = async () => {
            const res = await axios.get('/getenrollment');
            setEnrollments(res.data);
        };
        fetchEnrollments();
    }, []);

    const toggleTrainingStatus = async (id, inTraining) => {
        await axios.put(`/updateenrollment/${id}`, { inTraining: !inTraining });
        setEnrollments(enrollments.map(e => e._id === id ? { ...e, inTraining: !inTraining } : e));
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Student Name</TableCell>
                        <TableCell>Course</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {enrollments.map(enrollment => (
                        <TableRow key={enrollment._id}>
                            <TableCell>{enrollment.studentId.firstName} {enrollment.studentId.lastName}</TableCell>
                            <TableCell>{enrollment.courseId.name}</TableCell>
                            <TableCell>{enrollment.inTraining ? 'In Training' : 'Completed'}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color={'primary'}
                                    onClick={() => toggleTrainingStatus(enrollment._id, enrollment.inTraining)}
                                >
                                    {enrollment.inTraining ? 'Mark as Completed' : 'Mark as In Training'}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StudentTable;
