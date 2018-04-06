
exports.initSend = {
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
              "region": "us-west-2",
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
    }

exports.initPluginSend = {
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
        
exports.customSend = {
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


exports.objectSave = {
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
                  "service":"SaveObject",
                  "connectionName":"CruiseS3",
                  "action" : "s3PutString",
                  "bucketName": "unknown",
                  "object": "unknown",
                  "objectName": "unknown"
                  
               }
              }
          ]
        };

exports.objectDelete = {
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
                  "service":"DeleteObject",
                  "connectionName":"CruiseS3",
                  "action" : "s3DeleteObject",
                  "bucketName": "unknown",
                  "object": "unknown",
                  "objectName": "unknown"
                  
               }
              }
          ]
        };

exports.objectLoad = {
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