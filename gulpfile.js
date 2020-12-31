const gulp = require("gulp");
const webpack = require("webpack-stream");
const sass = require("gulp-sass");
const browsersync = require("browser-sync");

const dist = "./dist";

gulp.task("copy-html", () => {
    return gulp.src("src/*.html")
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
});
gulp.task("copy-php", () => {
    return gulp.src("src/*.php")
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
});

gulp.task("copy-favicon", () => {
    return gulp.src("./src/favicon.ico")
        .pipe(gulp.dest(dist))
        .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'script.js'
            },
            watch: false,
            devtool: "source-map",
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]
                            ]
                        }
                    }
                }]
            }
        }))
        .pipe(gulp.dest(dist + '/js'))
        .pipe(browsersync.stream());
});

gulp.task("build-sass", () => {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dist + '/css'))
        .pipe(browsersync.stream());
});

gulp.task("copy-assets", () => {
    gulp.src("./src/icons/**/*.*")
        .pipe(gulp.dest(dist + "/icons"));

    return gulp.src("./src/img/**/*.*")
        .pipe(gulp.dest(dist + "/img"))
        .pipe(browsersync.stream());
});

gulp.task("watch", () => {
    browsersync.init({
        proxy: {
            target: 'http://js-food-petricenco.host1670806.hostland.pro/dist',
            ws: true
        },
        reloadDelay: 1500,
        notify: true

    });

    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/*.php", gulp.parallel("copy-php"));
    gulp.watch("./src/icons/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/img/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/scss/**/*.scss", gulp.parallel("build-sass"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("build", gulp.parallel("copy-html", "copy-php", "copy-favicon", "copy-assets", "build-sass", "build-js"));

gulp.task("default", gulp.parallel("watch", "build"));