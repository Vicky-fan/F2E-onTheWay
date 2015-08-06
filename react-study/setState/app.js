
var App = React.createClass({
	getInitialState: function () {
		return {
			title: '我喜欢的电影',
			movies: [
				{
					id: 5,
					name: '霍比特人',
					date: 2000
				},
				{
					id: 6,
					name: '速度与激情',
					date: 2002
				}
			]
		}
	},
	componentDidMount: function () {
		this.fetchData();
	},
	fetchData: function () {
		var self = this;
		var url = '../data/movies.json';
		$.getJSON(url, function (movies) {
			setTimeout(function () {
				self.setState({
					movies: movies
				})
			}, 2000);
		})
	},
	render: function () {
		var title =  this.state.title;
		var movies = this.state.movies.map(function (movie) {
			return (
				<li className="movie__item" key={movie.id}>
					<span className="movie__name">{movie.name}</span>
					<span className="movie__date">{movie.date}</span>
				</li>
			)
		});
		return (
			<div className="movie">
				<h1>{title}</h1>
				<ul>{movies}</ul>
			</div>
		)
	}
});

React.render(
	<App />,
	document.getElementById('app'),
	function () {
		console.log('渲染完毕！');
	}
);