const { createSideBarConfig } = require('./util');
const JAVASCRIPT_PATH = '/docs/blogs/javascript';

module.exports = {
  [JAVASCRIPT_PATH]: [createSideBarConfig('js基础', JAVASCRIPT_PATH)],
};
