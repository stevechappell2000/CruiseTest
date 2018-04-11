import React from 'react';
import CruiseCodeMirror from '../widgets/cruisecodemirror';
import CruiseJsonEditor from '../widgets/cruisejsoneditor';
import CruiseForm from '../widgets/cruiseform';
import CruiseS3 from '../widgets/cruises3';
import {Tab, Tabs, Table, Button} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

export default class Core extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {data:"//CodeSomething"};
    this.handleSelect = this.handleSelect.bind(this);
    this.formatData = this.formatData.bind(this);
    this.removeOddChars = this.removeOddChars.bind(this);
  }
  removeOddChars(strValue){

      strValue = (strValue+"").replace(/\\n/g, '\n');
      //strValue = strValue.replace(/&nbsp;/g ,' ');
      //strValue = strValue.replace(/&gt;/g, '>');
      //strValue = strValue.replace(/&lt;/g, '<');
      //strValue = strValue.replace(/&amp;/g, '&');
      console.log("((((((((((("+strValue+"))))))))))))))");
      return strValue;
  }
  handleSelect(key) {
    console.log(`selected ${key}`);
    this.setState({ key: "unknown", data:"//Start Coding!!" });
  }
  formatData(inID){
      console.log(this.refs.SecondCodeWindow.state.value);
     // this.setState({
     //     data: this.removeOddChars(this.refs.SecondCodeWindow.getValue()),
     // }, function () {
//
     // });
      
  }
  render() {
    return (
      <Table><tbody>
      <tr>
        <td>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" animation={false}>
            <Tab eventKey={1} title="AWS S3">
              <CruiseS3 s3URL="https://0j0b9hki27.execute-api.us-west-2.amazonaws.com/test"  Region="us-west-2" data="//No Response"/>
            </Tab>
            <Tab eventKey={2} title="Java Script Editor">
              <div>
              <Button bsStyle="primary" bsSize="small"  block onClick={this.formatData}>Clear JSON</Button>
              <CruiseCodeMirror ref="SecondCodeWindow" data={this.state.data} key="CodeEditorTab" width="100%" onChange={function(){console.log("*ignore change");}}/>
              </div>
            </Tab>
            <Tab eventKey={3} title="JSon Editor">
              
              <CruiseJsonEditor data="{one:1}" key="dummy"/>
            </Tab>
            <Tab eventKey={4} title="Form Editor" >
              <CruiseForm />
            </Tab>
          </Tabs>
        </td>
      </tr>
    </tbody></Table>
    );
  }
}
