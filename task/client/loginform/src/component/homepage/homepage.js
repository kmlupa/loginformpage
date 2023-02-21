import React from "react"
import "./homepage.css"
import NavScrollExample from "./navbar/navbar"
import Sidebar from "../sidebar/sidebar"
import {Row,Col} from 'react-bootstrap';
import Card from "../card/card";
import Card2 from '../card/card2';
import Card3 from "../card/card3";
const Homepage = ({setLoginUser}) => {
    return (
<>
<NavScrollExample handleclick={setLoginUser}/>
<div className="container-fluid bg-secondary">
<div className="row" style={{paddingTop:"8px"}}>
  <div className="col-2 col-md-3 col-lg-2"><Sidebar/></div>
  <div className="col-lg-5 col-md-4 ">
  <div className="card" style={{height:"95vh",}}>
  <div className="card-body"  >
    <div className="Row"> <Card/></div>
    <div className="Row bg-light mt-2"> <Card2/></div>
    </div>
  </div>
  </div>
  <div className="col-lg-5 col-md-4">
  <div >
  <div className="card" style={{height:"95vh"}}>
  {/* <div className="card-body bg-secondary" > */}
    <div className="Row"><Card3 abc="Trends"/> </div>
    <div className="Row mt-2"> <Card3 abc="Efficiency"/></div>
    {/* </div> */}
  </div>
</div>
  </div>
</div>
</div>




</>




//         <div classNameName="homepage">
//         <Row>
//         <Row><NavScrollExample/></Row>
//         <Row>
//         <Col>
//         <Sidebar/>
//         <h1>Hello Homepage</h1>
//         <div classNameName="button" onClick={() => setLoginUser({})} >Logout</div></Col>
//         <Col><div classNameName="card" style={{height:"80vh"}}>
//   <img src="..." classNameName="card-img-top" alt="..."/>
//   <div classNameName="card-body">
//     <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div></Col>
//         <Col>
//         <Row><div classNameName="card" style={{height:"40vh"}}>
//   <img src="..." classNameName="card-img-top" alt="..."/>
//   <div classNameName="card-body">
//     <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
// </Row>
//         <Row>
//         <div classNameName="card" style={{height:"40vh"}}>
//   <img src="..." classNameName="card-img-top" alt="..."/>
//   <div classNameName="card-body">
//     <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
//         </Row>
//         </Col>
//         </Row>
//         </Row>
//         </div>
    )
}

export default Homepage