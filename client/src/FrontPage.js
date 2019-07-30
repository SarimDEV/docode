import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap';

import Tasks from './components/Tasks'

class FrontPage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">
                <div class="row">
                    <div class="col-sm-8">
                        <Tasks />
                    </div>
                    <div class="col-sm-4">
                        <Card className="shadow-md mx-auto" style={{ marginBottom: '1rem' }}>
                            <CardBody>
                                <h1>Hi welcome to my youtube channel! :)</h1>
                            </CardBody>
                        </Card>
                    </div>
                </div >
            </div>
        )
    }
}

export default FrontPage