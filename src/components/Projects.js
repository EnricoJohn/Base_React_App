import React, { Component } from 'react';
import { fetchRepos } from '../services/repo-api';
const ReposList = props => {
  return (<ul>
    {props.repos.map(repo => (
      <li key={repo.id}>{repo.name}</li>
    ))}
  </ul>)
}

export class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      username: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  //
  changeHandler(ev) {
    this.setState({ username: ev.target.value })
  }

  //
  submitHandler(ev) {
    ev.preventDefault()
    fetchRepos(this.state.username).then(res => this.setState({ repos: res.data }))
  }

  //
  render() {
    return (
      <div>
        <h1>Repos</h1>
        <form action="#" onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            style={{width: '250px'}}
            type="search"
            placeholder="Informe usuário e tecle ENTER"/>
        </form>
        <ReposList repos={this.state.repos}></ReposList>
      </div>
    )
  }
}



export default Work
