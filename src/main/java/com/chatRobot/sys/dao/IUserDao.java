package com.chatRobot.sys.dao;

import com.chatRobot.sys.model.User;

public interface IUserDao {

    User selectUser(long id);

}