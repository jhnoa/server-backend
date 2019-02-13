module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-react'],
    plugins: [
      [
        'react-native-web',
        {
          commonjs: true,
        },
      ],
      'add-module-exports',
      'transform-object-assign',
    ],
  };
};
