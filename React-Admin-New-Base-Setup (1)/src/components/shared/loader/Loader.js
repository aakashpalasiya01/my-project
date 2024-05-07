import React, { useState } from "react";

import { isLoading } from "utils/common/CommonService";

import "./loader.scss";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  isLoading.subscribe(val => {
    if(loading !== val) setLoading(val)
  })

  return (
    <div className="progress-loader" hidden={!loading}>
      <div id="overlay"></div>
      <div className="ring">
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
