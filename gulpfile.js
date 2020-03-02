var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('default', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", browserSync.reload);
});