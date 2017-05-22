const URL_SCRIPT = './src/script/';

function getEntry() {
    var entry = ['index.js'];

    return entry.map(function(item) {
        return URL_SCRIPT + item;
    });
}

module.exports = {
  entry: getEntry(),

  output: {
    filename: './dist/bundle.js'
  }
}

