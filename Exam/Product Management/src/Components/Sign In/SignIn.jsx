import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { googleSignInAsync, signInAsync } from "../../Services/Action/authentication";

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {errMsg, user} = useSelector(state => state.authReducer);
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
        console.log(inputForm);
        dispatch(signInAsync(inputForm))
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInAsync())
    }

    useEffect(()=> {
        if(user){
            navigate("/");
        }
    }, [user]);
    return (
        <>
            <Container style={{background:"pink"}}>
                <h2 style={{textAlign:"center" , color:"purple",padding:"20px"}}>Login Form</h2>
                {errMsg ? <p>{errMsg}</p> : ""}
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" style={{fontSize:"20px"}}>
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" style={{background:"lightgray" , border:"1px solid black"}} name="email" value={inputForm.email} onChange={handleChanged} placeholder="Enter Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" style={{fontSize:"20px"}}>
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" style={{background:"lightgray" , border:"1px solid black"}} name="password" value={inputForm.password} onChange={handleChanged} placeholder="Enter Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            
                        </Form.Label>
                        <Col sm="10" style={{textAlign:"center"}}>
                            <button type='submit'>SignIn</button>
                        </Col>
                    </Form.Group>
                </Form>
                <Button style={{backgroundColor:"orange" , color:"black"}}  onClick={handleGoogleSignIn} > Sign In With Google</Button>
                <p style={{textAlign:"center", fontSize:"20px"}}>Create a New Account ? <Link style={{color:"darkblue" , borderBottom:"1px,solod,black"}} to="/signUp">SignUp</Link> </p>
            </Container>
        </>
    )
}

export default SignIn;