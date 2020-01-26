import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { fetchData } from '../actions/fetchData';
import { search } from '../actions/searchAction';
import { getData, getSearchData } from '../selectors/searchSelectors';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, Card, CardContent,CardActions, Input, Button, InputAdornment } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import 'date-fns';


let ccy=''

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this)
    this.setLowerLimit=this.setLowerLimit.bind(this)
    this.setUpperLimit=this.setUpperLimit.bind(this)
    this.setStartDate=this.setStartDate.bind(this)
    this.setEndDate=this.setEndDate.bind(this)
    this.submitSearch=this.submitSearch.bind(this)
    this.state = {
      ccy:'',
      lowerLimit:'',
      upperLimit:'',
      startDate:null,
      endDate:null
      
    }
  }

  componentDidMount() {
    // const { fetchAllData } = this.props;
    // fetchAllData();
    }

  

  handleChange(event){
    let val = event.target.value
      this.setState({ccy:val})
  };

  setLowerLimit(event){
    let val = event.target.value
    this.setState({lowerLimit:val});
  }

  setUpperLimit(event){
    let val = event.target.value
    this.setState({upperLimit:val})

  }
  setStartDate(event){
    this.setState({startDate:event})

  }

  setEndDate(event){
    this.setState({endDate:event})

  }

  submitSearch(){
    console.log('state',this.state)
  }

  
  render() {
    // const {searchData, value,content} = this.props;
    const sectionGrid={ display: 'flex', justifyContent: 'end', alignItems: 'end', flexDirection: 'column', marginBottom: '2em' }
    const sectionLabel = { fontSize: '1.3em', fontWeight: 'bold', marginBottom: '-.2em' }
    const innerSection={ display: 'flex', justifyContent: 'center', alignItems: 'center', }
    const formControlStyle={ width: '12em', marginTop: '1em' }
    const formControlStyleLeft={ width: '12em', marginTop: '1em', marginLeft: '1em' }
    const {ccy,lowerLimit,upperLimit,startDate,endDate} = this.state

    return (
      <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        {/* <input
          className="form-control"
          placeholder = "Procurar Trabalho"
          onChange={(e) => searchData(e.target.value)}
         />
    <h3>{value}</h3> */}
    <Card style={{maxWidth:675,width:'50%',padding:'2em'}}>
      <CardContent>
            <Grid style={sectionGrid}>
              <span style={sectionLabel}>Select Currency</span>
              <FormControl style={formControlStyle} >

                <InputLabel id="ccy">
                  Ccy
                </InputLabel>
                <Select
                  labelId="ccy"
                  id="simple-select"
                  value={ccy}
                  onChange={this.handleChange}>
                  <MenuItem value={'USD'}>USD</MenuItem>
                  <MenuItem value={'INR'}>INR</MenuItem>
                  <MenuItem value={'JPY'}>JPY</MenuItem>
                  <MenuItem value={'RYD'}>RYD</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid style={sectionGrid}>
              <span style={sectionLabel}>Enter Amount Range</span>
              <Grid style={innerSection}>
                <FormControl style={formControlStyle} >

                  <InputLabel id="ccy">
                    Amount Above
                  </InputLabel>
                  <Input 
                  type='number' 
                  value={lowerLimit} 
                  startAdornment={ccy!=''?(<InputAdornment position="start">{ccy}</InputAdornment>):null}
                  onChange={this.setLowerLimit}/>
                </FormControl>
                <FormControl style={formControlStyleLeft} >
                  <InputLabel id="ccy">
                    Amount Below
                  </InputLabel>
                  <Input 
                  type='number' 
                  value={upperLimit} 
                  startAdornment={ccy!=''?(<InputAdornment position="start">{ccy}</InputAdornment>):null}
                  onChange={this.setUpperLimit} />
                </FormControl>
              </Grid>
            </Grid>

            <Grid style={sectionGrid}>
              <span style={sectionLabel}>Enter Time Duration</span>
              <Grid style={innerSection}>
                <FormControl style={formControlStyle} >
                  <Fragment>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="Start Date"
                        clearable
                        value={startDate}
                        placeholder="Select Start Date"
                        onChange={this.setStartDate}
                        format="dd/MM/yyyy"
                      />
                    </MuiPickersUtilsProvider>
                  </Fragment>
                </FormControl>
                <FormControl style={formControlStyleLeft} >
                <Fragment>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        label="End Date"
                        clearable
                        value={endDate}
                        placeholder="End Date"
                        onChange={this.setEndDate}
                        format="dd/MM/yyyy"
                      />
                    </MuiPickersUtilsProvider>
                  </Fragment>
                </FormControl>
              </Grid>
            </Grid>

      </CardContent>
      <CardActions style={{float:'right'}}>
        <Button variant="contained" color="primary" onClick={this.submitSearch}>
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
    // fetchAllData:fetchData,
}, dispatch)

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({search}, dispatch);
// }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);