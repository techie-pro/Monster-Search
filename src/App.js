import { Component } from 'react';

import CardList from './components/cardList/CardList';
import SearchComponent from './components/searchComponents/SearchComponent';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      serachField: '',
    };
  }

  componentDidMount() {
    console.log('Component Mounted');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  render() {
    const searchHandler = (e) => {
      console.log(e.target.value);
      var serachField = e.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { serachField };
      });
    };

    const filteredItems = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.serachField);
    });
    return (
      <div className='App'>
        <SearchComponent onChangeHandler={searchHandler} />
        <CardList list={filteredItems} />
      </div>
    );
  }
}

export default App;
