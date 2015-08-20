var gulp = require('gulp');
var browserSync = require('browser-sync');
var webpack  = require('gulp-webpack');

var reload = browserSync.reload;
var webpackConfig = require('./webpack.config');

gulp.task('browser-sync', function() {
    browserSync({
        ui:false,
        server: {
            baseDir: "./",
            directory: true
        },
        notify: false,
        ghostMode:false,
        port: 3000,
        open: "external",
        browser: "/Applications/Google\ Chrome.app/"
    })
})

gulp.task('js', function() {
	return gulp.src('./app')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('build'))
        .pipe(reload({stream:true}));
})

gulp.task('default', ['browser-sync'], function () {
	gulp.watch('app/*.js', ['js'])
    gulp.watch('*.html', reload)
});