package com.chatRobot.sys.service.impl;

import com.chatRobot.sys.dao.UserDao;
import com.chatRobot.sys.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Map;

/**
 * Created by ccj on 2017/3/8.
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    /*增加跟修改窗口*/
    @Override
    public Map<String, Object> selectUser(String userName) {
        if (userName != null && !"".equals(userName)) {
            return userDao.selectUser(userName);
        } else {
            return null;
        }
    }

    @Override
    public int saveOrUpdateUser(Map<String, Object> params) {
        if (params.get("id") != null && !StringUtils.isEmpty(params.get("id"))) {
            if (this.selectUser(params.get("userName").toString()) != null&&
                    !this.selectUser(params.get("userName").toString()).get("id").equals(params.get("id"))) {
                return 2;
            }else{
                userDao.updateUser(params);
                return 1;
            }

        } else {
            if (this.selectUser(params.get("userName").toString()) != null) {
                return 2;
            } else {
                userDao.addUser(params);
                return 3;
            }
        }
    }


    @Override
    public List<Map<String, Object>> queryUserList(Map<String, Object> params) {
        return userDao.queryUserList(params);
    }

    @Override
    public int queryUserCount(Map<String, Object> params) {
        return userDao.queryUserCount(params);
    }

    @Override
    public List<Map<String, Object>> queryRoleOfUser(int userId) {
        List<Map<String, Object>> roles = userDao.queryValidRole();
        List<Integer> oldRoles = userDao.queryOldRole(userId);
        if (roles != null && roles.size() > 0) {
            for (Map<String, Object> role : roles) {
                int roleId = Integer.parseInt(role.get("id").toString());
                if (oldRoles.contains(roleId)) {
                    role.put("checked", true);
                }
            }
        }
        return roles;
    }

    /*授予角色，先删除记录再添加选中的*/
    @Override
    @Transactional
    public int updateRoleOfUser(List<Map<String, Object>> params, int userId) {
        userDao.deleteOldRole(userId);
        return userDao.addNewRoleOfUser(params);
    }


}
