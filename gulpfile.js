const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");
const cleanCss = require("gulp-clean-css");
const autoPrefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const image = require("gulp-image");
const sass = require("gulp-sass")(require("sass"));
const del = require("del");
const babel = require("gulp-babel");
const notify = require("gulp-notify");
const unlify = require("gulp-uglify-es").default;

const fonts = () => {
  return src("src/font/**").pipe(dest("dist/font"));
};
const libsJs = () => {
  return src("src/js/libs/**/*.js").pipe(dest("dist/js/libs"));
};

const clean = () => {
  return del(["dist"]);
};

const htmlMinify = () => {
  return src("src/**/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const images = () => {
  return src([
    "src/images/**/*.png",
    "src/images/**/*.jpg",
    "src/images/**/*.jpeg",
    "src/images/**/*.webp",
    "src/images/*.svg",
    "src/images/svg/**/*.svg",
  ])
    .pipe(image())
    .pipe(dest("dist/images"))
    .pipe(browserSync.stream());
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
};

const scssCompiler = () => {
  main = src("src/css/main/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(concat("main.css"))
    .pipe(
      autoPrefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCss({
        level: 2,
      })
    )
    .pipe(dest("dist/css/main"))
    .pipe(browserSync.stream());
  product = src("src/css/product/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(concat("product.css"))
    .pipe(
      autoPrefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCss({
        level: 2,
      })
    )
    .pipe(dest("dist/css/product"))
    .pipe(browserSync.stream());
  catalog = src("src/css/catalog/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(concat("catalog.css"))
    .pipe(
      autoPrefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCss({
        level: 2,
      })
    )
    .pipe(dest("dist/css/catalog"))
    .pipe(browserSync.stream());
  return main, catalog, product;
};

const scripts = () => {
  product = src("src/js/product/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(
      unlify({
        toplevel: true,
      }).on("error", notify.onError())
    )
    .pipe(dest("dist/js/product"))
    .pipe(browserSync.stream());
  components = src("src/js/components/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(
      unlify({
        toplevel: true,
      }).on("error", notify.onError())
    )
    .pipe(dest("dist/js/components"))
    .pipe(browserSync.stream());
  main = src("src/js/main/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(
      unlify({
        toplevel: true,
      }).on("error", notify.onError())
    )
    .pipe(dest("dist/js/main"))
    .pipe(browserSync.stream());
  catalog = src("src/js/catalog/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(
      unlify({
        toplevel: true,
      }).on("error", notify.onError())
    )
    .pipe(dest("dist/js/catalog"))
    .pipe(browserSync.stream());
  return main, catalog,components,product;
};

const styles = () => {
  return src("src/css/customs/**/*.css")
    .pipe(
      autoPrefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCss({
        level: 2,
      })
    )
    .pipe(dest("dist/css/customs"))
    .pipe(browserSync.stream());
};

watch("src/js/**/*.js", scripts);
watch("src/css/**/*.css", styles);
watch("src/**/**/*.html", htmlMinify);
watch("src/images/**/*.png", images);
watch("src/images/**/*.svg", images);
watch("src/images/**/*.jpg", images);
watch("src/css/**/*.scss", scssCompiler);

exports.default = series(
  clean,
  scripts,
  styles,
  images,
  libsJs,
  fonts,
  scssCompiler,
  htmlMinify,
  images,
  watchFiles
);
