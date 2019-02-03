//js引入文件    
//1.导入jquery  
//import ** from ** es6中导入模块的
// var webpack = require('webpack');
import $ from 'webpack'
import $ from 'jquery'  //cont $ = require('jquery')
$(function(){
    $('li:odd').css('backgroundColor','blue')
    $('li:oven').css('backgroundColor',function () {
        return '#' + 'D97634'
    })
})