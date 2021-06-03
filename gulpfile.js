const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


function css() {
    return gulp 
        .src('./src/assets/styles/app.scss')
        .pipe(autoprefixer())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./src/assets/styles/css'))
}

function watchArchivos(){
    gulp.watch('./src/assets/styles/*.scss', css)
}
//Tareas
gulp.task('css', css)
gulp.task('watch', gulp.parallel(watchArchivos))