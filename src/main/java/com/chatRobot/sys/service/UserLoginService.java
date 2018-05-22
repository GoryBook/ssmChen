package com.chatRobot.sys.service;

import java.util.List;
import java.util.Map;

public interface UserLoginService {
    List<Map<String, Object>> selectUesr(Map param);
}
