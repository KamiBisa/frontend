// this is basic structure to use mobx in component after setup
import React, { useEffect, useRef, useState } from 'react';
import { observer } from "mobx-react";
import { useStore } from "../../util/useStore";

const SampleComponentWithMobx = observer( () => {
  // it contains appStateClass
  store = useStore()
  // it will use variable of ./store/store_app.js
  storeForComponent = store.appStore
  return (
    <React.Fragment>
      <div>
        Hi! Sample Component Here
      </div>
    </React.Fragment>
  )
})

export default SampleComponentWithMobx