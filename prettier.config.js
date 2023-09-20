module.exports = {
  singleQuote: true,
  semi: true,
  printWidth: 100,
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'html',
      },
    },
  ],
};
