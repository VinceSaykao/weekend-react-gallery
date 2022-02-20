// import images from '../images'

function GalleryItem({items}) {

const [liked,setLiked] = ('');

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
    


likeStatus = () => {
        if ({items.likes} === 0) {
            return 'No people love this :('
        } else ({items.likes} > 0) {
            return <p>
            {items.likes} Love this!
            </p>

    
    */

 



    console.log({items})
return (
<>


<div className="image-stuff">
<img src={items.path}/>
<br></br>
<button

>Love It!</button>
<p>
{items.description}
</p>
<p>
{items.likes} Love this!
</p>

</div>




</>
)



}; // end of GalleryItem

export default GalleryItem


// Love it button: will console log but also count ++ and append to DOM
// People love this will count how many times someone likes it
