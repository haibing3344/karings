---
title: 华为鸿蒙系统安装代理软件karing
discription: 华为鸿蒙系统安装代理软件karing
tags: [HarmonyOS,karing,安装]
---
# 华为鸿蒙系统安装代理软件karing

## 准备
- 鸿蒙：
	- HarmonyOS 4.2.0
- karing：
	- [karing_1.1.3.706_android_arm64-v8a.apk](https://wwic.lanzouo.com/b0zjy5n8f) 密码:33mf
- 代理节点的订阅链接

## 步骤
### 1. 关闭鸿蒙系统 安全设置
- 打开华为应用市场，进入`我的` - 应用安全检测 - **右上角** 设置图标，
	- 关闭`应用安全检测`
	- 关闭`增强防护`
	- 如下图：![关闭安全设置](/assets/harmonyos-1.jpg "关闭安全设置")
- 关闭`增强防护`另一个入口是 设置 - 系统和更新 - 纯净模式

### 2. 安装karing
- 下载karing apk至存储中, 如果不能访问GitHub, 使用第三方云存储中转下, 比如百度云盘、阿里云盘之类.
- 打开系统自带的 `文件管理器`, 点击apk安装，允许安装应用
    - 如下图：![安装karing](/assets/harmonyos-2.jpg "安装karing")
- 出现`安全提醒` - 勾选 `了解此应用风险` - 点击 **继续安装**
    - 如下图: ![风险提醒](/assets/harmonyos-3.jpg "风险提醒")

### 3. karing配置
- 安装完成之后，打开karing，添加配置，配置填入准备好的`节点订阅链接`
- 返回karing首页, 点击 `连接`， 允许 `连接请求`
  - 如下图: ![连接请求](/assets/harmonyos-4.jpg "连接请求")

### 4.异常处理
#### 在线规则报错
- 第一次连接有可能报错, 错误信息类似下载 **geo-ip/geo-site** timeout 等...
  - 这是因为代理未连接之前，sing-box内核无法下载到在线规则
- 解决方法:
  - karing内置分流规则, 先禁用机场规则即可
  - 操作: 设置 - 分流 - `禁用ISP分流规则`
  - 重连: 返回首页，点击连接按钮

::: tip 🎉 节点推荐
- 🚀 [Cyberguard: 解锁Netflix/Hbo/Disney+/Dazn等流媒体,18.00元/月](https://c.jichangs.com/cyberguard)<br>
- 🚀 [优信云：IEPL/IPLC 高速专线，￥15.00/月](https://c.jichangs.com/youxinyun)<br>
- 🚀 [尔湾云：最大峰值1000Mbps，全流媒体及ChatGPT解锁！最低12元/月](https://c.jichangs.com/erwan)<br>
- 🚀 [TNTCloud：新开机场，季付30，每月低至￥10.00/月](https://c.jichangs.com/tnt)<br>
- 🚀 [魔戒：不限时，不限制使用人数，直至套餐流量用完，低至￥14.9/130G流量](https://c.jichangs.com/mojie)<br>
- 🚀 [宝可梦星云：新用户首单：9折优惠码：9999，低至5.9/月 ](https://c.jichangs.com/pokemon)<br>
- 🚀 [NanoCloud: 绑定TG机器人每天领取免费流量，月付最低1元/月](https://c.jichangs.com/nanocloud)<br>
- 🚀 [肥猫云：全专线中转隧道，高速大宽带不限设备数，低至6元/月（年付）](https://c.jichangs.com/feimao)<br>
- 🚀 [疾风云：包年 6.9折 优惠码: jf2025](https://c.jichangs.com/jifeng)<br>
- 🚀 [闪狐云：不限速，不限设备。高速专线。20元/月](https://c.jichangs.com/shy)
:::

::: warning  💬 交流群

- 🫂 Telegram:[@jichang360](https://t.me/jichang360)

:::


