module.exports = {
  sourceType: 'unambiguous',
  compact: false,
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        regenerator: true
      }
    ],
    [
      'tsconfig-paths-module-resolver',
      {
        root: ['./']
      }
    ],
    [
      'babel-plugin-styled-components',
      {
        ssr: true
      }
    ]
  ]
};
