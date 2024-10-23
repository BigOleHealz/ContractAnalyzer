// ESLint configuration updates for the new feature "dis a new issue"
// Ensure that the new feature code adheres to the project's coding standards.

module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['@marblism'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-key': 'warn',
    '@next/next/no-img-element': 'off',
    '@marblism/no-react-query-in-functions': 'error',
    'react/no-unescaped-entities': 'off',
  },
}
