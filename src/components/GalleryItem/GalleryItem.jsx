// import images from '../images'

function GalleryItem(path,description,likes) {
/*
    const handleLike = () => {
        console.log('You Liked!');
    axios
        .put('/like')
        .then((result) => {
            console.log('Updated Like');
        })
        .catch((error) {
            console.log('error in put', error);
        })

    }; // end of handleLike
    */

return (
<>


<div className="image-stuff">
<img src="images/goat_small.jpg"/>
<br></br>
<button>Love It!</button>
<p>
    4 People Love This!
</p>
</div>


<p>

</p>



</>




)



}; // end of GalleryItem

export default GalleryItem


// Love it button: will console log but also count ++ and append to DOM
// People love this will count how many times someone likes it
