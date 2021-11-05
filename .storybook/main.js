module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states'
  ],
  babel: async (options) => {
    options.presets.push('@emotion/babel-preset-css-prop')
    return options
  },
  reactOptions: {
    fastRefresh: true
  }
}
