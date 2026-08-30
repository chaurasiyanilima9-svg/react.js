import './App.css'
// import Counter from './Components/Counter';
// import StateComp from './Components/StateComp';
// import PropComp from './Components/PropComp';
// import StateToggle from './Components/StateToggle';
// import ResetCopm from './Components/ResetComp';
// import ToggleBtnComp from './TuggleBtnComp';
// import Routing from './Routes/Routing';
// import NavbarCom from './Components/NavbarCom';

import slider from "./assets/image/slider.png";
import slider2 from "./assets/image/slider2.png";
import Slider1 from "./assets/image/Slider1.png";
import slider3 from "./assets/image/slider3.png";

import { Navigation } from './Components/Navigation';

function App() {

    const slidesData = [
      {
        image: slider,
        alt: "first Slide"
      },
      {
        image: slider2,
        alt: "second Slide"
      },
      {
        image: Slider1,
        alt: "third Slide"
      },
      {
        image: slider3,
        alt: "four Slide"
      }
    ];
  return (
    <>
      {/* <StateComp/> */}
      {/* <StateToggle/> */}
      {/* <ResetCopm/> */}
      {/* <ToggleBtnComp/> */}
      {/* <ResetCopm start={10} /> */}
      {/* <Counter/> */}
      

      {/* <div className="container text-center mt-5">

        <h1>Conditional Styling Based on Props</h1>

        <PropComp Status="success" />
        <br />

        <PropComp Status="error" />
        <br />

        <PropComp Status="warning" />
      </div> */}

      {/* <NavbarCom/> */}
      {/* <Routing/> */}

      <Navigation
          slides = {slidesData}
          autoplay={true}
          interval={3000}
      
      />




    </>
      
       
  );
}

export default App;
