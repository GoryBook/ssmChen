package com.chatRobot.sys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/adminlogin")
public class AdminController {

    @RequestMapping("/admin_login")
    public String member_login(HttpServletRequest request, HttpSession httpSession){
        return "/login";
    }


}