const babel =  require("@babel/core");
const swc = require("@swc/core");
const fs = require("fs");
const path = require("node:path");

const pathToFile = 'src/App.tsx'

const babelCode = babel.transformFileSync(pathToFile, {
    sourceMaps: false,
    presets: [
        '@babel/preset-typescript',
        '@babel/preset-env',
        ['@babel/preset-react', {runtime: 'automatic'}],
    ],
    plugins: ["istanbul"]
}).code;

const swcCode = swc.transformFileSync(pathToFile,
    {
        "jsc": {
            "parser": {
                "syntax": "typescript",
                "tsx": true
            },
            "experimental": {
                "plugins": [
                    ["swc-plugin-coverage-instrument", {}]
                ]
            },
            "transform": {
                "react": {
                    "runtime": "automatic",
                    "useBuiltins": true,
                },
            },
            "loose": false,
            "externalHelpers": false,
            // Requires v1.2.50 or upper and requires target to be es2016 or upper.
            "keepClassNames": false,
        },
        "minify": false
    }
).code;

const resDir = 'instrumentation_results';

if (fs.existsSync(resDir) === false) {
    fs.mkdirSync(resDir);
}

fs.writeFileSync(path.resolve(resDir, 'swc.js'), swcCode);
fs.writeFileSync(path.resolve(resDir, 'babel.js'), babelCode);
