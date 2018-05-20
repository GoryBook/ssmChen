package com.chatRobot.sys.service;

import java.util.List;
import java.util.Map;

/**
 * Created by ccj on 2017/3/8.
 */
public interface UserService {
    public int saveOrUpdateUser(Map<String, Object> params);

    public int queryUserCount(Map<String, Object> params);

    public List<Map<String,Object>> queryUserList(Map<String, Object> params);

    public List<Map<String,Object>> queryRoleOfUser(int userId);

    public int updateRoleOfUser(List<Map<String, Object>> params, int userId);

    public Map<String,Object> selectUser(String userName);



}
