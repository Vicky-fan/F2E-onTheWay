var App = React.createClass({
	getInitialState: function () {
		return {
			loading: true,
			title: '电影集',
			movies: [
				{
					id: 5,
					name: '大圣归来',
					date: 2015
				},
				{
					id: 4,
					name: '霍比特人',
					date: 2014
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
				});
				self.hideLoading();
			}, 2000);
		})
	},
	hideLoading: function () {
		this.setState({
			loading: false
		});
	},
	onAdd: function (e) {
		e.preventDefault();
		var refs = this.refs,
			refName = React.findDOMNode(refs.name),
			refDate = React.findDOMNode(refs.time);
		if (refName.value === '') {
			return alert('请输入电影名！');
		}
		if (refDate.value === '') {
			return alert('请输入上映时间！');
		}
		var movie = {
			id: Date.now(),
			name: refName.value,
			date: refDate.value
		};
		var movies = this.state.movies;
		movies.push(movie);
		this.setState(movies);
		refName.value = '';
		refDate.value = '';
	},
	onRemove: function (movie) {
		var id = movie.id,
			movies = this.state.movies,
			len = movies.length,
			index = -1;
		for (var i = 0; i <len ; i++ ) {
			if (movies[i].id === id ) {
				index = i;
				break;
			}
		};

		if (index > 0) {
			movies.splice(index, 1);
			this.setState({
				movies: movies
			});
		}

	},
	render: function () {
		var self = this;
		var title = this.state.title;
		var movies = this.state.movies.map( function (movie) {
			return (
				<li className="movie__item" key={movie.id}>
					<span className="movie__name">{movie.name}</span>
					<span className="movie__date">{movie.date}</span>
					<a href="#" onClick={self.onRemove.bind(null, movie)}>删除</a>
				</li>
			);
		}.bind(this));
		return (
			<div>
				<h1>{title}</h1>
				<form onSubmit={this.onAdd}>
					<input type="text" ref="name" placeholder="输入你喜欢电影" />
					<input type="text" ref="time" placeholder="上映时间" />
					<input type="submit" value="提交" />
				</form>
				<ul>{movies}</ul>
				{this.state.loading ? <div>数据加载中...(我是菊花，转啊转)</div> : ''}
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