import React, { useState, useEffect } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
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
        let info = response.data;
        console.log('this is the response from fetchGallery', info);
        setGalleryInfo(info);
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

<div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        
        
        
                </div>
        



    </div>
  
    
  );
}

export default App;



/*


 {galleryInfo.map((items) => (
        <GalleryItem key={items.id}
          path={items.path}
          description={items.description}
          likes={items.likes}
        />
      ))}


*/