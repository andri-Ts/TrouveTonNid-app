import React, { useState } from 'react';
import './newPostPage.scss';
import apiRequest from '../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';

function NewPostPage() {
  const [errorMsg, setErrorMsg] = useState('');
  const [photos, setPhotos] = useState(['']); // pour stocker tab de lien de photos
  const navigate = useNavigate();

  const handlePhotoChange = (index, value) => {
    const updated = [...photos];
    updated[index] = value;
    setPhotos(updated);
  };

  const addPhotoField = () => {
    setPhotos([...photos, '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData); // permet de récupérer tous les entrées du formulaire

    // Envoyer les data au backend
    try {
      const newPostRes = await apiRequest.post('/posts', {
        title: inputs.title,
        price: parseInt(inputs.price),
        photos: photos, // photos de useState
        address: inputs.address,
        city: inputs.city,
        bedroom: parseInt(inputs.bedroom),
        bathroom: parseInt(inputs.bathroom),
        latitude: inputs.latitude,
        longitude: inputs.longitude,
        transaction: inputs.transaction,
        property: inputs.property,
        postDetail: {
          desc: inputs.desc,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });

      const id = newPostRes?.data?.data?._id; // banckend renvoie data.data
      if (!id) {
        console.error('ID manquant :', newPostRes.data);
        setErrorMsg('Post ID not found');
      }
      // console.log('post: ', newPostRes);
      navigate('/single/' + id);
      // navigate('/');
    } catch (error) {
      console.error(error);
      setErrorMsg(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <section className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <textarea
                name="desc"
                placeholder="Ecrivez votre descirption..."
                rows={5}
              />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Transaction Type</label>
              <select name="transaction">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">bus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <div className="item">
              <label>Photos</label>
              {photos.map((photo, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="https://..."
                  value={photo}
                  // Chaque input représente une image.
                  // On met à jour uniquement la valeur de l'image à son index dans le tableau.
                  onChange={(e) => handlePhotoChange(index, e.target.value)}
                />
              ))}
              <button type="button" onClick={addPhotoField}>
                Add photo
              </button>
            </div>
            <div className="item">
              <button className="sendButton">Add</button>
            </div>
            {errorMsg && <span>{errorMsg}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer"></div>
    </section>
  );
}

export default NewPostPage;
