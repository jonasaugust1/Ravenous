import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
                      term: '',
                      location: '',
                      sortBy: 'best_match'
                    };

        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

        this.sortByOptions = {
                            "Best Match": 'best_match',
                            "Highest Rated":  'rating',
                            "Most Reviewed": 'review_count'
                            }
    }
    
    // Return the current CSS class for a sorting option
    getSortByClass(sortByOption) {
       const state = this.state.sortBy === sortByOption ? 'active' : ''
       return state
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption})
    }

    handleTermChange(event) {
        this.setState({term: event.target.value})
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value})
    }

    handleSearch(event) {
        event.preventDefault()
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions)
                .map(key => <li key={key}
                             className={this.getSortByClass(key)}
                             onClick={this.handleSortByChange.bind(this, key)}> 
                                {key}
                            </li>)
    }

    

    render() {

        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a href='#' onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;
