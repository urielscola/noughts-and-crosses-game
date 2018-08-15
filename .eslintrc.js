const path = require('path');

module.exports = {
    "extends": "airbnb",
    "rules": {
        "linebreak-style": 0,
        "global-require": 0,
        "eslint linebreak-style": [0, "error", "windows"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-unresolved": "off",
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true
    },
    "settings": {
        "import/resolver": {
            "webpack": {
                config: path.resolve('./webpack.config.eslint.js'),
            }
        }
    },
};
