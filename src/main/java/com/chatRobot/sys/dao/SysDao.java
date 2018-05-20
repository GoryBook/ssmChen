package com.chatRobot.sys.dao;

import java.util.List;
import java.util.Map;

/**
 * Created by ccj on 2017/3/8.
 */
public interface SysDao {
    public Map<String,Object> getUserByName(String email);

    public List<Map<String,Object>> getAuthByUserId(int userId);

    public List<String> getResourceByUserId(int userId);
}
