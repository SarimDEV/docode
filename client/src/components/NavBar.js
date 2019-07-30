import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import LogoutButton from './LogoutButton'

import icon from '../imgs/llama_dribble.png'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div style={{ marginBottom: '2rem' }}>
                <Navbar className="shadow-md" color="dark" dark expand="md" >
                    <div className="container">
                        <NavbarBrand href="/"><img alt="icon" className="rounded" src={icon} /> DoCode</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                                </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                    </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                {this.props.isAuthenticated ?
                                    <NavItem>
                                        <NavLink><LogoutButton verify={this.props.verify} /></NavLink>
                                    </NavItem> : null}
                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>
            </div>


        );
    }
}