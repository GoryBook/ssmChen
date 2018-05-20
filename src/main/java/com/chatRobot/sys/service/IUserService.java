package com.chatRobot.sys.service;

import com.chatRobot.sys.model.User;

public interface IUserService {

    public User selectUser(long userId);

}