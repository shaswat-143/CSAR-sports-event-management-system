import React, { useState } from 'react';

const AdminLogin = () => {
    const [facultyId, setFacultyId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with Faculty ID:', facultyId, 'and Password:', password);
    };

    return (
        <div style={{height:"545px"}}>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="facultyId" className="form-label">
                                        Faculty ID
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="facultyId"
                                        value={facultyId}
                                        onChange={(e) => setFacultyId(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-block"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AdminLogin;
