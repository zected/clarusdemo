const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
    gulp.src('css/main.css')
        .pipe(autoprefixer({
            browsers: [
                'last 10 versions',
                '> 5%'],
            // cascade: false
        }))
        .pipe(gulp.dest('dist'))
);