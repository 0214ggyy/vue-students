const path=require('path')
//这个配置文件就是一个js文件,通过node中的模板操作,向外暴露一个配置对象
module.exports={
// 需要手动配置一个入口和出口
entry:path.join(__dirname,'./src/main.js'),//表示入口,要使用webpack打包文件
output:{
    path:path.join(__dirname,'dis'),
    filename:'bundle.js'
}
}
// 1.首先webpack发现我们并么有通过命令的形式给他指定入口和出口
//2.webpack就会去项目的根目录中查找一个叫做webpack.config,js的配置文件,当找到配置文件后webpack回去解析执行这个配置文件,当解析执行配置文件后,就得到了配置文件中导出配置对象
//当webpack拿到配置对象后就拿到了 配置对象中  指定的入口 和出口 然后进行打包构建:
// entry输出output filename