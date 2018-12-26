import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import _ from 'underscore';
import "./SearchBox.css"
import {
  Label,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import * as actions from "../store/actions/actions";;

export class SearchBox extends Component {
  state = {
    query: '',
    searchSuggestions: [],
    showSuggestions: false
  }

componentDidUpdate(prevProps){
  if (prevProps.searchSuggestions !== this.props.searchSuggestions) {
    this.setState({searchSuggestions: this.props.searchSuggestions, showSuggestions: true});
  }
}

debounce = _.debounce(function() {
  this.props.actions.getSuggestions(this.state.query);
}, 1000);

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.debounce();
      }          
    })
  }

  handleSubmit = (selected, event) => {
    this.setState({query: selected, showSuggestions: false});
    this.props._handleSubmit(selected); // Here we are calling parent _handleSubmit function
    if(event) {
      event.preventDefault(); // to prevent to reload the page on form submit
    }
  }
  
  render() {
    const {showSuggestions, query, searchSuggestions} = this.state;
    return (
        <form className="search-form" onSubmit={(event) => {
          this.handleSubmit(query, event);
          }}>
          <Label className="search-label" for="searchInput">Search</Label>
            <input
              className="search-input"
              id="searchInput"
              name="searchInput"
              type="text "
              placeholder="Enter to Search"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
              value={query}
            />
            { showSuggestions && searchSuggestions.length > 0 && query !== '' &&
            <ListGroup className="searchSuggestions">
              {
                searchSuggestions.map((item) => {
                  return <ListGroupItem key={item.id} onClick={() => {
                    this.handleSubmit(item.title);
                  }}>{item.title}</ListGroupItem>
                })
              }
            </ListGroup>
            }
        </form>
    )
  }
}

const mapStateToProps = ({ dataFetchReducer }) => {
  return {
    searchSuggestions: dataFetchReducer.suggestions,
  };
};

const mapDispatchToProps = dispatch =>  ({
  actions: bindActionCreators(actions, dispatch),
})


export default connect( mapStateToProps, mapDispatchToProps )(SearchBox);
