import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div className="card card-block">
        <h4 className="card-title">
          {user.name}
        </h4>
        <p className="card-text">
          {user.company.name}
        </p>
        <a className="btn btn-primary" href={user.website}>
          Website
        </a>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps(state, actions) {
  return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);
