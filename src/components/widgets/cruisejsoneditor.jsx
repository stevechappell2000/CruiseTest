import React from 'react';
//import  from 'jsoneditor-for-react';
import ReactJsonEditor from 'jsoneditor-for-react';
export default class CruiseJsonEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {values:this.props.data, objectName:"unknown"};
    //this.jsonEditorOptions = React.createElement(require("JsonEditorOptions"),{modes : ['code', 'form', 'text', 'tree', 'view']});
  }
 
  render() {
    //console.log("RENDING EDITOR");
    //console.log(JSON.stringify(this.props.data,null,4));
    let thisvalue = this.props.data;
    return (
      <div className="CruiseJson" >
        <ReactJsonEditor values={thisvalue} onChange={(values) => {this.props.onChange(values)}}/>
      </div>
    );
  }
  }
