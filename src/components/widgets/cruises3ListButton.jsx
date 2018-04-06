import React from 'react';
//import ReactDOM from 'react-dom';
import {ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap';

//import {initSend} from '../../serverdata/data';
export default class CruiseS3ListButton extends React.Component {
  constructor(props) {
    super(props);
        this.onSelected = this.onSelected.bind(this);
        this.onClick = this.onClicked.bind(this);
    }
    onSelected(evt,id){
        this.props.onSelected(evt,id);
    }
    onClicked(evt,id){
       //console.log(this.props);
       this.props.onClicked(evt,id);
    }
    render() {
            let self = this;
            let mapKey = this.props.listKey;
            let mapItem = this.props.listItem;
           // console.log(this.props.id+":"+mapKey);
            let options = ""
            if(self.props.data.length > 0){
                //console.log(self.props.data);
                options = this.props.data.map(function(row,index) {
                return <MenuItem key={row[mapKey]} eventKey={row[mapItem]}> {row[mapItem]} </MenuItem>;
              });
            }
            //this.state.renderIt = false;
            return (
              <ButtonToolbar>
                <DropdownButton
                  title={this.props.label}
                  id={this.props.id}
                  onSelect={function(evt){
                      self.onSelected(evt, self.props.id)
                      }

                  }
                  onClick={function(evt,){
                    self.onClicked(evt, self.props.id)
                    }
                  }
                >
                {options}
                </DropdownButton>
              </ButtonToolbar>
            );
            
          
      }
      

}
