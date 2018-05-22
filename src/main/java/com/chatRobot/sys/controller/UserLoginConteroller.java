package com.chatRobot.sys.controller;


import com.alibaba.druid.util.StringUtils;
import com.alibaba.fastjson.JSONObject;
import com.chatRobot.sys.service.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/sys")
public class UserLoginConteroller {
    @Autowired
    private UserLoginService userLoginService;
    @RequestMapping("/admin_login")
    public String member_login( HttpServletRequest request, HttpSession httpSession,
                               @RequestParam("id") String id,
                               @RequestParam("userName") String userName,
                               @RequestParam("realName") String realName,
                               @RequestParam("password") String password,
                               @RequestParam("valid") String valid){
        JSONObject json = new JSONObject();
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("userName", userName);
        List<Map<String, Object>> mc=userLoginService.selectUesr(params);
        if (mc!=null&&mc.size()>0){
            json.put("success", true);
        }
        return json.toJSONString();


    }
}
