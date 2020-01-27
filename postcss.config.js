module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-mixins": {},
    "postcss-simple-vars": {},
    //stylelint: {},

    "postcss-preset-env": {
      stage: 2,
      importFrom: "src/css/custom-variable.css",
      browsers: ["> 1%", "Android >= 4.4", "IOS >= 7", "ie >= 9"],
      features: {
        "any-link-pseudo-class": true,
        "matches-pseudo-class": true,
        "not-pseudo-class": true,
        "nesting-rules": true,
        "color-mod-function": true,
        "alpha-hex-colors": true,
        "any-link-pseudo-class": true,
        "custom-media-queries": true,
        "custom-properties": true,
        "custom-selectors": true,
        "image-set-function": true,
        "system-ui-font-family": true
      }
      //customProperties: false,
      //preserve: false,
      //calc: false,
      // autoprefixer: {
      //   grid: true,
      //   flexbox: true
      // }
    },
    //"postcss-apply": {},
    //"postcss-custom-media": {},
    //"postcss-custom-selectors": {},
    //"postcss-image-set-function": {},
    //"postcss-css-variables": {},

    //"postcss-color-function": {},
    //"postcss-color-hex-alpha": {},
    //"postcss-color-hwb": {},
    //"postcss-pseudo-class-any-link": {},
    //"postcss-font-magician": {},
    //"sort-css-media-queries": {},
    "postcss-nested": {}
    //"postcss-reporter": {
    //  clearReportedMessages: true
    //}
  }
};
