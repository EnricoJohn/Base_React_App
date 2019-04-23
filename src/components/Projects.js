import React, { Component } from 'react';
import axios from 'axios';



const ReposList = props => {
  return (<ul>
    {fetchRepos.map(repo => (
      <li key={repo.id}>{repo.name}</li>
    ))}
  </ul>)
}

export class Work extends Component {

  render() {
    return (
      <div>
        <h1>Repositorios</h1>
        <ReposList></ReposList>
      </div>
    )
  }
}



export default Work


/*        <form action="#" onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            style={{width: '250px'}}
            type="search"
            placeholder="Informe usuário e tecle ENTER"/>
        </form>
        

    axios.all(data.map(function(){
      return axios.get('https://api.github.com/users/EnricoJohn/repos')
        .then(function (response) {
          console.log(response.data.name)
        }) 
    }));         
        
*/