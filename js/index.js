var index = 0
let time
let bgs = document.querySelector('.bgs')
let pics = document.querySelector('.pics')
let word_pics = document.querySelector('.word_pics')
let small_words_pics = document.querySelector('.small_words_pics')
var lis = document.getElementsByClassName('li')

// 轮播图效果
function move() {
    // 结合 index 定义图片的位置
    bgs.style.left = (index * -100) + '%'
    pics.style.left = (index * -100) + '%'
    word_pics.style.left = (index * -100) + '%'
    small_words_pics.style.left = (index * -100) + '%'
    // 遍历所有的li小圆点都设为灰色  排他思想
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = 'rgb(164, 164, 164)'
    }
    lis[index].style.backgroundColor = 'black'
}
// 缺点：最后一张回到第一张时没有衔接而是直接返回到第一张，太生硬
function if_index() {
    if (index >= 2) {
        // 用于判断 index是否超出图片数量，超出了则设回 -1，以完成循环定时器的效果
        index = -1
    }
}
function timer() {
    time = setInterval(() => {
        // 每隔两秒 index++ 且调用 move()函数和 if_index() 函数
        index++
        move()
        if_index()
    }, 2000)
}
timer()

// js实现点击 item切换效果(排他思想)
var items = document.getElementsByClassName('item')
var item_bottoms = document.getElementsByClassName('item_bottom')
// var lis = document.getElementsByClassName('li')
for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        // 遍历排他
        for (var i = 0; i < items.length; i++) {
            items[i].style.color = 'rgb(164, 164, 164)';
            item_bottoms[i].style.color = 'rgb(164, 164, 164)';
            // lis[i].style.backgroundColor  = 'rgb(164, 164, 164)';
        }
        // 留下自己
        this.style.color = '#000';
        this.children[1].style.color = '#000';// children[1] 是 item 的第二个孩子
        // lis[i].style.backgroundColor = '#000';
    }
}   
