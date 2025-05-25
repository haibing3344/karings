---
title: 快速使用教程 - Karing快速入门
description: Karing快速入门教程, 帮助您快速上手使用Karing。这里是Karing官方入门使用教程, 秉承简单实用的原则, 将尽量以简短的表述来说明.支持Clash/Clash.Meta、V2ray(支持批量)、Stash、Sing-box、Shadowsocks、Sub、Github配置链接及配置导入.
---

# 快速使用教程
- 这里是Karing官方入门使用教程, 秉承简单实用的原则, 将尽量以简短的表述来说明.

### 主要特性
- 使用简单, 快速上手, 一键起飞
- 支持Clash/Clash.Meta、V2ray(支持批量)、Stash、Sing-box、Shadowsocks、Sub、Github配置链接及配置导入.
- 支持主流协议, 包括 Shadowsocks,ShadowsocksR,VMess, Vless, Trojan, Tuic, Socks, Http, Hysteria, Hysteria2, Wireguard 等.
- 一套路由规则应用于多个订阅源, 自动选择高效节点.
  - 支持自定义路由规则组、节点组.
  - 为小白用户定制默认路由规则组 - 开箱即用.
- 内置支持 魔改版sing-box核心, 性能优越.
- 支持备份和同步, 一次配置多设备同步.
- 增加新手模式 配置更简单.

### 界面预览
![软件界面](/assets/qs-1.png#center "Karing软件界面")

## 一、 下载
### iOS(iphone/ipad)/Mac用户
- AppStore(搜索关键词 karing vpn)
    - https://apps.apple.com/us/app/karing/id6472431552
- TestFlight
    - https://testflight.apple.com/join/RLU59OsJ
- 注意: 需要非中国大陆AppStore账号
    - 不会注册?请参考 [水果商店](https://applego.win)

### Windows/Android/Harmony用户
- 下载最新版安装包
    - https://github.com/KaringX/karing/releases/latest
- Windows 建议下载安装包:文件名规则 karing_xxx_windows_x64.exe (xxx为版本号)
  - 下载后运行安装(如果遇到defender拦截,请点击'显示详细信息' - '仍要运行' 即可安装)
  - 如果github.com无法访问,也可使用 [win_x64 备用下载链接](https://wwic.lanzouo.com/b0zjy5n8f) 密码:33mf
- Android/Harmony 下载: karing_xxx_android_arm.apk
  - 如无法访问,也可使用 [android 备用下载链接](https://wwic.lanzouo.com/b0zjy5n8f) 密码:33mf
  - 其他应用市场: [APKPure](https://apkpure.com/p/com.nebula.karing)
  - <font color="red">小米/MIUI用户</font>: 如遇无法安装的情况, 先打开`飞行模式(断网)` 和 `关闭安全守护-增强防护` 再安装.
  - 鸿蒙系统可参考: [HarmonyOS安装karing](/harmonyos.md)

### 系统要求
-  Windows >= 10
-  Android >= 8
-  IOS >= 15
-  MacOS >= 12
-  TvOS >= 17

### 购买价格
- karing 全平台**免费**

:::tip 推广

- 这里收集了一些比较靠谱的收费节点, 请移步 [节点分享](/feed.md)
- 怎么获取免费流量, 请看 [新用户福利](/newuser.md)

:::



## 二、快速使用/quickstart
1. 点击APP左上角设置按钮 -> 进入 `添加配置`
    - 打开 `添加配置链接`(也可以通过导入或者扫描添加)
      - ![设置](/assets/qs-2.png "设置")
    - 将 Clash/V2ray/SS 等配置链接或者配置内容粘贴到输入框
        - 如果没有配置,可以通过 [新用户福利](/newuser.md) 申请
    - 点击右上角添加按钮
      - ![添加配置](/assets/qs-3.png "添加配置")


2. 返回到主屏
    - 默认已为您选择了一个服务器
        - 点击下方的服务器名称可以重新选择服务器
    - 点击 连接(开关按钮) 即可开始您的网络之旅了
        - ![连接](/assets/qs-4.png)

### 如何选择更快的服务器
- 点击主屏下方的服务器名称后，打开 '选择服务器'
- 点击 '延时检测' 按钮
  - ![节点列表](/assets/qs-5.png "节点列表")
- 稍等一会后, 每个服务器后面会展示对应服务器延时
    - 延时数值越低越好
    - 三角提示的表示有错误,服务器可能无法使用,点击后可以查看具体错误信息
- 选择一个延时数值低的服务器即可
- 建议使用 `自动选择` 服务器功能

### Apple TV(tvos)版本如何使用
- 下载安装Apple TV(tvos)及移动端Karing
- 移动端安装上述流程[1]添加配置
- 打开Apple TV端Karing
- 使用安装有Karing的移动设备扫描Apple TV端Karing的二维码
- 扫描连接成功后,移动端Karing会进入Apple TV控制中心
- 点击右上角的 [上传] 按钮,同步核心配置(同步后,Apple TV端Karing会多一个 [连接] 按钮)
- 回到Apple TV端Karing, 开启连接即可
- Apple TV端Karing连接成功后,可以在移动端Karing Apple TV控制中心查看相关状态信息


## 最后、常见问题/FAQ
- 请移步 [FAQ](/faq.md)

::: tip 🎉 节点推荐
- 🚀 [Cyberguard: 解锁Netflix/Hbo/Disney+/Dazn等流媒体,18.00元/月](https://www.cyberguard.best/#/register?code=XsreC0T5)
- 🚀 [优信云：IEPL/IPLC 高速专线，￥15.00/月](https://www.优信云.com/#/register?code=JRtE5uIV)<br>
- 🚀 [尔湾云：最大峰值1000Mbps，全流媒体及ChatGPT解锁！最低12元/月](https://erwan6.net/auth/register?code=BoObCd)<br>
- 🚀 [TNTCloud：新开机场，季付30，每月低至￥10.00/月](https://haibing822.tntvipaff.cc/#/register?code=GtjJVgml)<br>
- 🚀 [魔戒：不限时，不限制使用人数，直至套餐流量用完，低至￥14.9/130G流量](https://mojie.app/#/register?code=sSdtPtLo)<br>
- 🚀 [宝可梦星云：新用户首单：9折优惠码：9999，低至5.9/月 ](https://love.52pokemon.cc/register?code=56ERkkxp)
- 🚀 [NanoCloud: 绑定TG机器人每天领取免费流量，月付最低1元/月](https://edu.uodoo.bid/auth/register?code=JMiOQDHf)
:::