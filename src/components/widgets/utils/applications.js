 /*class Parameters {
    params = [];
    constructor(paramObjectArray) {
        this.params = paramObjectArray
    }
  }

  class Credentials {
    credentials = [];
    constructor(credentialsObjectArray) {
        this.credentials = credentialsObjectArray
    }
  }

  class Services {
    services = [];
    constructor(servicesObjectArray) {
        this.services = servicesObjectArray
    }
  }*/

  class Application {
    baseApplication = {
        parameters : {
            name: "CruiseDirector",
            id: "CruiseDirector"
        },
        credentials : {
            parameters :{
                username:"Admin",
                password:"Admin"
            }
        },
        services: []
    };
    constructor() {
        this.currentApplication = this.baseApplication;
    }
    setServices(servicesObjectArray){
        this.currentApplication.services = servicesObjectArray;
    }
    getServices(){
        return this.currentApplication.services;
    }
    updateParam(name, value){
        this.currentApplication.parameters[name] = value;
    }
    addParam(param){
        this.currentApplication.parameters.push(param);
    }
    addCredential(cred){
        this.currentApplication.credentials.push = cred;
    }
    addService(serv){
        this.currentApplication.services.push(serv);
    }
    getApplication(){
        return this.currentApplication;
    }
    setApplication(inAppStructure){
        this.currentApplication = inAppStructure;
    }
    resetApplication(){
        this.currentApplication = this.baseApplication;
    }
  }

