// ==UserScript==
// @name         TGU_就业系统自动输入信息 By Limonene0x
// @namespace    limonene0x
// @version      0.7
// @description  在就业系统要求复杂密码后实现自动输入学生账号密码，避免每次重复手动输入，本地运行明文存储密码备忘（请注意尽量不要让不信任的人接触你的电脑，防止个人信息泄露）。
// @author       Limonene0x
// @match        *://jobs.tiangong.edu.cn/system/login/login.html
// @homepage     https://github.com/limonene0x
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ==学生信息输入区，填写完毕后请保存==
    var stu_num = '' // 学生学号（请在单引号内填写）
    var stu_pwd = '' // 学生密码（请在单引号内填写）
    var over_notice = 0 // 填写完毕提示框：1为弹出提示；0为不弹出提示
        // ==/学生信息输入区，填写完毕后请保存==
    if (stu_num == '' || stu_pwd == '') {
        alert("您的脚本中还未填写学号及密码！若要使用脚本登录，请填写保存后刷新页面。");
        var infoalert = 1;
    }

    // Code here
    if (infoalert != 1) {
        document.getElementById('login_con_box_std').getElementsByClassName('login_input1').username.setAttribute("onfocus", "if(this.value=='请输入学号'){this.value=''}");
        document.getElementById('login_con_box_std').getElementsByClassName('login_input1').username.value = stu_num;

        var tag = document.getElementById('login_con_box_std').getElementsByClassName('login_input1').password1;
        tag.parentNode.removeChild(tag);

        document.getElementById('login_con_box_std').getElementsByClassName('login_input1').password2.setAttribute("style", "display:block");
        document.getElementById('login_con_box_std').getElementsByClassName('login_input1').password2.value = stu_pwd;

        var value_password = document.getElementById('login_con_box_std').getElementsByClassName('login_input1').password2.value;
        document.getElementById('login_con_box_std').getElementsByClassName('login_input1').password2.setAttribute("onfocus", "if(this.value=='请输入密码'){this.value='';this.type='password'}");
        document.getElementById('login_con_box_std').getElementsByClassName('login_input1').password2.setAttribute("onblur", "if(this.value==''){this.value='请输入密码';this.type='text'}");
    }

    if (over_notice != 0 && infoalert != 1) {
        setTimeout(function() {
            alert("您的学号和密码已经输入完毕，请填写验证码登录");
        }, 10);
    }
})();
