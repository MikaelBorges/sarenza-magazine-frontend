// Gitlab regular expression:
// ((^(fixup!|Merge|revert))|(^(chore|docs|feat|fix|perf|refactor|style|test)(\([^)]+\))?:)) .+
// We only handle the second part since fixup/revert/Merge will be processed by Gitlab.
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'scope-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'test', 'build']
    ]
  }
};
