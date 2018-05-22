package com.chatRobot.sys.dao;

import java.util.List;
import java.util.Map;

public interface UserLoginMapper {
    List<Map<String, Object>> selectUesr(Map param);
}
