/**
 * Wood Plugin Module.
 * query查询对象, sql使用
 * by jlego on 2018-11-25
 */
const Query = require('./src/querysql');

module.exports = (app = {}, config = {}) => {
  app.Querysql = function(tableName = '') {
    return Query.getQuery(tableName = '');
  }
  if(app.addAppProp) app.addAppProp('Querysql', app.Querysql);
  return app;
}
