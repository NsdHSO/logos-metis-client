module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo', ['@babel/preset-env', {targets: {node: 'current'}}]],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@app': './app',
                        '@components': './components',
                        '@assets': './assets',
                        '@navigation': './navigation',
                        '@utils': './utils',
                        '@hooks': './hooks',
                    },
                },
            ],
        ],
    };
};
