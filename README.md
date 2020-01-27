#### Redux setup with reactjs for filter.

### Installation
git clone https://github.com/AmanullaChishty/filter.git<br/>
and then run 'npm install' to install node modules, in the folder where you have cloned the project<br/>
and then run 'npm start' to run the project.<br/>

### About
This is a innvoice filter which takes parameters like currency type,amount range and time period
to load a grid of data matching the filter criteria.<br/>

### Folder Structure
src-source files<br/>
under source files<br/>
<b>App.js</b> is the parent component which have Search Bar and Grid as child component in terms of atomic design this is PAGE.<br/>
<b>gridList.js-</b> is the grid component to render the filtered grid list ,used Mui-Datatables for the grid.<br/>
<b>reducer-</b> has rootReducer.js which is the app reducer and all the component level reducers to be decalred in this.<br/>
<b>seacrhBar-</b> is an organism in terms of atomic design.<br/>
sub folders in searchBar are actions,components,reducer,selectors.<br/>
<b>actions-</b> sends the payload of data to the store and has a side effect to fetch data.<br/>
<b>reducers-</b> updates the state based on the changes to store in response of actions.<br/>
<b>selectors-</b> accepts redux state and returns data that is derived from state.<br/>
<b>components-</b> is the rendering part whcich includes input fields such as select,datepicker etc.<br/>
<b>atom-</b> this folder consist of the components whcich can be reused. as the name suggest these are the tiny building blocks.
it has a DatePicker component to select date.


### P.S: The data.json is present in public folder and it is the source of data it has 300 records and the amount ranges from 1 to 1000 and date ranges from 24/01/2018 to 24/12/2020 in the data.

