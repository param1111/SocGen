import axios from 'axios';


	function fetchYear(year){
		var URL = 'http://localhost:3001/'+ 
			year;

		return axios.get(URL)
			.then(function(response){
				console.log(response);
				return response.data;
			});
		}

export default fetchYear

