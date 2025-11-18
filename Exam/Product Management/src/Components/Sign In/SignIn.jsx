import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { googleSignInAsync, signInAsync } from "../../Services/Action/authentication";

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { errMsg, user } = useSelector(state => state.authReducer);
    const [inputForm, setInputForm] = useState({
        email: "",
        password: ""
    });

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signInAsync(inputForm));
    };

    const handleGoogleSignIn = () => {
        dispatch(googleSignInAsync());
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <section className="auth-shell">
            <div className="auth-card">
                <div className="auth-card__aside">
                    <h3>Welcome Back</h3>
                    <p>Track orders, manage wishlist, and access exclusive deals curated for you.</p>
                    <ul className="fk-detail-list">
                        <li>Priority customer support</li>
                        <li>Seamless checkout</li>
                        <li>Smart recommendations</li>
                    </ul>
                </div>

                <div className="auth-card__form">
                    <div>
                        <h4>Login to Continue</h4>
                        <p className="auth-helper">Use your registered email ID to access your account.</p>
                    </div>
                    {errMsg && <p className="text-danger small">{errMsg}</p>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={inputForm.email}
                                onChange={handleChanged}
                                placeholder="name@email.com"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={inputForm.password}
                                onChange={handleChanged}
                                placeholder="Enter your password"
                                required
                            />
                        </Form.Group>

                        <div className="auth-actions">
                            <Button type="submit" className="fk-btn-primary">
                                Login
                            </Button>
                            <Button type="button" className="auth-btn-google" onClick={handleGoogleSignIn}>
                                Continue with Google
                            </Button>
                        </div>
                    </Form>

                    <p className="auth-link">
                        New to this experience? <Link to="/signUp">Create an account</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignIn;