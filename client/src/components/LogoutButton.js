
import React from 'react';
import { Button, Spinner } from 'reactstrap';
import axios from 'axios';

export default class LogoutButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            isLoading: true
        })
        axios.post('/user/logout')
            .then(res => {
                this.props.verify()
                this.setState({
                    isLoading: false
                })
            })
    }

    render() {
        return (
            <div>
                <Button color="danger" size="sm" onClick={this.handleClick}>
                    {this.state.isLoading ? <Spinner size="sm" color="danger" /> : "Logout"}
                </Button>
            </div>

        );
    }
}