import React, { Component } from "react";
import Timestamp from 'react-timestamp';
import "./SearchResults.css"

import {
  Row,
  Input,
  Pagination,
  PaginationItem, 
  PaginationLink
} from 'reactstrap';

class SearchResults extends Component {
  state = {
    searchResults: [],
    sortType: "Select Filter Type"
  }

  handlePageNoClick = (pageNo) => {
    this.props._handlePageNoClick(pageNo); // Passing page no to parent
  }
  
  onSelectSortType = (event) => {
    let sortType = event.target.value
    this.setState({sortType: sortType})
    this.props._onSelectSortType(sortType);
  }
  
  renderPagelist = () => {
    let pagelist = []
    for(let i=0; i< 5; i++) { // Need work - Here no_of_pages is taken hardcoded considering no of records, ideally this should be dynamic.
      pagelist.push(
        <PaginationItem key={i+1}>
          <PaginationLink href="#" onClick={ () => {
              this.handlePageNoClick(i+1);
            }}>
            {i+1}
          </PaginationLink>
        </PaginationItem>
      )
    }
    return pagelist;
  }
  
  render() {
    const { searchResultData, pagination } = this.props
    const { sortType } = this.state
    return (
      <div> 
        { searchResultData && searchResultData.length > 0 && 
        <div>
            <Input
              id="sortType"
              className="sortSelect"
              type="select"
              name="sortType"
              onChange={this.onSelectSortType}
              value={sortType}
              >
              <option value='Select Filter Type' key='0'>Select Filter Type</option>
              <option value='title' key='1'>Title</option>
              <option value='description' key='2'>Description</option>
              <option value='timestamp' key='3'>Timestamp</option>
            </Input>          
            {searchResultData.map((item) => {
              return (  
                <div className="resultList" key={item.id}>
                  <div className="textAlignment">{item.title}</div>
                    <div>
                    {item.description}
                    </div>
                  <div className="timestamp">
                    <Timestamp time={item.timestamp} format='full' includeDay />
                  </div>
                </div>
              )
            })}
           <Row> 
          <Pagination aria-label="Search result Page navigation">
          <PaginationItem>
            <PaginationLink href="#" onClick={() => {
              if(pagination.currentPage > 0){
                this.handlePageNoClick(pagination.currentPage-1); // Need to handle disabled functionality for prev/ next links
              }
            }} previous/>
          </PaginationItem>
          {this.renderPagelist()}
          <PaginationItem>
            <PaginationLink href="#" onClick={() => {
              if(pagination.currentPage <= 5){
                this.handlePageNoClick(pagination.currentPage+1); // Need to handle disabled functionality for prev/ next links
              }
            }} next />
          </PaginationItem>
          </Pagination>
          </Row>
        </div>
        }
      </div>
    );
  }
}

export default SearchResults;
