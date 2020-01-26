import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/fetchData';
import { search } from '../actions/searchAction';
import { getData, getSearchData } from '../selectors/searchSelectors';

class SearchBar extends Component {

  componentDidMount() {
    const { fetchAllData,content } = this.props;
    fetchAllData();
    console.log('serach bar content',content)
}
  render() {
    const {searchData, value} = this.props;

    return (
      <div>
        <input
          className="form-control"
          placeholder = "Procurar Trabalho"
          onChange={(e) => searchData(e.target.value)}
         />
    <h3>{value}</h3>
    </div>
    );
  }
} 

// function mapStateToProps({works}) {
//   return {value: works.value};
// }

const mapStateToProps=state=> {
    console.log('state',state)
    return {
        value: getSearchData(state),
        content:getData(state)
        };
  }

const mapDispatchToProps = dispatch => bindActionCreators({
    searchData: search,
    fetchAllData:fetchData,
}, dispatch)

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({search}, dispatch);
// }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);