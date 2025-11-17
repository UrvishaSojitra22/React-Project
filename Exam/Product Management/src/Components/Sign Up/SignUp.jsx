import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { createUserAsync } from "../../Services/Action/authentication";


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { errMsg, isCreated } = useSelector(state => state.authReducer)
    const [inputForm, setInputForm] = useState({
        email: "",
        password: ""
    });

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputForm)
        dispatch(createUserAsync(inputForm))
    }

    useEffect(() => {
        if (isCreated) {
            navigate("/signIn");
        }
    }, [isCreated]);
    return (
        <>
            <Container style={{background:"pink"}}>
                <h2 style={{ textAlign:"center",padding:"10px",color:"purple"}}>Register Form</h2>
                {errMsg ? <p>{errMsg}</p> : ""}
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2"style={{fontSize:"20px"}} >
                            Email
                        </Form.Label>
                        <Col sm="5">
                            <Form.Control type="text"style={{background:"lightgray", border:"1px solid black"}} name="email" value={inputForm.email} onChange={handleChanged} placeholder="Enter Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" style={{fontSize:"20px"}}>
                            Password
                        </Form.Label>
                        <Col sm="5">
                            <Form.Control type="password" style={{background:"lightgray", border:"1px solid black"}} name="password" value={inputForm.password} onChange={handleChanged} placeholder="Enter Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">

                        </Form.Label>
                        <Col sm="10" style={{textAlign:"center",padding:"20px"}}>
                            <button type='submit'>SignUp</button>
                        </Col>
                    </Form.Group>
                </Form>
                <p style={{textAlign:"center", fontSize:"20px"}}>Already an Account ? <Link to="/signIn">SignIn</Link> </p>
            </Container>
        </>
    )
}

export default SignUp;