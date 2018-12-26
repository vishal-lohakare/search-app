import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import "./App.css"
import { Container } from 'reactstrap';

import * as actions from "../store/actions/actions";
import SearchResults from "../components/SearchResults";
import SearchBox from '../components/SearchBox';


class Search extends Component {
  state = {
    query: '',
    results: [],
    pagination: {
      currentPage: 1,
    }
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.searchResultData !== this.props.searchResultData) {
      this.setState({searchResultData: this.props.searchResultData});
    }      
  }

  handleSubmit = (searchQuery) => {
    this.setState({query: searchQuery});
    this.props.actions.getSearchResult(' ', '', 1); // getSearchResult() should hvae searchQuery as a first parameter but now we are feching all data to show pagination
  }
  
  handlePageNoClick = (pageNo) => {
    this.props.actions.getSearchResult(' ', '', pageNo);
    this.setState({pagination: {currentPage: pageNo}})
  }
  onSelectSortType = (sortType) => {
    this.props.actions.getSearchResult(' ', sortType, this.state.pagination.currentPage);
  }
  
  render() {
    return (
      <Container className="searchContainer">
        {<SearchBox _handleSubmit={this.handleSubmit}/>}
        {<SearchResults searchResultData={this.props.searchResultData} 
          pagination={this.state.pagination} 
          _handlePageNoClick={this.handlePageNoClick}
          _onSelectSortType={this.onSelectSortType}/>
        }
      </Container>
    )
  }
}

const mapStateToProps = ({ dataFetchReducer }) => {
  return {
    searchResultData: dataFetchReducer.searchResultData,
  };
};

const mapDispatchToProps = dispatch =>  ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect( mapStateToProps, mapDispatchToProps )(Search);
