//react-autocomplete
import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
export default class CruiseComboBox extends React.Component {
    constructor(props) {
        super(props);
        this.onSelected = this.onSelected.bind(this);
        this.onClick = this.onClicked.bind(this);
        this.renderComboboxOptions = this.renderComboboxOptions.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.dataConvert = this.dataConvert.bind(this);
        //console.log("Props Data");
        //console.log(this.props);
        this.state = {
            data: this.props.data,
            selectedKey: ""
        };
    }
    dataConvert(){
        return [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two'},
            { value: 'three', label: 'Three'}
          ];
    }
    onSelected(evt, id) {
        console.log("component Selected");
        this.props.onSelected(evt, id);
        //this.props.onSelected(evt);
    }
    onClicked(evt, id) {
        //console.log(this.props);
        this.props.onClicked(evt, id);
    }
    renderComboboxOptions() {
        /*return this.state.data.map(function (data) {
            return (
                <Option
                    value={data.key}
                    label={data.value}
                >{data.value}</Option>
            );
        });*/
    }
    handleSelect(value) {
        //console.log(this.props);
        this.props.onSelected(value);
        this.setState({
            selectedKey: value
            // for client-side filtering you probably want to populate your list
            // again so when they open it they can choose something besides what they
            // just picked
            //states: this.state.data
        });
    }
    handleInput(userInput) {
        this.setState({ selectedKey: null }, function () {
            // and then do our client-side filtering, need to it after setState has happened
            // so that the value doesn't get rerendered to hte old selectedKey
            // (this might be bad implementation at this point, still exploring a better
            // way to handle this)
            this.filterStates(userInput);
        }.bind(this));
    }
    render() {
        var menuContent = this.props.data ?  this.props.data : this.dataConvert();
        var defaultOption = this.state.selectedKey ?  this.state.selectedKey : "None Selected"
        //console.log("KEYS:"+this.props.id);
        return (
            <div>
                <Dropdown key={this.props.id} options={menuContent} onChange={this.handleSelect} onSelected={this.onSelected} onClick={this.onClick} value={defaultOption} placeholder="Select an option" />
            </div>
        );
    }


}
