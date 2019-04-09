const authActions = require("./authActions");
const userActions = require('./userActions');
const postsActions = require('./postsActions');

module.exports = {
  ...userActions,
  ...authActions,
  ...postsActions,
}
