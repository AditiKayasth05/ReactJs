import React from "react";
import { useState } from 'react';
import download from '../../download.png'
export function ImgErrorHandling() {
    const [error, setError] = useState(false);
  
    return (
      <>
        {error && <p>Error: Image could not be loaded</p>}
        <img src="download.png" onError={() => setError(true)} alt="Unavailable" />
      </>
    );
  }