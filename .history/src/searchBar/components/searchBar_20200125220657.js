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
import { Grid, Card, CardContent,CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth:300,
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this)
    this.classes = this.classes.bind(this)
    this.state = {
      ccy:'',
      
    }
  }

  componentDidMount() {
    const { fetchAllData } = this.props;
    fetchAllData();
    }
    classes(){
      useStyles()
    }

  

  handleChange = event => {
    this.setState({ccy:event.target.value})
  };
  render() {
    // const {searchData, value,content} = this.props;
    const {ccy} = this.state

    return (
      <Grid>
        {/* <input
          className="form-control"
          placeholder = "Procurar Trabalho"
          onChange={(e) => searchData(e.target.value)}
         />
    <h3>{value}</h3> */}
    <Card className={this.classes.card}>
      <CardContent>
    <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <span style={{fontSize:'1.3em',fontWeight:'bold',marginBottom:'-1em'}}>Select Currency</span>
    <FormControl style={{width:'12em',marginTop:'1em'}} >
      
        <InputLabel id="ccy">
          Ccy
        </InputLabel>
        <Select
          labelId="ccy"
          id="demo-simple-select-outlined"
          value={ccy}
          onChange={this.handleChange}
         >
        
          <MenuItem value={10}>USD</MenuItem>
          <MenuItem value={20}>INR</MenuItem>
          <MenuItem value={30}>JPY</MenuItem>
          <MenuItem value={30}>RYD</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </CardContent>
      <CardActions>

      </CardActions>
      </Card>
    </Grid>
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