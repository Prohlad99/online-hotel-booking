import './App.css';
import FirstPage from './home';
import './home.css';

import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
// import "./styles.css";

import * as img from '../../Utils/BrowsTypeData';
// import Glamping from './image/Glamping.png';
import useFetch from './../../Hooks/useFetch';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
  { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false },
  { width: 800, itemsToShow: 4, itemsToScroll: 1, pagination: false }
];

function MiddleSection() {
  const { data, loading, error } = useFetch("/hotels/countByType");
  console.log(data)
console.log(img)
  return (
    <div className="App">
      <FirstPage />
      <div className="corosel rec.rec-arrow:hover">
        <h2 className="browsH2">Browse By Property Type</h2>
        <Carousel breakPoints={breakPoints} pagination={false} >
        
        {data?.map((i) => (
            <Item>
              <div className="divimg">
                {
                  i?.type === "hotel"? <img className="browsimg" src='https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg' alt="Hotels" /> : i?.type === "apartments"?<img className="browsimg" src='https://s3-us-west-2.amazonaws.com/cornerstone303-production/WP%20Media%20Folder%20-%20cornerstone-apartments/wp-content/uploads/DSC5404-1_edit-1-484x314.jpg' alt="Hotels" /> : i?.type==="resorts"?<img className="browsimg" src='https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/16:9/w_2580,c_limit/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg' alt="Hotels" /> :  i?.type==="villas"?<img className="browsimg" src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/415304940.jpg?k=7446785620db62901eca0c847ba71dab1097fb9d5c4b614234b7909fd78d7f71&o=&hp=1' alt="Hotels" />:i?.type==="cabins"?<img className="browsimg" src='https://l.icdbcdn.com/oh/60907f50-c4d6-4044-9422-b536a7fdabfa.jpg?w=2080' alt="Hotels" />:null
                }
              </div>
              <div className="diver">
                <h4 className="subhead">{i.type}</h4>
                <p className="bbrowssub">{`${i.count } ${i.type}`}</p>
              </div>
            </Item>
            ))}
          {/* <Item>
            <div className="divimg">
              <img className="browsimg" src={Hotels} alt="Hotels" />
            </div>
            <div className="diver">
              <h4 className="subhead">Hotels</h4>
              <p className="bbrowssub">802,405 hotels</p>
            </div>


          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Appartment} alt="Appartment" />
            </div>
            <div className="diver">
              <h4 className="subhead">Appartment</h4>
              <p className="bbrowssub">807,884 apartments</p>
            </div>
          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Resort} alt="Resort" />
            </div>
            <div className="diver">
              <h4 className="subhead">Resort</h4>
              <p className="bbrowssub">17,482 resorts</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Villas} alt="Villas" />
            </div>
            <div className="diver">
              <h4 className="subhead">Villas</h4>
              <p className="bbrowssub">406,281 villas</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Cabins} alt="Cabins" />
            </div>
            <div className="diver">
              <h4 className="subhead">Cabins</h4>
              <p className="bbrowssub">31,734 cabins</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Cottages} alt="Cottages" />
            </div>
            <div className="diver">
              <h4 className="subhead">Cottages</h4>
              <p className="bbrowssub">142,790 cottages</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Serviced_appartment} alt="Serviced_appartment" />
            </div>
            <div className="diver">
              <h4 className="subhead">Serviced Appartment</h4>
              <p className="bbrowssub">33,743 serviced apartments</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Holidayhomes} alt="Holidayhomes" />
            </div>
            <div className="diver">
              <h4 className="subhead">Holidayhomes</h4>
              <p className="bbrowssub">406,281 holiday homes</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Guesthomes} alt="Guesthomes" />
            </div>
            <div className="diver">
              <h4 className="subhead">Guesthomes</h4>
              <p className="bbrowssub"></p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={hostels} alt="Hostels" />
            </div>
            <div className="diver">
              <h4 className="subhead">hostels</h4>
              <p className="bbrowssub">115,537 guest houses</p>
            </div>

          </Item> */}

        </Carousel>
      </div>

      <div >


      </div>

    </div>
  );
}


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export { MiddleSection };
