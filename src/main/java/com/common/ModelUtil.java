package com.common;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by ccj on 2017/3/9.
 */
public class ModelUtil {
    public static String getChild(String pid, HttpSession session){
        List<Map<String,Object>> auths=(List<Map<String,Object>>) session.getAttribute("auths");
        List<Map<String,Object>> child=new ArrayList<Map<String,Object>>();
        if (auths!=null&&auths.size()>0){
            for (Map<String,Object> auth:auths) {
                if (pid.equals(auth.get("parentId").toString())){
                    child.add(auth);
                }
            }
        }
        JSONArray array =new JSONArray();
        if (child!=null&&child.size()>0){
            for (Map<String,Object> cc:child) {
               array.add(new JSONObject(cc));
            }
        }
        System.out.println(array.toJSONString());
        return array.toJSONString();
    }
}
