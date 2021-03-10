const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../')
    ]
    config.module.rules.push(
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../'),
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                '~/assets/scss/main.scss'
              ]
            }
          }
        ]
      },
    );
    config.resolve.alias['~'] = rootPath;
    config.resolve.alias['@'] = rootPath;
    return config;
  },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}