## npm常见问题

### 执行 `npm install` 出错，报错 `operation not premitted` 

应该是网络稳定导致下载的npm包 不完整，之后又反复install导致

解决办法需要`删除相关文件`以及清除`npm缓存`，以下为具体步骤：

1. 删除根目录下的packeage-lock.json 
2. 删除node_modules文件夹， 可使用 rimraf 插件，全局安装 `npm install -g rimraf`；也可使用npx，之后执行 `rimraf node_modules`
3. 清除npm缓存： 执行 `npm cache clean --force`     (??? `npm cache verify`)
4. 确保以上都执行成功之后，重新执行 `npm install`

