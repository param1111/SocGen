import React from 'react';
import PropTypes from 'prop-types';
import fetchYear from '../util/api';



function SelectYear(props) {
    var year = ['matched', 'unmatched', 'Possible Match'];
    return (
    <ul className='year'>
      {year.map(function (year) {
        return (
          <li
            style={year === props.selectedYear ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, year)}
            key={year}>
              {year}
          </li>
        )
      })}
    </ul>
    )
}

function YearGrid (props) {
  console.log(props);
  return (
    <ul className='popular-list'>
      {props.data.map(function (data, index) {
        console.log(data);
        return (
          <li key={data._id} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>Stock Symbol : {data.symbol}</li>
              <li>open : {data.open}</li>
              <li>close : {data.close}</li>
              <li>low : {data.low}</li>
              <li>high : {data.high}</li>
              <li>volume : {data.volume}</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}


SelectYear.propTypes = {
    selectedYear: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

class Popular extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedYear: 'matched',
            data: null,

            currentPage : 1,
            dataPerPage : 500,
        };

        this.updateYear = this.updateYear.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // AJAX
        this.updateYear(this.state.selectedYear)
    }

    handleClick(event) {
        this.setState({
            currentPage : Number(event.target.id)
        });
    }


    updateYear(year) {

        this.setState(function() {
            return {
                selectedYear: year,
                data: null
            }
        });

        fetchYear(year)
            .then(function(data) {
                
                this.setState(function() {

                    return {
                        data: data,
                    }
                });
            }.bind(this));
    }

    render() {
        // const {data, currentPage, dataPerPage} = this.state;
        //         var indexOfLastData = currentPage * dataPerPage;
        //         var indexOfFirstData = indexOfLastData - dataPerPage;
        //         var currentData = null;
        //         var pageNumbers = [];
        //         if(this.state.data){
        //             currentData = data.slice(indexOfFirstData, indexOfLastData);
        //             for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
        //                 pageNumbers.push(i);
        //          }
        //     }           
                
        return (
        <div>
          <SelectYear
          selectedYear={this.state.selectedYear}
          onSelect={this.updateYear} 
          />
      </div>
        )
    }
}
export default Popular