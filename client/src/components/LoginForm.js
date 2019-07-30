
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader, Spinner } from 'reactstrap';
import axios from 'axios';

import AlertHandler from './Alert'

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loginErrorMsg: '',
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.hideError = this.hideError.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit() {
        this.setState({
            isLoading: true
        })
        const loginForm = {
            name: this.state.username,
            password: this.state.password
        }
        axios.post('/user/login', loginForm)
            .then(res => {
                this.props.verify()
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    loginErrorMsg: err.response.data.msg
                })
            })
    }

    hideError() {
        this.setState({
            loginErrorMsg: ''
        })
    }

    render() {
        return (
            <div>
                <Card className="shadow-md mx-auto" style={{ width: '25rem' }} >
                    <CardHeader className="card text-white bg-dark ">Login</CardHeader>
                    <CardBody>
                        <AlertHandler msg={this.state.loginErrorMsg} onHide={this.hideError} />
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Username</Label>
                                <Input type="username" name="username" id="username" value={this.state.username} placeholder="Username" onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
                                {/*<FormFeedback>Oh noes! that name is already taken</FormFeedback> (NOTE IN THE FUTURE WE WANT TO USE THIS*/}
                            </FormGroup>
                            <Button color="dark" block onClick={this.handleSubmit}>{this.state.isLoading ? <Spinner size="sm" color="primary" /> : "Submit"}</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}