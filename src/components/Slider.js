import { Carousel } from 'react-responsive-carousel';
const images = [{id:1,img:"/images/slider2.png"},
                {id:2,img:"/images/slider3.png"},
                {id:3,img:"/images/slider4.png"},
                {id:4,img:"/images/slider5.png"},
                {id:5,img:"/images/slider6.jpg"},
                {id:6,img:"/images/slider7.jpg"},]
                // {id:7,img:"/images/slider2.png"}]
function Slider() {

    return (
      <div>

        <Carousel showThumbs={false} autoPlay autoFocus={true} infiniteLoop className="carousel">
        {images.map((image)=>
                <div className="img1" key={image.id}>
                    <img src={image.img}></img>
                </div>
           
        )}
        </Carousel>
        </div>
    )
}

export default Slider

