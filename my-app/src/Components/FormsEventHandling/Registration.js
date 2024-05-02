import React, { useState } from 'react';
import styles from './Registration.module.css';

function Registration() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const [error, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        // Update user state with the new value
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }));

        // Validate the field and update the error state
        validateFields(name, value);
    };

    const validateFields = (name, value) => {
        let errorMessage = '';
        switch (name) {
            case 'name':
                errorMessage = value.length < 3 ? 'Name must be at least 3 characters long' : '';
                break;
            case 'email':
                errorMessage = value.trim() ?
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format.' :
                    'Email is required';
                break;
            case 'phone':
                errorMessage = !/^\d{10}$/.test(value) ? 'Invalid Phone number' : '';
                break;
            case 'password':
                errorMessage = !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(value) ? 'Password must be at least 8 characters long and contain at least one number, one lowercase letter, one uppercase letter, and one special character' : '';
                break;
            default:
                break;
        }
        setErrors((prevState) => ({
            ...prevState,
            [name]: errorMessage
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add any form submission logic here

        Object.keys(user).forEach((key)=>{
            validateFields(key,user[key]);
        })
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    onChange={handleChange}
                />
                {error.name && <p className={styles.error}>{error.name}</p>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    className={styles.input}
                    value={user.email}
                    onChange={handleChange}
                />
                {error.email && <span className={styles.error}>{error.email}</span>}
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Phone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    className={styles.input}
                    value={user.phone}
                    onChange={handleChange}
                />
                {error.phone && <span className={styles.error}>{error.phone}</span>}
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className={styles.input}
                    value={user.password}
                    onChange={handleChange}
                />
                {error.password && <span className={styles.error}>{error.password}</span>}
            </div>
            <button type="submit" className={styles.submitButton}>Register</button>
        </form>
    );
}

export default Registration;
