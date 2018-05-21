<%--
  Created by IntelliJ IDEA.
  User: 陈成佳
  Date: 2017/3/12
  Time: 16:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <%
        String  path=request.getContextPath();
    %>
    <title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
    <meta name="keywords" content="Flat Dark Web Login Form Responsive Templates, Iphone Widget Template, Smartphone login forms,Login form, Widget Template, Responsive Templates, a Ipad 404 Templates, Flat Responsive Templates" />
    <link rel="stylesheet" type="text/css" href="../../static/css/style.css">
    <!--webfonts-->
    <!--//webfonts-->

    <script type="text/javascript" src="../../static/js/jquery-1.11.0.min.js"></script>

    <script type="text/javascript" src="../../static/js/jquery.cookie.js"></script>


    <script type="text/javascript">
        $(function () {
            /*引入保存的需要进行判断是否是勾选自动登陆的值*/
            var checked=$.cookie("ssm_remember");
            /*根据引入的值的状态来*/
            if (checked){
                /*把保存到cookie的值存到页面上*/
                var userName=$.cookie("ssm_username");
                var password=$.cookie("ssm_password");
                $("#userName").val(userName);
                $("#password").val(password);
                $("#remember-me").attr("checked",true);
            }
        })
        function login() {
            var userName=$("#userName").val();
            var password=$("#password").val();
            var checked=$("#remember-me").is(":checked");
            if(userName!=""&&userName!="用户名"&&password!=""&&password!="Password"){
                var data={};
                data.userName=userName;
                data.password=password;
                url="<%=path%>/sys/login.do";
                $.ajax({
                    url:url,
                    dataType:"json",
                    data:data,
                    success:function (response) {
                        console.log(response);
                            if(response.success){
                                if(checked){
                                    /*如果勾选记住密码则记住cookie，并且时间是7天*/
                                    $.cookie("ssm_username",userName,{expires:7});
                                    $.cookie("ssm_password",password,{expires:7});
                                    $.cookie("ssm_remember",checked,{expires:7});
                                }else{
                                    /*如果不勾选记住密码则立刻删除cookie*/
                                    $.cookie("ssm_username","",{expires:-1});
                                    $.cookie("ssm_password","",{expires:-1});
                                    $.cookie("ssm_remember","",{expires:-1});
                                }
                                /*    alert("登录成功");*/
                                window.location.href="<%=path%>/sys/toMain";
                            }else{
                                alert(response.reason);
                            }
                        }
                })
            }else{
                alert("用户名或者密码不能为空");
                return;
            }
        }
    </script>
</head>
<body>
<script>$(document).ready(function(c) {
    $('.close').on('click', function(c){
        $('.login-form').fadeOut('slow', function(c){
            $('.login-form').remove();
        });
    });
});
</script>
<!--SIGN UP-->
<h1><div style="font-family: 黑体;color: #0b0303">后台管理系统</div></h1>
<div class="login-form">
    <div class="close"> </div>
    <div class="head-info">
        <label class="lbl-1"> </label>
        <label class="lbl-2"> </label>
        <label class="lbl-3"> </label>
    </div>
    <div class="clear"> </div>
    <div class="avtar">
        <img src="../../static/img/images/avtar.png" />
    </div>
    <form>
        <input id="userName" type="text" class="text" value="用户名" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '用户名';}" >
        <div class="key">
            <input id="password" type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}">
        </div>
        <div>
                <input type="checkbox" id="remember-me"/>
                <label for="remember-me" style="color: #db56ef">确认保存信息7日</label>
        </div>
    </form>
    <div class="signin">
        <input type="submit" value="登录"  onclick="login()" >
    </div>
</div>

</body>
</html>