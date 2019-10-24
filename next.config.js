const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 6000 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
  webpack(config) {
    // Perform customizations to webpack config
    return config;
  },
});
