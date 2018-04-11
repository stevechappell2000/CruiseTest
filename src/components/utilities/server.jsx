import axios from 'axios';

export function  postRequest(URL, data, handleResponse, handleError){
    //console.log("Sending----------");
    //console.log(data);
    axios.post(URL, data)
    .then(function (response) {
      handleResponse(response);
    })
    .catch(function (error) {
      console.log("WARNING ERROR");
      console.log(error);
      handleError(error);
    });
    return 'Sent';
  }
export function setURL(inURL){
  this.URL = inURL;
}
export function getURL(){
  return this.URL;
}
export function getPluginInfo(){
  return  {
    "parameters" : {
      "name" : "CruiseDirector",
      "id" : "CruiseDirectorID"
    },
    "credentials" : {
      "parameters" : {
        "password" : "admin",
        "username" : "admin"
      }
    },
    "services" : [
          {"parameters" : {
              "pluginName" : "CruiseCorePlugin",
              "service":"SomeService",
              "action" : "plugInInfo"
           }
          }
      ]
    };
}
export function getInitSend(){
  return {
    "parameters" : {
        "name" : "CruiseDirector",
        "id" : "CruiseDirectorID"
    },
    "credentials" : {
      "parameters" : {
        "password" : "admin",
        "username" : "admin"
      }
    },
    "services" : [
          {"parameters" : {
              "pluginName" : "CruiseS3",
              "service":"CruiseS3Connect",
              "connectionName":"CruiseS3",
              "region": "unknown",
              "action" : "s3Connect"
           }
          },
          {"parameters" : {
              "pluginName" : "CruiseS3",
              "service":"BucketLoadList",
              "connectionName":"CruiseS3",
              "action" : "s3ListBuckets"
           }
          }
      ]
    };
}
export function getS3Object(){
  return {
    "parameters" : {
        "name" : "CruiseDirector",
        "id" : "CruiseDirectorID"
    },
    "credentials" : {
      "parameters" : {
        "password" : "admin",
        "username" : "admin"
      }
    },
    "services" : [
          {"parameters" : {
              "pluginName" : "CruiseS3",
              "service":"LoadObject",
              "connectionName":"CruiseS3",
              "action" : "s3GetString",
              "bucketName": "unknown",
              "objectName": "unknown"
              
           }
          }
      ]
    };
}
export function getFileList(){
  return {
    "parameters" : {
        "name" : "CruiseDirector",
        "id" : "CruiseDirectorID"
    },
    "credentials" : {
      "parameters" : {
        "password" : "admin",
        "username" : "admin"
      }
    },
    "services" : [
          {"parameters" : {
              "pluginName" : "CruiseS3",
              "service":"BucketLoadList",
              "connectionName":"CruiseS3",
              "action" : "s3ListAllFiles",
              "bucketName": "unknown"
           }
          }
      ]
    };
}
export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
}

