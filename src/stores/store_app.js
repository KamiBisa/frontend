import { makeAutoObservable } from 'mobx';

export default class storeApp {

  // sample var
  storeAppVariable = ''
  constructor(context) {
    makeAutoObservable(this)

    this.context = context;
    this.http = context.http;
  }

  //sample action function
  functionSample() {
    // do something
  }

  //sample http to access backend (get)
  getBackendFunctionSample(){
    this.http.get("url/?param1=xxx").then(res => {
      // if http return code 200 / 2xx
      // do something
      return res
    })
    .catch(err => {
      // if http return is 500 / 5xx or 404 / 4xx
      // do something
      throw err
    })
  }

  //sample http to access backend (post)
  postBackendFunctionSample(){
    let objPost = {
      param1 : ''
    }
    this.http.post("url", objPost).then(res => {
      // if http return code 200 / 2xx
      // do something
      return res
    })
    .catch(err => {
      // if http return is 500 / 5xx or 404 / 4xx
      // do something
      throw err
    })
  }
}