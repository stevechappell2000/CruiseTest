import React from 'react';
import ReactJsonEditor from 'jsoneditor-for-react';
import {Button,ButtonGroup,DropdownButton,MenuItem} from 'react-bootstrap';
export default class CruiseS3Actions extends React.Component {
  constructor(props){
    super(props);
    this.state = {values:this.props.data, objectName:"unknown"};
  }
  render() {
    console.log(this.state.values);
    return (
      <div className="CruiseS3Actions" >
            <ButtonGroup vertical>
                <Button bsStyle="primary" bsSize="large" block>Button</Button>
                <Button bsStyle="primary" bsSize="large" block>Button</Button>
                <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
                </DropdownButton>
                <Button bsStyle="primary" bsSize="large" block><i className="fa fa-envelope fa-fw"></i>Button</Button>
                <Button bsStyle="primary" bsSize="large" block>Button</Button>
                <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
                </DropdownButton>
                <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
                </DropdownButton>
            </ButtonGroup>
      </div>
    );
  }
  }


