var finalData = {};

	function fetchArchive(year){
		var URL = 'http://localhost:3001/'+ 
			year;

		return fetch(URL)
			.then((res)=>{
				return res.json();
			}).then(function(myJson){
				console.log(myJson);
				return (myJson);
			});
		}

export default fetchArchive;

