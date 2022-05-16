import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import macbook from "./macbook.png";
import iphone from "./iphone.png";
import iphone2 from "./iphone2.png";
import iwatch from "./iwatch.png";
import appletab from "./appletab.png";
import iphoneside from "./iphoneside.png";
const Home = () => {
  return (
    <div className="content">
      <div className="words">
        <div className="home">
          <h1>Portable Bluetooth Speakers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            eligendi reprehenderit voluptatum deleniti dolore esse nihil
            asperiores quae debitis nesciunt nulla repudiandae? Blanditiis
            nesciunt tempora, vitae minima sequi adipisci ut.
          </p>
          <div className="button">
            <div className="purchase">
              <a href="/purchase">
                <button>PURCHASE </button>
              </a>
            </div>

            <div className="try">
              <a href="/try">
                <button>TRY</button>
              </a>
            </div>
          </div>
        </div>
        <div className="help">
          <FaUserCircle size={30} className="circle" />
          <button>
            Hi, Can I Help You?{" "}
            <FaArrowAltCircleRight size={20} className="arrow" />
          </button>
        </div>
      </div>
      <div className="pics">
        <div className="one">
          <img className="pc" src={macbook} alt="macbook" />
          <img className="phone" src={iphone} alt="iphone" />
          <img className="watch" src={iwatch} alt="iwatch" />
        </div>
        <div className="side">
          <img className="phoneside" src={iphoneside} alt="iphoneside" />
        </div>
        <div className="two">
          <img className="phone2" src={iphone2} alt="iphone2" />
          <img className="tab" src={appletab} alt="appletab" />
        </div>
      </div>
    </div>
  );
};

export default Home;
