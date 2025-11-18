import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync } from "../../Services/Action/authentication";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { errMsg, isCreated } = useSelector(state => state.authReducer);

    const [inputForm, setInputForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [localError, setLocalError] = useState("");

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputForm.password !== inputForm.confirmPassword) {
            setLocalError("Passwords do not match");
            return;
        }
        setLocalError("");
        const payload = {
            email: inputForm.email,
            password: inputForm.password
        };
        dispatch(createUserAsync(payload));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/signIn");
        }
    }, [isCreated, navigate]);

    return (
        <section className="auth-shell">
            <div className="auth-card">
                <div className="auth-card__aside">
                    <h3>Create Your Account</h3>
                    <p>Unlock lightning fast checkout, saved addresses, and personalised offers.</p>
                    <ul className="fk-detail-list">
                        <li>Early access to limited drops</li>
                        <li>Exclusive coupons & bundles</li>
                        <li>Secure cloud-sync across devices</li>
                    </ul>
                </div>

                <div className="auth-card__form">
                    <div>
                        <h4>Let’s get started</h4>
                        <p className="auth-helper">We just need a couple of details to set up your account.</p>
                    </div>
                    {(errMsg || localError) && (
                        <p className="text-danger small">{errMsg || localError}</p>
                    )}

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

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={inputForm.password}
                                onChange={handleChanged}
                                placeholder="Create a password"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={inputForm.confirmPassword}
                                onChange={handleChanged}
                                placeholder="Re-enter password"
                                required
                            />
                        </Form.Group>

                        <Button type="submit" className="fk-btn-primary">
                            Create Account
                        </Button>
                    </Form>

                    <p className="auth-link">
                        Already have an account? <Link to="/signIn">Log in</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
