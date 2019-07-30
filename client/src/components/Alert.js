import React from 'react';
import { Alert } from 'reactstrap';

class AlertExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.props.onHide();
    }

    render() {
        return (
            <Alert color="danger" isOpen={this.props.msg} toggle={this.onDismiss}>
                {this.props.msg}
            </Alert>
        );
    }
}

export default AlertExample;