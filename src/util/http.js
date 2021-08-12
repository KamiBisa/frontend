import fetch from "isomorphic-fetch";
import {appConfig} from "../config/app";

export class Http {
  token = '';
  baseUrl = '';

  constructor(token, baseUrl = appConfig.apiUrl, disableAuth=false) {
    if (token) {
      this.token = token;
    }
    this.disableAuth = disableAuth;

    this.baseUrl = baseUrl;
  }

  checkStatus(result) {
    if (!result.ok) {
      return result.json().then(data => {
        return Promise.reject(data);
      });
    }
    return result;
  }

  get(url) {
    let headers = new Headers();
    if(!this.disableAuth) {
      headers.append("Authorization", "Bearer " + this.token);
    }

    return fetch(this.baseUrl + url, {
      headers
    })
      .then(this.checkStatus)
      .then(response => {
        if(response.status === 204) {
          return '';
        } else {
          return response.json();
        }
      })
      .catch(err => {
        throw err;
      })
  }

  post(url, data, options) {
    let headers = new Headers();
    if(!this.disableAuth) {
      headers.append("Authorization", "Bearer " + this.token);
    }
    headers.append("Content-Type", "application/json");

    return fetch(this.baseUrl + url, Object.assign({
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }, options))
      .then(this.checkStatus)
      .then(response => response.json())
      .catch(err => {
        throw err;
      })
  }

  put(url, data, options) {
    let headers = new Headers();
    if(!this.disableAuth) {
      headers.append("Authorization", "Bearer " + this.token);
    }
    headers.append("Content-Type", "application/json");

    return fetch(this.baseUrl + url, Object.assign({
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    }, options))
      .then(this.checkStatus)
      .then(response => response.json())
      .catch(err => {
        throw err;
      })
  }

  delete(url) {
    let headers = new Headers();
    if(!this.disableAuth) {
      headers.append("Authorization", "Bearer " + this.token);
    }

    return fetch(this.baseUrl + url, {
      headers,
      method: 'DELETE'
    })
      .then(this.checkStatus)
      .then(response => response.json())
      .catch(err => {
        throw err;
      })
  }

  upload(file, options={}) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + this.token);
    let data = new FormData();
    data.append('file', file);

    const uploadUrl = options.url || '/files';

    return fetch(this.baseUrl + uploadUrl, Object.assign({
      method: 'POST',
      headers,
      body: data
    }, options))
      .then(response => {
        if(!response.ok) {
          return response.json().then(data => {
            return Promise.reject(data);
          });
        }
        return response.json();
      })
      .catch(err => {
        throw err;
      })
  }

  uploadWithProgress(file, opts={}) {
    return new Promise( (res, rej)=>{

      const xhr = new XMLHttpRequest();

      const url = this.baseUrl + (opts.url||'/files');

      xhr.open(opts.method || 'post', url);

      const defaultHeaders = {
        Authorization: this.token
      };

      const headers = Object.assign(opts.headers||{}, defaultHeaders) || defaultHeaders;

      for (const k in headers) {
        xhr.setRequestHeader(k, headers[k])
      }

      xhr.onload = e => {
        try {
          const parsed = JSON.parse(e.target.responseText);

          res(parsed);
        } catch (err) {
          res(e.target.responseText)
        }
      };
      xhr.onerror = rej;

      if (xhr.upload && opts.onProgress) {
        xhr.upload.onprogress = opts.onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
      }

      let data = new FormData();
      data.append('file', file);

      xhr.send(data);
    });
  }


  appendImagePath(path) {
    return appConfig.imageUrl + path;
  }

  // static appendImagePath(path) {
  //   return appConfig.imageUrl + path;
  // }
}
