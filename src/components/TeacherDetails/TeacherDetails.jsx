import React, { useEffect, useState } from 'react';
import API from '../API';
import './TeacherDetails.css';
import Header from '../Header/Header';

const TeacherDetails = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newTeacher, setNewTeacher] = useState({
        name: '',
        email: '',
        role: '',
    });

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        try {
            const response = await fetch(`${API}/teacher/teacher-details`);
            const data = await response.json();
            setTeachers(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching teachers:', error);
            setError('Error fetching teachers.');
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTeacher(prevTeacher => ({
            ...prevTeacher,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/teacher/teacher-register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTeacher),
            });
            if (response.ok) {
                fetchTeachers(); 
                setNewTeacher({
                    name: '',
                    email: '',
                    role: '',
                });
            } else {
                console.error('Failed to add teacher');
            }
        } catch (error) {
            console.error('Error adding teacher:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='teacher-details-container'>
            <Header />
            <h2>Teacher List</h2>
            <table className='teacher-details-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map(teacher => (
                        <tr key={teacher._id}>
                            <td>{teacher.name}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Add New Teacher</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={newTeacher.name}
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
                        value={newTeacher.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='role'>Role:</label>
                    <input
                        type='text'
                        id='role'
                        name='role'
                        value={newTeacher.role}
                        onChange={handleInputChange}
                    />
                </div>
                <button type='submit'>Add Teacher</button>
            </form>
        </div>
    );
};

export default TeacherDetails;