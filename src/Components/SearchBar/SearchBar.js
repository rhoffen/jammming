import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {searchTerm: ''}
    this.state = {searchTerm: localStorage.getItem('storedTerm')}
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  search() {
    this.props.onSearch(this.state.searchTerm);
    console.log(`The search term is ${this.state.searchTerm}.`)
  }

  handleTermChange(e) {
    let term= e.target.value;
    localStorage.setItem('storedTerm', term);
    this.setState({searchTerm: term});
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.search()
    }
  }


  render() {
    return (<div className="SearchBar">
              {/*console.log(this.state.searchTerm)*/}
              <input value={this.state.searchTerm} onChange={this.handleTermChange} onKeyPress={this.handleKeyPress} placeholder="Enter A Song, Album, or Artist" />
              <a onClick={this.search}>SEARCH</a>
            </div>);
  }
}

export default SearchBar;
