import React, { useEffect, useState } from 'react';
import API from '../API';
import './StudentDetails.css';
import Header from '../Header/Header';

const StudentDetails = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newStudent, setNewStudent] = useState({
        name: '',
        email: '',
        grade: '',
    });

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await fetch(`${API}/student/student-details`);
            const data = await response.json();
            setStudents(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching students:', error);
            setError('Error fetching students.');
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent(prevStudent => ({
            ...prevStudent,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/student/student-register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newStudent),
            });
            if (response.ok) {
                fetchStudents(); 
                setNewStudent({
                    name: '',
                    email: '',
                    grade: '',
                });
            } else {
                console.error('Failed to add student');
            }
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
        <Header />
        <div className='student-details-container'>
            
            <h2 className='head1'>Student List</h2>
            <table className='student-details-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={newStudent.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={newStudent.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='grade'>Grade:</label>
                    <input
                        type='text'
                        id='grade'
                        name='grade'
                        value={newStudent.grade}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type='submit'>Add Student</button>
            </form>
        </div>
        </> 
    );
};

export default StudentDetails;