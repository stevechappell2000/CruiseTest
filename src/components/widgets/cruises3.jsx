import React from 'react';
//import ReactDOM from 'react-dom';
import {Panel,Table,Button,ButtonGroup,DropdownButton,MenuItem,OverlayTrigger,Popover} from 'react-bootstrap';
import CruiseS3ListButton from './cruises3ListButton'
import * as server from '../utilities/server';
import CruiseSpinner from './cruisespinner';
import CruiseJsonEditor from './cruisejsoneditor';
import CruiseCodeMirror from './cruisecodemirror';
import CruiseComboBox from './cruisecombobox';
import CruiseModal from './cruisemodal';
import Application from './utils/applications'
export default class CruiseS3 extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            key: 1,
            bucketName: "None Selected.",
            bucketListData:[],
            renderBucket: false,
            bucketLoading: true,
            objectName: "unknown",
            fileListData:[],
            objectLoading: false,
            renderObject: false,
            renderJavaScript: true,
            renderForm: true,
            renderJsonEditor: true,
            jsonData: {no:"data"},
            codeMirrorData: this.props.data,
            plugInData:[],
            stageButton: true,
            reloadbutton: true

          };
        this.clearButtonClicked = this.clearButtonClicked.bind(this);
        this.stageButtonClicked = this.stageButtonClicked.bind(this);
        this.sendButtonClicked = this.sendButtonClicked.bind(this);
        this.reloadButtonClicked = this.reloadButtonClicked.bind(this);

        this.onBucketSelected = this.onBucketSelected.bind(this);
        this.onBucketClicked = this.onBucketClicked.bind(this);

        this.onObjectSelected = this.onObjectSelected.bind(this);
        this.onObjectClicked = this.onObjectClicked.bind(this);

        this.handleBucketResponse = this.handleBucketResponse.bind(this);
        this.handleBucketResponseError = this.handleBucketResponseError.bind(this);
        
        this.handleObjectResponse = this.handleObjectResponse.bind(this);
        this.handleObjectResponseError = this.handleObjectResponseError.bind(this);

        this.handleS3Response = this.handleS3Response.bind(this);
        this.handleS3ResponseError = this.handleS3ResponseError.bind(this);

        this.handlePluginResponse = this.handlePluginResponse.bind(this);
        this.handlePluginResponseError = this.handlePluginResponseError.bind(this);
        this.handlePlugInChange = this.handlePlugInChange.bind(this);
        this.handlePlugInActionChange = this.handlePlugInActionChange.bind(this);
        this.handlePlugInParamChange = this.handlePlugInParamChange.bind(this);

        let req = this.getScript("bucketList", {region:this.props.Region});
        let reqPlugin = this.getScript("plugIn", {});

        server.postRequest(this.props.s3URL ,req, this.handleBucketResponse, this.handleBucketResponseError);
        server.postRequest(this.props.s3URL ,reqPlugin, this.handlePluginResponse, this.handlePluginResponseError);
    }
    clearButtonClicked(evt){
        this.setState({
            jsonData: {}
        }, function () {
            //console.log("Plugin Data Loaded:"+this.state.plugInData.length);
        });
    }
    stageButtonClicked(evt){
        console.log(this.state.application.getApplication());
    }
    sendButtonClicked(evt){
        console.log("Clear");
    }
    reloadButtonClicked(evt){
        if(this.state.jsonDataHold){
            this.setState({
                jsonData: this.state.jsonDataHold
            }, function () {
                //console.log("Plugin Data Loaded:"+this.state.plugInData.length);
            });
        }
    }
    handlePluginResponse(response){
        this.setState({
            plugInData: response.data["Plugins"].map((d) => {
                return {
                    value: d.plugInMetaData.name,
                    label: d.plugInMetaData.name,
                    data: d
                }})
        }, function () {
            //console.log("Plugin Data Loaded:"+this.state.plugInData.length);
        });
        //console.log(JSON.stringify(this.state.plugInData,null,4));

    }
    handlePlugInActionChange(evt){
       
        //this.setState({
        //    plugInActionSelected: evt.value,
        //    pluginActionData: evt 
        //});

        var app = new Application();
        for(var x=0;x<this.state.plugInActions.length;x++){
            //console.log(this.state.plugInData[x]);
            //console.log(this.state.plugInData[x].data.plugInMetaData.name+":"+evt.value);
            if(this.state.plugInActions[x].data.actionName === evt.value){
                console.log(JSON.stringify(this.state.plugInActions[x].data.actionParams,null,4));
                this.setState({
                    stageButton:false,
                    application: app,
                    plugInSelected: evt.value,
                    pluginActionData: this.state.plugInActions[x].data,
                    plugInActionParam: this.state.plugInActions[x].data.actionParams.map((d) => {
                            return {
                                value: d.paramName,
                                label: d.paramName,
                                data: d
                            }
                    })
                }, function () {
                    //console.log(this.state.plugInActions);
                });
            }
        }




     }
     handlePlugInParamChange(evt){
        //console.log(evt.value);
        this.setState({
            plugInParamSelected: evt.value,
            pluginParamData: evt 
        });
     }
    handlePlugInChange(evt){
        for(var x=0;x<this.state.plugInData.length;x++){
            //console.log(this.state.plugInData[x]);
            //console.log(this.state.plugInData[x].data.plugInMetaData.name+":"+evt.value);
            if(this.state.plugInData[x].data.plugInMetaData.name === evt.value){
                this.setState({
                    stageButton:true,
                    plugInSelected: evt.value,
                    plugInActionSelected: "",
                    plugInActions: this.state.plugInData[x].data.plugInMetaData.actions.map((d) => {
                            return {
                                value: d.actionName,
                                label: d.actionName,
                                data: d
                            }
                    })
                }, function () {
                    //console.log(this.state.plugInActions);
                });
            }
        }
    }
    handlePluginResponseError(response){
          this.setState({
            plugInData:[]
            }, function() {
              // setState is asynchronous! This function gets called
            });
    }

    handleBucketResponse(response){
        //console.log("vvvvvvvRESPONSEOBJECTvvvvvvvv:"+this.props.id);

          this.setState({
            bucketListData: response.data["BucketLoadList.s3ListBuckets"],
            jsonData:response.data,
            bucketLoading: false,
            codeMirrorData: response.data
            }, function() {
              // setState is asynchronous! This function gets called
            });
    }
    handleBucketResponseError(response){
          this.setState({
            bucketListData: [],
            codeMirrorData: response
            }, function() {
              // setState is asynchronous! This function gets called
            });
    }
    handleObjectResponse(response){
        //console.log("vvvvvvvRESPONSEOBJECTvvvvvvvv:"+this.props.id);
          
          this.setState({
            fileListData: response.data["BucketLoadList.s3ListAllFiles"]["objectSummaries"],
            objectLoading:false,
            reloadbutton: true,
            codeMirrorData: response
            }, function() {
                //console.log(JSON.stringify(this.state.fileListData,null,4));
            });
    }
    handleObjectResponseError(response){
          this.setState({
            fileListData: [],
            codeMirrorData: response
            }, function() {
              // setState is asynchronous! This function gets called
            });
    }
    handleS3Response(response){
       //console.log("vvvvvvvSSSSSSSSSSSS333333333333333333vvvvvvvv:");
          
          this.setState({
            jsonData: JSON.parse(response.data["LoadObject.s3GetString"]["object"]),
            jsonDataHold: JSON.parse(response.data["LoadObject.s3GetString"]["object"]),
            reloadbutton: false,
            codeMirrorData: response
            }, function() {
                //console.log("doneloading");
                
                //this.setState()
            });
    }
    handleS3ResponseError(response){
          this.setState({
            jsonData: [],
            renderJsonEditor:false,
            codeMirrorData: response
            }, function() {
               console.log("ERROR: Failed to load error:"+response);
            });
    }
    getScript(scriptType, scriptParams){
        let scriptOb = undefined;
        if(scriptType==="bucketList"){
           scriptOb = server.getInitSend();
        }else if(scriptType==="fileList"){
           scriptOb = server.getFileList()
        }else if(scriptType==="plugIn"){
            scriptOb = server.getPluginInfo()
        }else if(scriptType==="getObject"){
            scriptOb = server.getS3Object()
            //console.log(JSON.stringify(scriptOb,null,4))
         }
        for (var attrname in scriptParams) { 
            scriptOb.services[0].parameters[attrname] = scriptParams[attrname]; 
        }
        return scriptOb;
    }
    onBucketSelected(evt,id){
        //console.log("bucket selected:"+id);
        //console.log(evt);
        this.setState({bucketName: evt});
        let req = this.getScript("fileList", {bucketName:evt});
        this.setState({objectLoading:true});
        server.postRequest(this.props.s3URL ,req, this.handleObjectResponse, this.handleObjectResponseError);
    }
    onBucketClicked(evt,id){
        //console.log("bucket Clicked:"+id);
        //console.log(evt);
        //this.setState({bucketName: retBucketName});
        //this.setState({renderObject: true});
    }
    onObjectSelected(evt,id){
        this.setState({objectName: evt});
        //this.setState({bucketName: retBucketName});
        //let req = this.getScript("fileList", {bucketName:evt});
        //server.postRequest(this.props.s3URL ,req, this.handleObjectResponse, this.handleObjectResponseError);
       // console.log(this.props.objectName);
        let req = this.getScript("getObject", {objectName:evt, bucketName: this.state.bucketName});
        //console.log(JSON.stringify(req,null,4));
        server.postRequest(this.props.s3URL ,req, this.handleS3Response, this.handleS3ResponseError);
    }
    onObjectClicked(evt,id){
        console.log("object Clicked:"+id);
        //console.log(evt);
        //this.setState({bucketName: retBucketName});
        //this.setState({renderObject: true});
    }
    render() {
        console.log("Cruise Render");
        //console.log(this.state.jsonData);<CruiseModal />
        let self = this;
        return (
            
            <Table>
                <tbody>
                    <tr>
                        <td width="100px" colSpan="3">
                            <div>
                                <Panel bsStyle="info">
                                    <Panel.Heading>
                                        <Panel.Title componentClass="h3"><b>Bucket :</b>{this.state.bucketName}&nbsp;<b>Object :</b>{this.state.objectName}</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body>

                                    <Table ><tbody>
                                        <tr>
                                            <td width="10%"><div>
                                            {this.state.bucketLoading ? <CruiseSpinner /> : 
                                                    <CruiseS3ListButton 
                                                    key="bucketListButton"
                                                    id="bucketListButton"
                                                    label="Select a Bucket"
                                                    data={self.state.bucketListData}
                                                    listKey="name"
                                                    listItem="name"
                                                    onClicked={self.onBucketClicked} 
                                                    onSelected={self.onBucketSelected} />
                                                }
                                            </div></td>
                                            <td width="10%"><div>
                                                {this.state.objectLoading ? <CruiseSpinner/> : 
                                                    <CruiseS3ListButton 
                                                    key="fileListButton"
                                                    id="fileListbutton"
                                                    label="Select an Object"
                                                    data={self.state.fileListData}
                                                    listKey="key"
                                                    listItem="key"
                                                    onClicked={self.onObjectClicked} 
                                                    onSelected={self.onObjectSelected} />
                                                }
                                                

                                            </div></td>
                                            <td width="10%">
                                            <Button bsStyle="primary" disabled={this.state.reloadbutton} onClick={this.reloadButtonClicked} bsSize="small" >Reload From S3</Button>
                                            </td>
                                            <td width="50%">
                                            </td>
                                        </tr>
                                        </tbody></Table>
                                    </Panel.Body>
                                </Panel>
                            </div>
                        </td>
                    </tr>
                <tr>
                    <td width="100px">
                        <ButtonGroup vertical>
                            
                            <Button bsStyle="primary" bsSize="large" block>Send to Server</Button>
                        </ButtonGroup>;
                    </td>
                    <td width="50%">
                        <div  height="500px" width="100%">
                            <Panel bsStyle="info">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3"><b>JsonEditor :</b>{this.state.objectName}</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    <div>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    PlugIn Name: <CruiseComboBox key="CruiseComboBoxone" id="CruiseComboBoxone" data={this.state.plugInData} onSelected={this.handlePlugInChange}/>
                                                </td>
                                                <td>
                                                   PlugIn Actions: <CruiseComboBox key="CruiseComboBoxtwo" id="CruiseComboBoxtwo" data={this.state.plugInActions} onSelected={this.handlePlugInActionChange}/>
                                                </td>
                                                <td>
                                                   PlugIn Params: <CruiseComboBox key="CruiseComboBoxthree" id="CruiseComboBoxthree" data={this.state.plugInActionParam} onSelected={this.handlePlugInParamChange} />
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>
                                                <Button bsStyle="primary" bsSize="small"  block onClick={this.clearButtonClicked}>Clear JSON</Button>
                                                </td>
                                                <td>
                                                <Button bsStyle="primary" bsSize="small" disabled={this.state.stageButton} block onClick={this.stageButtonClicked}>Stage Selected</Button>
                                                </td>
                                                <td>
                                                <Button bsStyle="primary" bsSize="small" block onClick={this.sendButtonClicked}>Send To Server</Button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                    </div>
                                    <div width="100%">
                                        <CruiseJsonEditor key="S3Editor" objectName={this.state.objectName} data={self.state.jsonData}/>
                                    </div>
                                </Panel.Body>
                            </Panel>
                        </div>
                    </td>
                    <td width="100%">
                        <div  height="500px" width="100%">
                            <Panel bsStyle="info">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3"><b>Response Display :</b>{this.state.objectName}</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    <div width="100%">
                                        <CruiseCodeMirror data={this.state.codeMirrorData} key="ReturnedCode" />
                                    </div>
                                </Panel.Body>
                            </Panel>
                        </div>
                    </td>
                </tr>
            </tbody>

            </Table>
        )
    }
}