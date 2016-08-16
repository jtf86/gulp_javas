var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var lib = require('bower-files')();

var buildProduction = utilities.env.production;

// RUNS FIRST TO BLEND ALL FILES
gulp.task('concatInterface', function() {
  return gulp.src(['./js/freakout-interface.js', './js/hockey-interface.js', './js/time-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

// ADD THIS TO concatInterface FOR SUCCESS
// , './js/time-interface.js'

// RUNS SECOND TO 'BROWSERIFY' THINGS
gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

// RUN BOWER INTEGRATION TASKS
gulp.task('bower', ['bowerJS', 'bowerCSS']);

// BOWER JS INTEGRATION METHOD
gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

// BOWER CSS INTEGRATION METHOD
gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

// MINIFYS THE JS INTO AN UGLY LITTLE OPTIMIZED FILE
gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

// DELETES BUILD FILES
gulp.task("clean", function(){
  return del(['build', 'tmp']);
});


// CHOOSES BETWEEN DEV AND PRODUCITON BUILDS
gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
});


// LINTER
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
