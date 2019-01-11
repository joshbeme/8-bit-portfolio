'use strict'
var gulp = require("gulp"),
  prefixer = require("gulp-autoprefixer"),
  imageMin = require('gulp-imagemin');



gulp.task('image', ()=>{
  return  gulp.src('src/static/*')
    .pipe(imageMin())
    .pipe(gulp.dest('src/static/'))
})

gulp.task("style", () => {
  return gulp
    .src("src/styles/*.scss")
    
    .pipe(prefixer())
    
    .pipe(gulp.dest("src/styles/"))
    .on("error", e => console.error(e));
});
