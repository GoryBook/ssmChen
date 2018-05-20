package com.chatRobot.sys.controller;

import com.alibaba.druid.util.StringUtils;
import com.alibaba.fastjson.JSONObject;
import com.chatRobot.sys.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by ccj on 2017/3/2.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/toMain")
    public String toMain() {
        return "sys/user/user";
    }

    @RequestMapping(value = "/saveOrUpdateUser", produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String saveOrUpdateUser(@RequestParam("id") String id,
                                   @RequestParam("userName") String userName,
                                   @RequestParam("realName") String realName,
                                   @RequestParam("password") String password,
                                   @RequestParam("valid") String valid) {

        Map<String, Object> params = new HashMap<String, Object>();
        params.put("id", StringUtils.isEmpty(id) ? null : Integer.parseInt(id));
        params.put("userName", userName);
        params.put("realName", realName);
        params.put("password", password);
        params.put("valid", valid);
        JSONObject json = new JSONObject();
        int count = userService.saveOrUpdateUser(params);
        if (count == 2) {
            json.put("success", false);
            json.put("reason", "用户名已经存在！");
        }else if(count == 1){
            json.put("success", true);
            json.put("reason", "更改成功！");
        }else{
            json.put("success", true);
            json.put("reason", "添加成功！");
        }
        return json.toJSONString();
    }


    @RequestMapping(value = "/queryUser", produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String queryUser(@RequestParam("userName") String userName,
                            @RequestParam("realName") String realName,
                            @RequestParam("valid") String valid,
                            @RequestParam("page") int page,
                            @RequestParam("rows") int rows) {
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("userName", userName);
        params.put("realName", realName);
        params.put("valid", valid);
        params.put("rows", rows);
        int start = (page - 1) * rows;
        params.put("start", start);
        int total = userService.queryUserCount(params);
        List<Map<String, Object>> list = userService.queryUserList(params);
        JSONObject result = new JSONObject();
        result.put("total", total);
        result.put("rows", list);
        return result.toJSONString();
    }

    @RequestMapping(value = "/showRole", produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String showRole(@RequestParam("userId") int userId) {
        List<Map<String, Object>> list = userService.queryRoleOfUser(userId);
        JSONObject json = new JSONObject();
        json.put("total", list.size());
        json.put("rows", list);
        return json.toJSONString();
    }

    @RequestMapping(value = "/updateRoleOfUser", produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String updateRoleOfUser(@RequestParam("userId") int userId,
                                   @RequestParam("roleIds[]") List<Integer> roleIds) {
        List<Map<String, Object>> params = new ArrayList<Map<String, Object>>();
        if (roleIds != null && roleIds.size() > 0) {
            Map<String, Object> row = null;
            for (int roleId : roleIds) {
                row = new HashMap<String, Object>();
                row.put("roleId", roleId);
                row.put("userId", userId);
                params.add(row);
            }
        }
        int count = userService.updateRoleOfUser(params, userId);
        JSONObject result = new JSONObject();
        if (count > 0) {
            result.put("success", true);
        } else {
            result.put("success", false);
        }
        return result.toJSONString();
    }
}
