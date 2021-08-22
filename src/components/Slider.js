import { Carousel } from 'react-responsive-carousel';

function Slider() {
    return (
      <div>
        <Carousel autoPlay autoFocus={true} infiniteLoop className="carousel">
        <div className="img1">
            <img alt="" src="https://cdn.dribbble.com/users/23569/screenshots/15511323/media/9f038b5d47ce1b67b690f3d61530e867.jpg?compress=1&resize=800x600" />
            <h1 className="displayimg1">Our styles Your Choice</h1>
        </div>
        <div>
            <img alt="" src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
            <p className="legend">Legend 3</p>
        </div>
        </Carousel>
        </div>
    )
}

export default Slider

