module.exports = {
    sourceMaps: false,
    presets: [
        '@babel/preset-typescript',
        '@babel/preset-env',
        ['@babel/preset-react', {runtime: 'automatic'}],
    ],
};
