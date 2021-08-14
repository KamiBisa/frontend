import { configure, makeAutoObservable } from 'mobx';
import { Http } from '../util/http';
import { appConfig } from "../config/app";

import storeApp from "./store_app.js"

export class AppState {
  appStore = new storeApp(this);
  // create new empty token for auth, for appConfig link, and disable auth = true
  http = new Http({}, appConfig.apiUrl, true)

  constructor(contex) {
    // make auto variable of appstate
    makeAutoObservable(this)
    // basic config of mobx
    configure({
      enforceActions: 'never'
    })
  }
}



export const storeInstance = new AppState()