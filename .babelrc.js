const presets = [
  [
    '@babel/preset-env',
    {
      modules: process.env.NODE_ENV === 'es' ? false : 'commonjs',
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
]

const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
]

module.exports = { presets, plugins }
