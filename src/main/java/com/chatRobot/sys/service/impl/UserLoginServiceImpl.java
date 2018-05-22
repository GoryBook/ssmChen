package com.chatRobot.sys.service.impl;

import com.chatRobot.sys.dao.UserLoginMapper;
import com.chatRobot.sys.service.UserLoginService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service("userLoginService")
public class UserLoginServiceImpl implements UserLoginService {
    @Resource
    private UserLoginMapper userLoginMapper;
    @Override
    public List<Map<String, Object>> selectUesr(Map param) {
        return userLoginMapper.selectUesr(param);
    }
}
