import React from 'react';

export default class DropDownList extends React.Component {
    displayName='Dropdown'
    getInitialState() {
        return {
            options: []
        };
    }
    componentDidMount() {
        var component = this;
        $.ajax({
            url: 'branches.json',
            type: 'GET',
            dataType: 'JSON',
            success: function (data) {
                component.setState({
                    options: data
                });
            }
        });
    }
    handleClick() {

        //RUN YOUR CUSTOM HANDLER

    }
    render() {
        var i = 0;
        var options = this.state.options.map(function (option) {
            return React.createElement(
                'option',
                { value: option, key: i++ },
                option
            );
        });
        return React.createElement(
            'select',
            { onChange: this.handleClick },
            options
        );
    }
}