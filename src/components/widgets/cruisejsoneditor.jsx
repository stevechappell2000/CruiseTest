import React from 'react';
//import  from 'jsoneditor-for-react';
import ReactJsonEditor from 'jsoneditor-for-react';
export default class CruiseJsonEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {values:this.props.data, objectName:"unknown"};
    //this.jsonEditorOptions = React.createElement(require("JsonEditorOptions"),{modes : ['code', 'form', 'text', 'tree', 'view']});
  }
  editorChangeHandler = (values) => {
    console.log('new values', values)
    this.setState({values: values})
  }
 
  render() {
    console.log("RENDING EDITOR");
    console.log(this.state.values);
    //JsonEditorOptions = {modes : ['code', 'form', 'text', 'tree', 'view']};
    return (
      <div className="CruiseJson" >
        <ReactJsonEditor values={this.props.data} onChange={(values) => {this.editorChangeHandler(values)}}/>
      </div>
    );
  }
  }
