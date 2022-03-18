export function autoErrListener(report) {
  /**
   * 监控运行时 错误， 语法错误，网络请求错误监测不到
   * @param {string} message 错误信息（字符串）。
   * @param {string} source 发生错误的脚本URL（字符串）
   * @param {number} lineno 发生错误的行号（数字）
   * @param {number} colno 发生错误的列号（数字）
   * @param {object} error Error对象（对象）
   */
  window.onerror = function (message, source, lineno, colno, error) {
    console.log('捕获到异常：', { message, source, lineno, colno, error });
    report({ cheese: 'test' });
  };

  // 测试用例
  // setTimeout(() => {
  //   UndefVar;
  // }, 2000);

  /**
  * 资源加载错误（如图片和脚本加载失败）
  * @param {*} report
  */
  window.addEventListener('error', (error) => {
    console.log('捕获到异常：', error);
  }, true);
}
