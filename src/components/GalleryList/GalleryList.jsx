import axios from "axios"
import GalleryItem from "../GalleryItem/GalleryItem.jsx"

function GalleryList({galleryInfo,fetchGallery}) {

// let [galleryListing,setgalleryListing] = useState('');

/*
axios.put('/like')
.then((result) => {
    fetchGallery(); // calls axios GET 
})
*/

    return (
        <>




        {galleryInfo.map((items) => (
        <GalleryItem key={items.id}
          items={items}
        />
      ))}
        </>

    )

}; // end of function


export default GalleryList



/*
 


*/