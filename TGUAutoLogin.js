// ==UserScript==
// @name         TGU�Զ������¼��Ϣ
// @namespace    limonene0x
// @version      0.8
// @description  �Զ������ҵ��ѧ(TGU)ϵͳ�������¼��Ϣ
// @author       Limonene0x
// @match        *://*.tiangong.edu.cn/*
// @homepage     https://github.com/limonene0x/AutoTGUSystems/
// @license      MIT
// @grant        none
// ==/UserScript==

// ==���ܿ���ѡ��==
var course = true; // ����ϵͳ�������뽫 false ��Ϊ true
var jobs = true; // ��ҵϵͳ�������뽫 false ��Ϊ true
var real = true; // ʵ����ѧ����ϵͳ�������뽫 false ��Ϊ true
// ==/���ܿ���ѡ��==

// ==�û���Ϣ��������==
var stu_num = '' // ѧ�ţ����ڵ���������д��
var course_pwd = '' // ����ϵͳ���루���ڵ���������д��
var jobs_pwd = '' // ��ҵϵͳ���루���ڵ���������д��
var real_pwd = '' // ʵ����ѧϵͳ���루���ڵ���������д��
// ==/�û���Ϣ��������==

if (course) {
    try {
        if (window.location.href.indexOf("https://jwxs.tiangong.edu.cn/login?errorCode=") > -1 || window.location.href == "https://jwxs.tiangong.edu.cn/login") {
            if (stu_num == '' || course_pwd == '') {
                alert('���ڽű�������ѧ�Ż����ϵͳ���룡');

            } else {
                document.querySelector('#input_username').value = stu_num;
                document.querySelector('#input_password').value = course_pwd;
            }
        }
    } catch (e) {
        console.error(e);
    }
}

if (jobs) {
    try {
        if (window.location.href == "https://jobs.tiangong.edu.cn/system/login/login.html") {
            if (stu_num == '' || jobs_pwd == '') {
                alert('���ڽű�������ѧ�Ż��ҵϵͳ���룡');
            } else {
                document.getElementById('login_con_box_std').getElementsByClassName('login_input1').username.setAttribute("onfocus", "if(this.value=='������ѧ��'){this.value=''}");
                document.getElementById('login_con_box_std').getElementsByClassName('login_input1').username.value = stu_num;

                let tag = document.getElementById('login_con_box_std').getElementsByClassName('login_input1').password1;
                tag.parentNode.removeChild(tag);

                document.getElementById('login_con_box_std').getElementsByClassName('login_input1').password2.setAttribute("style", "display:block");
                document.getElementById('login_con_box_std').getElementsByClassName('login_input1').password2.value = jobs_pwd;

                document.getElementById('login_con_box_std').getElementsByClassName('login_input1').password2.setAttribute("onfocus", "if(this.value=='����������'){this.value='';this.type='password'}");
                document.getElementById('login_con_box_std').getElementsByClassName('login_input1').password2.setAttribute("onblur", "if(this.value==''){this.value='����������';this.type='text'}");
            }
        }
    } catch (e) {
        console.error(e);
    }
}

if (real) {
    try {
        if (window.location.href.indexOf("http://bsgl.tiangong.edu.cn/aexp/") > -1) {
            if (stu_num == '' || real_pwd == '') {
                alert('���ڽű�������ѧ�Ż�ʵ����ѧϵͳ���룡');
            } else {
                document.querySelector('.juese').value = '2';
                document.loginForm.username.value = stu_num;
                document.loginForm.password.value = real_pwd;
            }
        }
    } catch (e) {
        console.error(e);
    }
}