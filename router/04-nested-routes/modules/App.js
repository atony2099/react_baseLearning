import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="about/this_is_about_params">About</Link></li>
          <li><Link to="/repos/this_repo/scond_paras">Repos</Link></li>
        </ul>
      </div>
    )
  }
})
