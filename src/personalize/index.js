/*
 * @Description: 网站个性化内容
 * @Author: Eviler
 * @LastEditors: Eviler
 * @Date: 2021-03-20 15:22:52
 * @LastEditTime: 2021-03-20 15:43:53
 */

// 网站切出/切入title变化效果
window.addEventListener('blur', () => {
  const docTitle = document.title;
  document.title = '待君归来~';
  window.addEventListener('focus', () => {
    document.title = '君归亦~善！';
    setTimeout(() => {
      document.title = docTitle;
    }, 1000);
  });
});