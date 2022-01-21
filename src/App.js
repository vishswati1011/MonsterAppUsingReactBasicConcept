import React from 'react';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component'
import { CardList } from './components/card-list/card-list.component'
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: ''
    };
    // this.handleChange= this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e =>{
    this.setState({ searchFeild: e.target.value })
  }
  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMoneters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );
    return (
      <div className="App">
        {/* <input type='search'
          onChange={e => this.setState({ searchFeild: e.target.value })}
          placeholder='search monster' /> */}
          <h1>MONSTER ROLODEX</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMoneters}>
        </CardList>
      </div>
    );
  }
}

export default App;
