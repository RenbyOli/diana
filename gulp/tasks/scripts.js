module.exports = function() {
	$.gulp.task('scripts:lib', function() {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/svgxuse/svgxuse.js', 'node_modules/object-fit-polyfill/dist/object-fit-polyfill.js', 'node_modules/particles.js/particles.js'])
		.pipe($.gp.concat('libs.min.js'))
		.pipe($.gulp.dest('build/js/'))
		.pipe($.bs.reload({
			stream: true
		}));
	});

	$.gulp.task('scripts', function() {
		return $.gulp.src(['src/dev/js/main.js'])
		.pipe($.gulp.dest('build/js/'))
		.pipe($.bs.reload({
			stream: true
		}));
	});
}