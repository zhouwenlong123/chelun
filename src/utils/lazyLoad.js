/*判断懒加载的 加载速度*/
export function lazyLoad(el) {
  /**
   * 判断元素是否在可视窗口中
   * @param {any} ele 
   * @returns 
   */
   function inView(ele) {
    let rect = ele.getBoundingClientRect();
    if(rect.left >=0 && rect.left < window.innerWidth && rect.top >=0 && rect.top <window.innerHeight){
        return true;
    }else{
        return false;
    }
  }
    /**
     * 判断图片是否已经加载
     * @param {any} ele 
     */
    function isDeal(ele) {
        return ele.src == ele.dataset.src;
    }

    function deal(){
        let nodes = [...document.querySelectorAll('img[data-src]')];
        nodes.forEach((item) =>{
            if(inView(item) && !isDeal(item)){
               item.src = item.dataset.src;
            }
        })
    }
    deal();
    if(el) {
        document.querySelector(el).addEventListener('scroll',deal)
    }else{
        window.onscroll = deal;
    }
}