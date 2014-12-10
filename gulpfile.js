var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var ngTemplateCache = require('gulp-angular-templatecache');

gulp.task('default', ['scripts', 'html']);


gulp.task('html', [], function(){
  return gulp.src('index.html')
    .pipe(gulp.dest('build'));
})

gulp.task('scripts', [], function() {
  var traceur_runtime = gulp.src([traceur.RUNTIME_PATH])
    .pipe(sourcemaps.init());

  var deps = gulp.src([
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-ui-router.stateHelper/statehelper.js'
    ])
    .pipe(sourcemaps.init());

  var templates = gulp.src(['**/*.html', '!index.html'])
    .pipe(ngTemplateCache({
      standalone: true
    }))
    .pipe(sourcemaps.init());

  var app = gulp.src([
      '**/*.js',
      '!bower_components/**/*.js',
      '!node_modules/**/*.js',
      '!gulpfile.js',
      '!build/**/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(traceur({
      modules: 'register',
      moduleName: true
    }));

  return merge(traceur_runtime, deps, templates, app)
    .pipe(concat('index.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
});
