// src/components/PlacesSearch.js
import React, { useState } from 'react';
import { Input, List } from 'antd';
import { connect } from 'react-redux';
import { fetchPlaces } from '../store/actions';

const PlacesSearch = ({ fetchPlaces, places }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value) => {
    setSearchText(value);
    fetchPlaces(value);
  };

  return (
    <div>
      <Input.Search
        placeholder="Search for places"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <List
        bordered
        dataSource={places}
        renderItem={(item) => <List.Item>{item.description}</List.Item>}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  places: state.places,
});

export default connect(mapStateToProps, { fetchPlaces })(PlacesSearch);
