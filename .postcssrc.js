// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        // to edit target browsers: use "browserslist" field in package.json
        // "postcss-import": {},
        "autoprefixer": {
            "overrideBrowserslist": [
                // "last 1 version",
                "> 0.1%",
                // "maintained node versions",
                "not dead"
            ]
        },
        // "cssnano":{
        //     preset: 'default'
        // }
    }
};

