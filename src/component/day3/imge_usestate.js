import { useState } from 'react';
import download from '../../download.png'
import fasebook from  '../../fasebook.png'



export function ImgChange() {

  const [image1, setImage] = useState(download);

 
  const updateImage = () => {
   
    setImage(fasebook);
  };

  return (
    <div>
    
      <img src={image1}  width={100} alt="example" />

     
      <button onClick={updateImage}>Update Image</button>
    </div>
  );
}


