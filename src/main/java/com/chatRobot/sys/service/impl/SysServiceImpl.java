package com.chatRobot.sys.service.impl;

import com.chatRobot.sys.dao.SysDao;
import com.chatRobot.sys.service.SysService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by ccj on 2017/2/28.
 */
@Service("sysService")
public class SysServiceImpl implements SysService {
    @Autowired
    private SysDao sysDao;
    @Override
    public Map<String, Object> login(String email) {
        return sysDao.getUserByName(email);
    }

    @Override
    public List<Map<String, Object>> getAuthByUserId(int userId) {
        List<Map<String, Object>> auths =sysDao.getAuthByUserId(userId);
        if (auths!=null&&auths.size()>0){
            Map<String,Object> father=null,son=null;
            List<Map<String,Object>> children=null;
            for (int i=0;i<auths.size();i++){
                father=auths.get(i);
                children=new ArrayList<Map<String,Object>>();
                for (int j=0;j<auths.size();j++){
                    son=auths.get(j);
                    if (father.get("id").toString().equals(son.get("parentId").toString())){
                        children.add(son);
                    }
                }
                father.put("children",children);
            }
        }
        return auths;
    }
    @Override
    public List<String> getResourceByUserId(int userId) {
        return sysDao.getResourceByUserId(userId);
    }
}
