//==============CURRENT DATE===============
const dataElem = document.getElementById('date');
let currentData = new Date();
let dateOptions = {year: 'numeric',month: 'long', day: 'numeric'};
dataElem.innerHTML = currentData.toLocaleString('en-US', dateOptions);

//==================API===============
// dummy start
// let myPost = {
// 	name: "Lee sung kyung",
// 	queryUrl: "https://www.google.com/search?client=firefox-b-d&q=Lee+sung+kyung",
// 	volume: 31799,
// 	followers: 53534435
// }	

// // console.log(myPost.name);

// let graphData = [
// 	{name: 'dexter', queryURL: 'dexterdexter', volume: 234234},
// 	{name: 'james', queryURL: 'jamesjames', volume: 33432},
// 	{name: 'papa', queryURL: 'papapapa', volume: 423432}  
// 	];

// graphData.push(myPost);
// // dummy end

let graphData = [];

// rapid API code to retricve data
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '34da33d113msh8628e261f968a95p1d83c4jsnf9a93a853bb7',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};


fetch(url, options)
.then(res => res.json())
.then(data => {
		
		for (let i = 0; i < 20 ;i++){
			graphData.push({
				"name": data.trends[i].name,
				"volume": data.trends[i].volume
			})
}

		// MAP
		let topics = graphData.map(object => {
			console.log(object);
			console.log(graphData);
			return object.name;
		});

		console.log(topics);

		let volumes = graphData.map(object => {
			return object.volume;
		});

		console.log(volumes);


		// chart templete 
		const myChart = document.getElementById('myChart');

		let barChart = new Chart(myChart, {
		  type: 'bar',
		  data: {
		    labels: topics,
		    datasets: [{
		      label: '# of tweets/xeets',
		      data: volumes,
		      borderWidth: 2,
		      backgroundColor: [
		      	'red',
				'blue',
				'yellow',
		      	'green',
		      	],
		      borderColor: [
				'pink',
				'violet',
				'orange',
				'yellow',
		      	],
		      hoverBackgroundColor: [
		      	'grey',
		      	'dark-blue',
		      	'red',
		      	'dark-green',
		      	]
		    }]
		  },
		  options: {
		  	indexAxis: 'y',
		    scales: {
		      y: {
		        beginAtZero: true
		      }
		    }
		  }
	});

// ============================
// copy paste to fetch request (end)
// ============================
});



// ============================
// copy paste to fetch request (start)
// ============================


// for (let i = 0; i < 2 ;i++){
// 	console.log(graphData[i]);
// 	console.log(graphData[i].name);
// 	console.log(graphData[i].queryURL);
// 	console.log(graphData[i].volume);
// }

// // MAP
// let topics = graphData.map(object => {
// 	console.log(object);
// 	console.log(graphData);
// 	return object.name;
// });

// console.log(topics);

// let volumes = graphData.map(object => {
// 	return object.volume;
// });

// console.log(volumes);


// // chart templete 
// const myChart = document.getElementById('myChart');

// let barChart = new Chart(myChart, {
//   type: 'bar',
//   data: {
//     labels: topics,
//     datasets: [{
//       label: '# of tweets/xeets',
//       data: volumes,
//       borderWidth: 2,
//       backgroundColor: [
//       	'red',
// 		'blue',
// 		'yellow',
//       	'green',
//       	],
//       borderColor: [
// 		'pink',
// 		'violet',
// 		'orange',
// 		'yellow',
//       	],
//       hoverBackgroundColor: [
//       	'grey',
//       	'dark-blue',
//       	'red',
//       	'dark-green',
//       	]
//     }]
//   },
//   options: {
//   	indexAxis: 'y',
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

// // ============================
// // copy paste to fetch request (end)
// // ============================