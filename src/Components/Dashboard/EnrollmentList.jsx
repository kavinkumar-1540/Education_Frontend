import React, { useEffect, useState } from 'react';
import axios from '../../Axios/axios';

const EnrollmentList = () => {
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        const fetchEnrollments = async () => {
            const res = await axios.get('/getenrollment');
            setEnrollments(res.data);
        };
        fetchEnrollments();
    }, []);

    const handleUnenroll = async (id) => {
        await axios.put(`/updateenrollment/${id}`);
        setEnrollments(enrollments.map(e => e._id === id ? { ...e, inTraining: false } : e));
    };

    return (
        <div>
            <h2>Enrollments</h2>
            <ul>
                {enrollments.map(enrollment => (
                    <li key={enrollment._id}>
                        {enrollment.studentId.firstName} {enrollment.studentId.lastName} - {enrollment.courseId.name}
                        {enrollment.inTraining ? (
                            <span> (In Training)</span>
                        ) : (
                            <span> (Completed)</span>
                        )}
                        {enrollment.inTraining && (
                            <button onClick={() => handleUnenroll(enrollment._id)}>Mark as Completed</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default EnrollmentList;
