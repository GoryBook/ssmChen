package com.chatRobot.sys.dao;

import java.util.List;
import java.util.Map;

/**
 * Created by ccj on 2017/2/25.
 */
public interface UserDao {

    /*实现添加*/
    public int addUser(Map<String, Object> params);

    public int updateUser(Map<String, Object> params);

    /*查询每页的条数*/
    public int queryUserCount(Map<String, Object> params);
    /*返回总条数*/
    public List<Map<String,Object>> queryUserList(Map<String, Object> params);

    /*这里是授予角色调出已经存在的数据*/
    public List<Map<String,Object>> queryValidRole();

    public List<Integer> queryOldRole(int userId);
    /*授予角色，先删除记录再添加选中的*/
    public int deleteOldRole(int userId);

    public int addNewRoleOfUser(List<Map<String, Object>> params);


    public Map<String,Object> selectUser(String userName);



}
