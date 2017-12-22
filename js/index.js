var btn1total = 0; // 购物车计数
var btn2total = 0; // 收藏夹计数

/*
	小球飞入的函数
	1. 点击按钮，先拷贝一份图片
	2. 图片缩小到左上角的动画
	3. 图片从左上角飞入购物车或收藏夹的动画，同时计数
*/
function clickBtn(){
	$('button').on('click', function(){
		var img = $(this).parent().find('img') // 点击按钮，找到按钮所在父元素下的图片
		var btn = $(this).attr('class') // 获取按钮的class属性
		var flyImg = img.clone() // 将图片复制一份
		$('.wrapper').append(flyImg)

		flyImg.css({
			'opacity': '0.6',
			'width': img.width() + 'px',
			'height': img.height() + 'px',
			'position': 'absolute',
			'top': img.offset().top + 'px',
			'left': img.offset().left + 'px',
			'border': '6px solid RED',
			'z-index': 999
		})

		flyImg.animate({
			'border-radius': 100 + '%'
		}, 0).animate({
			'width': 50 + 'px',
			'height': 50 + 'px'
		}, 500, function(){
			var t;
			if(btn == 'btn1'){
				btn1total++
				t = $('.btn1-add').offset().top;
			} else if (btn == 'btn2') {
				btn2total++
				t = $('.btn2-add').offset().top;
			}

			flyImg.animate({
				'top': t,
				'left': $(document).width() - $('.rightBox').width() + 'px',
				'height': 0 + 'px',
				'width': 0 + 'px'
			}, 1000, function(){
				flyImg.remove()
				$('.btn1-add').html(btn1total)
				$('.btn2-add').html(btn2total)
			})
		})
	})
}

clickBtn()