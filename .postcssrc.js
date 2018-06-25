// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-cssnext": {
      browsers: ["last 2 versions", "Android >= 4.0"]
    },
    "postcss-nested": {},
    "postcss-assets": {
      loadPaths: ['assets/images/']
    },
    "rucksack-css": {},
    "postcss-import": {},
    "postcss-simple-vars": {},
    "postcss-extend": {},
    "postcss-mixins": {},
    "postcss-mpvue-wxss": {}
  }
}
