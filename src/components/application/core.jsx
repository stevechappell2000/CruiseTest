import React from 'react';
import CruiseCodeMirror from '../widgets/cruisecodemirror';
import CruiseJsonEditor from '../widgets/cruisejsoneditor';
import CruiseForm from '../widgets/cruiseform';
import CruiseS3 from '../widgets/cruises3';
import {Tab, Tabs, Table} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

export default class Core extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    console.log(`selected ${key}`);
    this.setState({ key });
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
              <CruiseCodeMirror data="//no code" key="MainCodeEditor" />
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
