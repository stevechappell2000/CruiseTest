import React from 'react';
//import {Controlled as CodeMirror} from 'react-codemirror2';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/eclipse.css';
export default class CruiseCodeMirror extends React.Component {
    constructor(props){
        super(props);
        this.state = { value : this.props.data};

    }

    render() {
      let self = this;
      let data = this.props.data ?  JSON.stringify(this.props.data,null,4) : "//No Code";
      //console.log("WHAT:");
      //console.log(data);
      return (
            <div className="panel-body" width="100%">
            
            <CodeMirror
                id={ this.props.id +"_child" }
                value={data}
                height="100%"
                readOnly='false'
                options={{
                    lineNumbers: true,
                    lineWrapping: false,
                    overflow: 'auto',
                    lineSeparator:'\n',
                    autoScroll: true,
                    autoFocus: true,
                    readOnly:false,
                    autoCursor:true,
                    theme: 'eclipse',
                    mode: {name: "javascript", json: true}
                    
                  }}
                onBeforeChange={(editor, datax, value) => {
                    console.log("before change");
                    console.log(editor);
                    console.log(datax);
                    console.log(value);
                    this.setState({value:editor.getValue().replace(/\\n/g, '\n')});
                    //editor.setValue(editor.getValue().replace(/\\n/g, '\n'));
                    //datax.text = (("\""+datax.text+"\"")+"").replace(/\\n/g, '\n');
                    this.props.onChange(editor.getValue());
                    editor.setSize(this.props.width,'100%');
                }}
                onCursorActivity={(value) => {
                   console.log("cursorActivity");
                   console.log(value);
                    //editor.setSize('500','100%');
                    //editor.refresh();
                }}
                onViewPortChange={(value) => {
                    console.log("viewport change");
                     //editor.setSize('500','100%');
                     //editor.refresh();
                 }}
                onChange={(editor, data, value) => {
                   console.log("change");
                    //editor.setSize('500','100%');
                    //editor.refresh();
                }}
            />
            </div>
      );
    }
  }
