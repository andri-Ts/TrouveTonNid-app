import React from 'react';
import { listData } from '../../lib/dummydata';
import './listPage.scss';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import { useLoaderData } from 'react-router-dom';

function ListPage() {
  const postList = useLoaderData(); // fait appel au loader qu'on a créer et qu'on a mis dans Route(app.jsx)
  console.log('postList: ', postList);
  return (
    <section className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {postList.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map places={postList} />
      </div>
    </section>
  );
}

export default ListPage;
