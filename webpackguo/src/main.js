import $ from 'jquery'

$(function(){
    $('li:odd').css('background','blue')
    $('li:even').css('background','pink')

})

//采用webpack 文件路径  打包好输出的路径   形成打包