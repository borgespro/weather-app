module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/assets': './src/assets',
            '@/config': './src/config',
            '@/contexts': './src/contexts',
            '@/hooks': './src/hooks',
            '@/routes': './src/routes',
            '@/store': './src/store',
            '@/typings': './src/typings',
            '@/ui': './src/ui',
          },
        },
      ],
    ],
  };
};
