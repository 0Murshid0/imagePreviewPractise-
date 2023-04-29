import * as React from 'react';
import './style.css';

export default function App() {
  const inputChange = (e) => {
    const input = e.target;
    if (input.files?.[0]) img.src = URL.createObjectURL(input.files[0]);
  };
  console.log();
  return (
    <>
      <div className="imgSection">
        <img className="img"
          id="img"
          src="https://cdn1.iconfinder.com/data/icons/images-image-files-9/24/edit_image_picture_photo_photography-256.png"
          height="300"
        />
        </div>
        <br/>
        <input id="input" type="file" onChange={inputChange} className="file-input" />
      
    </>
  );
}
