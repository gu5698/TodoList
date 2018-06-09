// 待辦清單的後台使用方法

/**
 * 1. 獲取待辦事項列表
 * url : "http://z20240-les-lee.com/todo/"
 * method : "GET"
 *
 * Input data : None
 *
 *
 * Output (server return) (object)
 * ex.
 * {
 *      "result" : true,                        // 回傳資料是否成功
 *      "value" : [
 *          {
 *              "id": 2,                        // 清單的流水號
 *              "content": "測試用代辦事項2",     // 代辦事項內容
 *              "ctime": 1527143972,            // 創立代辦事項的 server 時間戳記 (網路上有 unix timestamp 轉 一般時間的 js function 你可以找看看)
 *              "finished": 0                   // 代辦是否完成 0 表未完成 ; 1 表已完成
 *          },
 *      ]
 * }
 */

/**
 * 2. 新增代辦事項
 * url : "http://z20240-les-lee.com/todo/"
 * method : "POST"
 *
 * Input data : {
 *      "content" : , // 待辦事項內容
 * }
 *
 *
 * Output (server return) (object)
 * ex.
 * {
 *      "result" : true,                        // 回傳資料是否成功
 *      "value" : {
 *          "fieldCount": 0,
 *          "affectedRows": 1,                  // 資料庫中被改變的欄位數量 (沒任何變更會給0)
 *          "insertId": 3,                      // 新增的待辦事項 id
 *          "serverStatus": 2,                  // 不重要
 *          "warningCount": 0,                  // 不重要
 *          "message": "",                      // 不重要
 *          "protocol41": true,                 // 不重要
 *          "changedRows": 0                    // 不重要
 *      }
 * }
 */

 /**
 * 3. 修改代辦事項是否完成
 * url : "http://z20240-les-lee.com/todo/finished/{id}/{finished}"
 * method : "PUT"
 *
 * Input data : 見下方 description
 *
 * description:
 *      id : // 代辦事項的 id
 *      finished : // 是否要完成此待辦事項 (1/0)
 *
 *      於 url 後面接上 id 與 finished
 *      ex. http://z20240-les-lee.com/todo/finished/2/1
 *
 *
 * Output (server return) (object)
 * ex.
 * {
 *      "result" : true,                        // 回傳資料是否成功
 *      "value" : {
 *          "fieldCount": 0,
 *          "affectedRows": 1,                  // 資料庫中被改變的欄位數量 (沒任何變更會給0)
 *          "insertId": 3,                      // 新增的待辦事項 id
 *          "serverStatus": 2,                  // 不重要
 *          "warningCount": 0,                  // 不重要
 *          "message": "",                      // 不重要
 *          "protocol41": true,                 // 不重要
 *          "changedRows": 0                    // 不重要
 *      }
 * }
 */


/**
 * 4. 修改代辦事項內容
 * url : "http://z20240-les-lee.com/todo/content/"
 * method : "PUT"
 *
 * * Input data : {
 *      id : // 代辦事項的 id
 *      content : // 新代辦事項內容
 * }
 *
 *
 * Output (server return) (object)
 * ex.
 * {
 *      "result" : true,                        // 回傳資料是否成功
 *      "value" : {
 *          "fieldCount": 0,
 *          "affectedRows": 1,                  // 資料庫中被改變的欄位數量 (沒任何變更會給0)
 *          "insertId": 3,                      // 新增的待辦事項 id
 *          "serverStatus": 2,                  // 不重要
 *          "warningCount": 0,                  // 不重要
 *          "message": "",                      // 不重要
 *          "protocol41": true,                 // 不重要
 *          "changedRows": 0                    // 不重要
 *      }
 * }
 */


/**
 * 4. 刪除代辦事項
 * url : "http://z20240-les-lee.com/todo/{id}"
 * method : "DELETE"
 *
 * description:
 *      id : // 代辦事項的 id
 *      於 url 後面接上 id
 *      ex. http://z20240-les-lee.com/todo/1
 *
 *
 * Output (server return) (object)
 * ex.
 * {
 *      "result" : true,                        // 回傳資料是否成功
 *      "value" : {
 *          "fieldCount": 0,
 *          "affectedRows": 1,                  // 資料庫中被改變的欄位數量 (沒任何變更會給0)
 *          "insertId": 0,                      // 新增的待辦事項 id
 *          "serverStatus": 2,                  // 不重要
 *          "warningCount": 0,                  // 不重要
 *          "message": "",                      // 不重要
 *          "protocol41": true,                 // 不重要
 *          "changedRows": 0                    // 不重要
 *      }
 * }
 */