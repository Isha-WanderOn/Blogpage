const config = {
  transformIgnorePatterns: ["/node_modules/(?!(foo|bar)/)", "/bar/"],
};

module.exports = config;
