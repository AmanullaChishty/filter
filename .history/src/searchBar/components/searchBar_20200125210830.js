import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/fetchData';
import { search } from '../actions/searchAction';
import { getData, getSearchData } from '../selectors/searchSelectors';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this)
    this.state = {
      age:'',
      inputLabel:null
    }
  }

  componentDidMount() {
    const { fetchAllData } = this.props;
    fetchAllData();
    }

  

  handleChange = event => {
    this.setState({age:event.target.value})
  };
  render() {
    const {searchData, value,content} = this.props;
    const {age,inputLabel,handleChange} = this.state

    return (
      <div>

    <FormControl variant="outlined" style={{width:'12em',marginTop:'1em'}} >
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
         
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        {console.log('serach bar content',content)}
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