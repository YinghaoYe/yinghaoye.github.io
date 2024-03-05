// 1、获取相应标签列表
var img_list = document.getElementById('img_box').getElementsByTagName('li'); // 待播放图片列表
// var mask_list = document.getElementById('mask').getElementsByTagName('li'); // 待鼠标滑过圆点列表
var index = 0; // 定位下标
// var len = mask_list.length; // 列表长度
var len = img_list.length; // 列表长度
var timer = null; // 预留定时器变量

// 2、设置定时器-按照顺序进行自动轮播
// 2.1	定时器中执行函数， 给当前标签添加class，并去掉其他标签的class
function addClass(n){
	// 去掉所有class样式，此时所有图片和黑色圆点均不显示
	for (var i = 0; i < len; i++) {
		// 不显示图片
		if(img_list[i].className == "img_show"){
			img_list[i].className="";
		}
		// 不显示黑色圆点
		// if (mask_list[i].className == "mask_on") {
		// 	mask_list[i].className="";
		// }
	}
	// 给当前的标签添加class
	img_list[n].className = "img_show"; // 显示指定顺序图片
	// mask_list[n].className="mask_on"; // 显示指定顺序黑色圆点
}

// 2.2 	封装定时器方便调用
function autoPlay(){
	// 设置定时器
	timer = setInterval(function(){
		index ++;
		// 设置轮播下标，防止下标越界
		index = index == len ? 0 : index;
		addClass(index); // 调用函数
	},4000); // 每4s切换
}

autoPlay(); // 调用函数

