/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier',
  ],
  rules: {
    'block-no-empty': true,
  },
}
