const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        "browsers": ["last 3 versions", "IE >= 11", "iOS >= 9"],
      },
      useBuiltIns: "usage",
    },
  ],
];

const plugins = ["@babel/plugin-transform-runtime"];

const sourceType = "unambiguous";

module.exports = { presets, plugins, sourceType };
