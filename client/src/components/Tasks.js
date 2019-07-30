import React, { Component } from 'react'
import { Card, CardBody, Badge } from 'reactstrap';
import axios from 'axios'

import logo from '../imgs/llama_dribbble.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram, faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons'


class Tasks extends Component {
    constructor() {
        super()
        this.state = {
            taskData: []
        }
    }

    componentDidMount() {
        axios('/tasks')
            .then(res => {
                this.setState({
                    taskData: res.data
                })
            })
    }

    render() {
        return (
            this.state.taskData.map(task => {
                return (
                    <Card style={{ marginBottom: '10px' }}>
                        <CardBody>
                            <div>
                                <div style={{ marginBottom: '50px' }}>
                                    <img src={logo} alt="profilePicture" class="rounded float-left" style={{ marginRight: '10px', }} />
                                    <Badge color="light" className="float-right" style={{ color: 'gray' }}><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faProjectDiagram} color="red" /> Projects</Badge>
                                    <p style={{ color: 'gray' }}>By: {task.user} - {task.date}</p>
                                </div>
                                <h5>{task.title}</h5>
                                <hr />
                                <p>{task.description}</p>
                                <p style={{}}>{task.like_count}</p><FontAwesomeIcon icon={faThumbsUp} /> <FontAwesomeIcon icon={faComments} />
                            </div>
                        </CardBody>
                    </Card>
                )
            })
        )
    }
}

export default Tasks
