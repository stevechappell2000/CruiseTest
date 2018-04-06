import React from 'react';
//import {Controlled as CodeMirror} from 'react-codemirror2';
import {UnControlled as CodeMirror} from 'react-codemirror2'
export default class CruiseCodeMirror extends React.Component {
    constructor(props){
        super(props);
        this.state = { value : this.props.data};
    }
    render() {

      return (
            <CodeMirror
                value={this.state.value}
                options={{
                    lineNumbers: true,
                    lineWrapping: false,
                    width: '100%',
                    height: '100%',
                    //theme: 'eclipse',
                    lineSeparator:'\n',
                    mode: 'javascript'
                    
                  }}
                onBeforeChange={(editor, data, value) => {
                    //this.setState({value});
                }}
                onChange={(editor, data, value) => {
                }}
            />
      );
    }
  }
