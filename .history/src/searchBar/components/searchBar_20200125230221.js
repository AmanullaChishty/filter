import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/fetchData';
import { search } from '../actions/searchAction';
import { getData, getSearchData } from '../selectors/searchSelectors';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, Card, CardContent,CardActions, Input, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import 'date-fns';




class SearchBar extends Component {

  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this)
    this.state = {
      ccy:'',
      
    }
  }

  componentDidMount() {
    const { fetchAllData } = this.props;
    fetchAllData();
    }

  

  handleChange = event => {
    this.setState({ccy:event.target.value})
  };
  render() {
    // const {searchData, value,content} = this.props;
    const {ccy} = this.state

    return (
      <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        {/* <input
          className="form-control"
          placeholder = "Procurar Trabalho"
          onChange={(e) => searchData(e.target.value)}
         />
    <h3>{value}</h3> */}
    <Card style={{maxWidth:675,width:'100%'}}>
      <CardContent>
            <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '2em' }}>
              <span style={{ fontSize: '1.3em', fontWeight: 'bold', marginBottom: '-1em' }}>Select Currency</span>
              <FormControl style={{ width: '12em', marginTop: '1em' }} >

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

            <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '2em' }}>
              <span style={{ fontSize: '1.3em', fontWeight: 'bold', marginBottom: '-1em' }}>Enter Amount Range</span>
              <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <FormControl style={{ width: '12em', marginTop: '1em' }} >

                  <InputLabel id="ccy">
                    Amount Above
                  </InputLabel>
                  <Input type='number' />
                </FormControl>
                <FormControl style={{ width: '12em', marginTop: '1em', marginLeft: '1em' }} >
                  <InputLabel id="ccy">
                    Amount Below
                  </InputLabel>
                  <Input type='number' />
                </FormControl>
              </Grid>
            </Grid>

            <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '2em' }}>
              <span style={{ fontSize: '1.3em', fontWeight: 'bold', marginBottom: '-.2em' }}>Enter Time Duration</span>
              <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <FormControl style={{ width: '12em', marginTop: '1em' }} >
                  <Fragment>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="Start Date"
                        clearable
                        // value={inputProps.value}
                        placeholder="Select Start Date"
                        // label={labelText}
                        // onChange={e => inputProps.onChange(e)}
                        //onChange={date => handleChange(date)}

                        format="dd/MM/yyyy"
                      />
                    </MuiPickersUtilsProvider>
                  </Fragment>
                </FormControl>
                <FormControl style={{ width: '12em', marginTop: '1em', marginLeft: '1em' }} >
                <Fragment>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="End Date"
                        clearable
                        // value={inputProps.value}
                        placeholder="Select End Date"
                        // label={labelText}
                        // onChange={e => inputProps.onChange(e)}
                        //onChange={date => handleChange(date)}

                        format="dd/MM/yyyy"
                      />
                    </MuiPickersUtilsProvider>
                  </Fragment>
                </FormControl>
              </Grid>
            </Grid>

      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" style={{float:'right'}}>
          Search
        </Button>
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