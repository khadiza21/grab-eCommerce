
import './App.css';
//import Bottom from './Bottom/Bottom';

// import Spinner from './Spinner/Spinner/Spinner';
// import SpinnerWheelDecider from './Spinner/SpinnerWheelDecider/SpinnerWheelDecider';
import OrderHIstory from './component/OrderHistory/OrderHIstory';
// import BottomFooter from './Shared/BottomFooter/BottomFooter';
//import RuleDescription from './component/RuleDescription/RuleDescription';
// import PromoDes from './component/PromoDes/PromoDes';
//import About from './component/About/About';
// import OrderGrab from './component/OrderGrab/OrderGrab';
// import Dashboard from './Dashboard/Dashboard/Dashboard';
import Bottom from './Bottom/Bottom';



function App() {
  return (
    <div >
      {/* <About></About> */}
      {/* <RuleDescription></RuleDescription> */}
      {/* <PromoDes></PromoDes> */}

      {/* <OrderGrab></OrderGrab> */}
      <OrderHIstory></OrderHIstory>
      {/*  <Dashboard></Dashboard> */}
      <Bottom></Bottom>




      {/* { <Spinner></Spinner> } */}
      {/* <SpinnerWheelDecider></SpinnerWheelDecider> */}

    </div>
  );
}

export default App;
