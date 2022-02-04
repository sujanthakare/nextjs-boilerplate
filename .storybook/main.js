const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  features: {
    emotionAlias: false,
  },
  stories: ["../src/react-ui/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-contexts/register",
    "@storybook/addon-a11y",
  ],
  staticDirs: ["../public"],
  framework: "@storybook/react",
  webpackFinal: (config) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    }

    config.module.rules[0].use[0].options.presets = [
      require.resolve("@emotion/babel-preset-css-prop"),
    ];

    return config;
  },
};
