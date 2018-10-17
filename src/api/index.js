//动态判断域名
const host = /localhost/.test(window.location.host)
  ? "https://baojia.chelun.com"
  : "http://baojia.chelun.com";

function sendRequest(url, method = "GET", data = {}) {
  let params = {
    method
  };
  //判断如果是一个post请求,带上请求体信息
  if (method == "POST") {
    params.body = JSON.stringify(data);
  }
  //判断请求查询url是否携带query
  if (url.indexOf('?') == -1) {
    url += `?_=${+new Date()}`;
  } else {
    url += `&_=${+new Date()}`;
  }
  return fetch(host + url, params).then(res => res.json()).then(body => body);
}

//获取车辆品牌数据
export let getBrandList = () => {
  return sendRequest("/v2-car-getMasterBrandList.html");
};

//获取车系数据
export let getCarsystemList = (id) => {//
  return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
};

//获车系数据
export let getinquirylist = (id) =>{
  return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`);
}

//获取询问低数据
export let getdijiaList = (id) =>{
  return sendRequest(`/v2-dealer-alllist.html?carId=${id}&cityId=201`);
}

/**
 * 获取图片懒加载数据
 * @param {any} SerialID 车系ID
 * @param {any} ImageID  图片分类iD
 * @param {number} [Page=1] 分页页码数
 * @param {number} [PageSize=30] 分页每页数量
 * @param {any} carId 车型id
 * @param {any} colorId 颜色id
 * @returns 
 */
export let getlazyImgList = (param) =>{
  let search = ``;
  for(let i in param){
    search += `&${i}=${param[i]}`;
  }
  // 补充page与pageSize
  if(!param['Page']){
    search += `&Page=1`;
  }
  if(!param['PageSize']){
    search += `&PageSize=30`;
  }
  return sendRequest(`/v2-car-getCategoryImageList.html?${search.slice(1,search.length)}`);
  //,SerialID,ImageID,Page=1,PageSize=30,carId,colorId
}

/**
 * 城市数据
 * @returns 
 */
export let getcitylist = () =>{
  return sendRequest("/v1-city-alllist.html");
}

/**
 * 城市数据ID 
 * @returns 
 */
export let getcitylistid = (id) =>{
  return sendRequest(`/v1-city-alllist.html?provinceid=${id}`);
}

/**
 * 全部颜色数据
 * @param {any} id 
 * @returns 
 */
export let getcolorlist = (id) =>{
  return sendRequest(`/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}
/**
 * 车系数据(颜色)
 * @param {any} id 
 */
export let getcarlist = (id) =>{
    return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`)
    
}

