# 自动填写天津工业大学(Tiangong University, TGU)各个网站账号的油猴脚本

随着时代的发展，我们在大学中的学习逐渐变得离不开各种教学系统的支持，比如使用教务系统查询成绩、进行选课操作；利用实践教学管理系统进行大创项目、完成毕业论文的管理；利用就业指导中心的就业系统完成就业的简历投递、电子合同的签署等。
在信息安全问题日益突出的今天，天津工业大学也如同很多大学一样，逐渐提升自身的网站系统安全性，这其中最明显但也是最给同学们带来烦恼的事情就是各个网站的密码变得有很高的安全要求，十分不容易被记住。
基于以上原因，本作者开发了自动填写天津工业大学各个网站账号和密码的油猴脚本TGUAutoLogin（本项目）。

## 使用方法

> 注意：脚本更新后，用户信息部分内容可能被覆盖，请重新输入个人信息。

需要您填写的信息共有两部分:

### 第一部分：功能需求

请您选择您需要开启的功能，并将相应位置上的`false`更改为`true`，以便您能够使用相应功能。

```js
// ==功能开启选择==
var course = false; // 教务系统：开启请将 false 改为 true
var jobs = false; // 就业系统：开启请将 false 改为 true
var real = false; // 实践教学管理系统：开启请将 false 改为 true
// ==/功能开启选择==
```

### 第二部分：用户信息

请您在对应位置输入您的个人信息（包括学号、各个系统的密码）。
如您关闭了某系统的自动填充功能，则不需要填写对应系统的密码。

```js
// ==用户信息输入区域==
var stu_num = '' // 学号（请在单引号内填写）
var course_pwd = '' // 教务系统密码（请在单引号内填写）
var jobs_pwd = '' // 就业系统密码（请在单引号内填写）
var real_pwd = '' // 实践教学系统密码（请在单引号内填写）
// ==/用户信息输入区域==
```

## 实现说明

> 教务系统和实践教学管理系统的实现相对简单，在此不做过多说明，此处重点说明就业系统对页面进行的修改。

在就业系统登录页面，该脚本仅对面向群体（学生）进行了页面修改，对于教师、企业等页面未作改动。

原页面的实现使用了一个用户名输入框和两个密码框，在实现该系统自动填充登录信息的过程中，将原有的一个密码框显示提示，另一个密码输入密码并通过切换进行显示的实现效果做了较大的更改。密码框1被我删除，并通过密码框2的聚焦与否js来对输入框的类型以及输入框的内容进行互换，从而实现与原页面相同的显示效果，又不影响用户的二次输入。

---

## 新版变化

> v0.8版本为大版本切换，将独立脚本合并为单一脚本执行，便于导入使用。

v0.7版本之前每个系统的脚本以单独编写的形式存在。
v0.8版本之后已经将其合并到一个脚本中，方便使用。
v0.9版本对学校可能进行的http和https协议启用做了适配，两个协议均可匹配到页面，防止因为启用协议变更导致插件无法使用。
如无网站结构变化，本版本(v0.9.1)预计为最终版本。

### v0.8大版本变化如下

1. 该版本将原有独立脚本合并到了同一个脚本中。
2. 该版本未添加信息门户自动登录功能。
   > 信息门户网站现已转变为仅能通过内网访问，且使用场景很少，因此不再添加自动登录功能，如有需要请下载v0.7版本脚本使用。
3. 该版本将各系统信息输入区域合并，只需输入一次学号信息即可。
4. 删除了脚本中的一些不必要代码。

## 未来功能

如果未来还有某些系统需要开发类似的功能，会尽力将其纳入脚本中，欢迎提交需求。

---

我的博客：[limonene0x](https://www.limonene0x.cn/)
