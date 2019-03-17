import React from 'react';
import fetchArchive from '../util/api';



function SelectArchive(props) {
    var archive = ['matched', 'unmatched', 'closed-fit'];
    return (
    <ul className='year'>
      {archive.map(function (archive) {
        return (
          <li
            style={archive === props.selectedarchive ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, archive)}
            key={archive}>
              {archive}
          </li>
        )
      })}
    </ul>
    )
}

function ArchiveGrid (props) {
  console.log(props);  
}


class Popular extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedArchive: 'matched',
            data: null,
        };

        this.updateArchive = this.updateArchive.bind(this);
    }

    componentDidMount() {
        // AJAX
        this.updateArchive(this.state.selectedArchive)
    }

    updateArchive(archive) {
        this.setState(function() {
            return {
                selectedArchive: archive,
                data: null,
            }
        });
         fetchArchive(archive)
            .then(function(data) {                
                this.setState(function() {
                    return {
                        data: data,
                    }
                });
            }.bind(this));
    }
    render() {
      const {data} = this.state;
      var currentData = null;
      if(this.state.data){
        currentData = this.state.data
      }
        return(
       <div>
          <SelectArchive
          selectedArchive={this.state.selectedArchive}
          onSelect={this.updateArchive} 
          /> 
          {!currentData ? <p>Loading</p> : <ArchiveGrid data = {currentData} /> }     
      </div>
        )
    }
}
export default Popular;