module.exports = {
  presets: ['@vue/app', [
    '@babel/preset-env',
    {
      'targets': {
        'node': '8.10'
      },
      'corejs': '3', // 声明corejs版本
      'useBuiltIns': 'entry'
    }
  ]],
  plugins: ['@babel/plugin-transform-runtime']
}
