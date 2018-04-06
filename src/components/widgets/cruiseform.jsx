import React from 'react';
//import ReactDOM from 'react-dom';
import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task eater"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};
const formData = {
  title: "First task",
  done: true
};
const log = (type) => console.log.bind(console, type);

export default class Cruiseform extends React.Component {
    render() {
      return (
        <Form schema={schema}
                onChange={log("changed")}
                formData={formData}
                onSubmit={log("submitted")}
                onError={log("errors")} />
      );
    }
  }