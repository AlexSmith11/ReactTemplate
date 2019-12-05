const tasks = taskList => taskList.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'yarn jest -o --passWithNoTests',
      'pretty-quick --staged'
    ])
  }
};
