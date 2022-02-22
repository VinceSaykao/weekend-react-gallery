import React, { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import axios from 'axios';

function App() {



  const [galleryInfo, setGalleryInfo] = useState([]);



  useEffect(() => {
    console.log('in useEffect');
    fetchGallery();
  }, []);


  // GET request

  const fetchGallery = () => {
    axios.get('/gallery')
      .then((response) => {
        console.log('this is the response from fetchGallery', response.data);
        console.log('resonse',response)
        setGalleryInfo(response.data);
      })
      .catch((error) => {
        console.log('Error', error);
      })


  }; // end of fetchGallery






  return (

    <div className="App">
      
      

      <header className="App-header">
        <h1 className="App-title">Saykao Gallery</h1>
      </header>

      <GalleryList
        fetchGallery={fetchGallery} 
        galleryInfo={galleryInfo}
        />

      


<div>
    <img id="camera" src="/images/camera.png"/>
    </div>


<button id="add-photo">
<h2>Add Photo</h2>
</button>

<div className="loader">
            <span></span>

                </div>
        
    </div>
  
    
  );
}

export default App;


