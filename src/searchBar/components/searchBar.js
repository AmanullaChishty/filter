import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/fetchData';
import { search } from '../actions/searchAction';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, Card, CardContent,CardActions, Input, Button, InputAdornment } from '@material-ui/core';
import DatePicker from '../../atoms/datePicker'


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
      endDate:null,
      storeStartDate:null,
      storeEndDate:null
      
    }
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
    let val = Math.floor(event.getTime()/1000)
    this.setState({storeStartDate:val})
    this.setState({startDate:event})

  }

  setEndDate(event){
    let val = Math.floor(event.getTime()/1000)
    this.setState({storeEndDate:val})
    this.setState({endDate:event})

  }

  submitSearch(){
    const { fetchAllData,searchData } = this.props;
    fetchAllData();
    setTimeout(()=>{searchData(this.state)},100)
    
  }

  
  render() {
    const mainGrid={display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}
    const cardStyle={maxWidth:400,width:'100%',padding:'2em 4em 2em 2em',margin:'1em 0'}
    const sectionGrid={ display: 'flex', justifyContent: 'end', alignItems: 'end', flexDirection: 'column', marginBottom: '2em' }
    const sectionLabel = { fontSize: '1.3em', fontWeight: 'bold', marginBottom: '-.2em' }
    const innerSection={ display: 'flex', justifyContent: 'center', alignItems: 'center', }
    const formControlStyle={ width: '12em', marginTop: '1em' }
    const formControlStyleLeft={ width: '12em', marginTop: '1em', marginLeft: '1em' }
    const {ccy,lowerLimit,upperLimit,startDate,endDate} = this.state

    return (
    <Grid style={mainGrid}>
    <Card style={cardStyle}>
      <CardContent>
            <Grid style={sectionGrid}>
              <span style={sectionLabel}>Select Currency</span>
              <FormControl style={formControlStyle} >

                <InputLabel id="ccy">
                  Currency
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
                  startAdornment={ccy!==''?(<InputAdornment position="start">{ccy}</InputAdornment>):null}
                  onChange={this.setLowerLimit}/>
                </FormControl>
                <FormControl style={formControlStyleLeft} >
                  <InputLabel id="ccy">
                    Amount Below
                  </InputLabel>
                  <Input 
                  type='number' 
                  value={upperLimit} 
                  startAdornment={ccy!==''?(<InputAdornment position="start">{ccy}</InputAdornment>):null}
                  onChange={this.setUpperLimit} />
                </FormControl>
              </Grid>
            </Grid>

            <Grid style={sectionGrid}>
              <span style={sectionLabel}>Enter Time Duration</span>
              <Grid style={innerSection}>
                <FormControl style={formControlStyle} >
                  <DatePicker
                  label="From Date"
                  placeholder="Select from date"
                  format="dd/MM/yyyy"
                  inputProps={{
                    onChange:this.setStartDate,
                    value:startDate
                      }}
                  />
                </FormControl>
                <FormControl style={formControlStyleLeft} >
                <DatePicker
                  label="To Date"
                  placeholder="Select to date"
                  format="dd/MM/yyyy"
                  inputProps={{
                    onChange:this.setEndDate,
                    value:endDate
                      }}
                  />
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



const mapDispatchToProps = dispatch => bindActionCreators({
    searchData: search,
    fetchAllData:fetchData,
}, dispatch)


export default connect(null, mapDispatchToProps)(SearchBar);