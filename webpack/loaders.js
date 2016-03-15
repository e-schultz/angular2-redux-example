exports.tslint = {
  test: /\.ts$/,
  loader: 'tslint'
};

exports.istanbulInstrumenter = {
  test: /\.ts$/,
  loader: 'istanbul-instrumenter',
  exclude: /(node_modules\/|\.test\.ts$|tests\.\w+\.ts$)/
};

exports.ts = {
  test: /\.ts$/,
  loader: 'ts-loader',
  exclude: /node_modules/
};

exports.html = {
  test: /\.html$/,
  loader: 'raw'
};

exports.css = {
  test: /\.css$/,
  loader: 'to-string!css!postcss'
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader (pattern) {
  return {
    test: pattern,
    loader: 'url'
  };
}
