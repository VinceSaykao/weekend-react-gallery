// import images from '../images'
import axios from 'axios';
import { useState } from 'react';

function GalleryItem({ items, fetchGallery }) {

    const [vote, setVote] = useState(items.likes);
    const [toggled, setToggled] =useState(true);

    const upVote = (items) => {
        let voteCounts = setVote(vote + 1);
        console.log('clicked');
    }

    const toggleImage = () => 
    setToggled(!toggled);

    const handleLike = () => {
        console.log('You Liked!');
        axios
            .put(`/gallery/${gallery.id}`), {}
                .then((result) => {
                    console.log('Updated Like');
                    fetchGallery();
                })
                .catch((err) => {
                    console.log("Error", err);
                });

    }; // end of handleLike



    /*
    const likeStatus = () => {
    
            if ({items.likes} === 0) {
                return 'No people love this :('
            } else ({items.likes} > 0) {
                return <p>
                {items.likes} Love this!
                </p>
            }
        }
    
    */

    console.log({ items })
    return (
        <>

            <div className="image-stuff">
                {toggled ? (
                    <div className="galleryItem">
                    <img id={items.id} src={items.path} onClick={() => toggleImage()}/>
                    </div>
                ) : (
                <div className="image-container" onClick={() => toggleImage()}>
                <p>{items.description}</p>

                </div>

                
                 )}


<br></br>
                <button onClick={upVote}>Like</button>
                <p>{vote} Love It!</p>
        

            </div>




        </>
    )



}; // end of GalleryItem

export default GalleryItem


// Love it button: will console log but also count ++ and append to DOM
// People love this will count how many times someone likes it

/*


<img src={items.path} />
                <br></br>
                <button onClick={upVote}>Like</button>
                <p>{vote} Love It!</p>
                <p>
                    {items.description}
                </p>



*/
