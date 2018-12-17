import React from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';

const Page = (props) => {
  return (
    <div>
      <h1>Redux Example</h1>
      <div>Hello: {props.user.name}</div>
      <Feed />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(Page);