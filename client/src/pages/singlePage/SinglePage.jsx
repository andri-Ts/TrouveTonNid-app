import React from 'react';
import './singlePage.scss';
import Slider from '../../components/slider/Slider';
import { singlePostData, userData } from '../../lib/dummydata';
import Map from '../../components/map/Map';

function SinglePage() {
  return (
    <main className="singlePage">
      <section className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <article className="infos">
            <header>
              <div className="postInfo">
                <h1>{singlePostData.title}</h1>
                <p className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{singlePostData.address}</span>
                </p>
                <p className="price">$ {singlePostData.price}</p>
              </div>
              <div className="userInfo">
                <img src={userData.img} alt="pdp" />
                <p>{userData.name}</p>
              </div>
            </header>
            <p className="desc">{singlePostData.description}</p>
          </article>
        </div>
      </section>
      <section className="features">
        <div className="wrapper">
          <h4 className="general">General</h4>
          <div className="listVertical">
            <div className="item">
              <img src="/utility.png" alt="utility" />
              <div className="info">
                <h5>Utility</h5>
                <p>Renter is possible</p>
              </div>
            </div>
            <div className="item">
              <img src="/pet.png" alt="pet" />
              <div className="info">
                <h5>Pet Policy</h5>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className="item">
              <img src="/fee.png" alt="fee" />
              <div className="info">
                <h5>Property Fees</h5>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <h4 className="general">Room Sizes</h4>
          <div className="sizes">
            <div className="item">
              <img src="/size.png" alt="size" />
              <span>80sqm (861sqfl)</span>
            </div>
            <div className="item">
              <img src="/bed.png" alt="bed" />
              <span>2 bedroom</span>
            </div>
            <div className="item">
              <img src="/bath.png" alt="bath" />
              <span>1 bathroom</span>
            </div>
          </div>
          <h4 className="general">Nearby Places</h4>
          <div className="listHorizontal">
            <div className="item">
              <img src="/school.png" alt="school" />
              <div className="info">
                <h5>School</h5>
                <p>250m away</p>
              </div>
            </div>
            <div className="item">
              <img src="/bed.png" alt="bed" />
              <div className="info">
                <h5>Bus Stop</h5>
                <p>100m away</p>
              </div>
            </div>
            <div className="item">
              <img src="/bath.png" alt="bath" />
              <div className="info">
                <h5>Restaurant</h5>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <h4 className="general">Location</h4>
          <div className="mapContainer">
            {/* [] permet à map de recevoir un tab de singlePostData */}
            <Map places={[singlePostData]} />
          </div>
          <footer className="buttons">
            <button>
              <img src="/chat.png" alt="chat" />
              <span>Save a Message</span>
            </button>
            <button>
              <img src="/save.png" alt="save" />
              <span>Save the Place</span>
            </button>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default SinglePage;
