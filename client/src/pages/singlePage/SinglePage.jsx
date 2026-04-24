import React from 'react';
import './singlePage.scss';
import Slider from '../../components/slider/Slider';
import { singlePostData, userData } from '../../lib/dummydata';
import Map from '../../components/map/Map';
import { useLoaderData } from 'react-router-dom';

function SinglePage() {
  const dataPost = useLoaderData(); // charger les data du backend (de react router dom)
  const user = dataPost.user;
  const postDetail = dataPost.postDetail;
  // console.log('dataPost', dataPost);

  return (
    <main className="singlePage">
      <section className="details">
        <div className="wrapper">
          <Slider images={dataPost.photos} />
          <article className="infos">
            <header>
              <div className="postInfo">
                <h1>{dataPost.title}</h1>
                <p className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{dataPost.address}</span>
                </p>
                <p className="price">$ {dataPost.price}</p>
              </div>
              <div className="userInfo">
                <img src={user.avatar} alt="pdp" />
                <p>{user.username}</p>
              </div>
            </header>
            <p className="desc">{dataPost.postDetail.desc}</p>
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
                <h5>Utilities</h5>
                {postDetail.utilities === 'owner' ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant i responsible</p>
                )}
              </div>
            </div>
            <div className="item">
              <img src="/pet.png" alt="pet" />
              <div className="info">
                <h5>Pet Policy</h5>
                {postDetail.pet === 'allowed' ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="item">
              <img src="/fee.png" alt="fee" />
              <div className="info">
                <h5>Income Policy</h5>
                <p>{postDetail.income}</p>
              </div>
            </div>
          </div>
          <h4 className="general">Room Sizes</h4>
          <div className="sizes">
            <div className="item">
              <img src="/size.png" alt="size" />
              <span>{postDetail.size} sqft</span>
            </div>
            <div className="item">
              <img src="/bed.png" alt="bed" />
              <span>{postDetail.bedroom} sqft</span>
            </div>
            <div className="item">
              <img src="/bath.png" alt="bath" />
              <span>{postDetail.bathroom} sqft</span>
            </div>
          </div>
          <h4 className="general">Nearby Places</h4>
          <div className="listHorizontal">
            <div className="item">
              <img src="/school.png" alt="school" />
              <div className="info">
                <h5>School</h5>
                <p>
                  {postDetail.school > 999
                    ? postDetail.school / 1000 + 'km'
                    : postDetail.school + 'm'}{' '}
                  away
                </p>
              </div>
            </div>
            <div className="item">
              <img src="/bed.png" alt="bed" />
              <div className="info">
                <h5>Bus Stop</h5>
                <p>{postDetail.bus}m away</p>
              </div>
            </div>
            <div className="item">
              <img src="/bath.png" alt="bath" />
              <div className="info">
                <h5>Restaurant</h5>
                <p>{postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <h4 className="general">Location</h4>
          <div className="mapContainer">
            {/* [] permet à map de recevoir un tab de singlePostData */}
            <Map places={[dataPost]} />
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
