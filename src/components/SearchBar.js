import React, { Component } from "react";
import FilterResults from 'react-filter-search';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            value: ''
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/restaurants')
          .then(response => response.json())
          .then(json => this.setState({ data: json }));
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ value });
    };

    render() {
        const { data, value } = this.state;
        return (
          <div>
            <input type="text" value={value} onChange={this.handleChange} />
            <FilterResults
              value={value}
              data={data}
              renderResults={results => (
                <div>
                  {results.map(el => (
                    <div>
                      {console.log({el})}
                      <span><a href={`/restaurant/${el.id}`}>{el.name}</a></span> - <span>{el.location}</span> - <span>{el.cuisine}</span>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
        );
    }
}

export default SearchBar;