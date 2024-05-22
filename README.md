<p align="center">
<img src="https://i.imgur.com/oahHuxG.png">
<img src="https://i.imgur.com/sZ01Nyl.png">
</p>

# 基础环境配置

安装electron相关插件
下载https://registry.npmmirror.com/binary.html?path=electron-builder-binaries/winCodeSign-2.6.0/winCodeSign-2.6.0.zip
解压至C:\Users\admin\AppData\Local\electron-builder\Cache\winCodeSign
使得C:\Users\admin\AppData\Local\electron-builder\Cache\winCodeSign\winCodeSign-2.6.0目录下有可执行文件rcedit-x64.exe

详情参见 https://www.jianshu.com/p/c5d48a58eeb3


## Usage

### Create an App

```
# with npx
$ npx create-nextron-app my-app --example with-chakra-ui

# with yarn
$ yarn create nextron-app my-app --example with-chakra-ui

# with pnpm
$ pnpm dlx create-nextron-app my-app --example with-chakra-ui
```

### Install Dependencies

```
$ cd my-app

# using yarn or npm
$ yarn (or `npm install`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Use it

```
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
```
