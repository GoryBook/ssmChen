package com.chatRobot.sys.service;

import java.util.List;
import java.util.Map;

/**
 * Created by ccj on 2017/2/28.
 */
public interface SysService {
    public Map<String,Object> login(String email);
    public List<Map<String,Object>> getAuthByUserId(int userId);
    public List<String> getResourceByUserId(int userId);
}
