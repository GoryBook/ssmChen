package com.chatRobot.sys.controller;
import com.alibaba.fastjson.JSONObject;
import com.chatRobot.sys.service.SysService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;



@Controller
@RequestMapping("/sys")
public class SysController {
    @Autowired
    private SysService sysService;

    @RequestMapping(value = "/login.do", produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String LoginDemo(@RequestParam("userName") String userName,
                            @RequestParam("password") String password,
                            HttpSession session,
                            HttpServletResponse response) throws Exception {
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        JSONObject object= new JSONObject();
        Map<String,Object> userMap=sysService.login(userName);
        if (userMap==null){
            object.put("success",false);

            object.put("reason","用户不存在");
        }else{
            if(userMap.get("valid").toString().equals("0")){
                object.put("success",false);
                object.put("reason","当前用户已经被冻结，请联系管理员！");
            }else{
                if (userMap.get("password").toString().equals(password)){
                    session.setAttribute("userName",userMap.get("userName"));
                    session.setAttribute("password",password);
/*获取当前用户的权限并存到session*/

                    int userId=Integer.parseInt(userMap.get("id").toString());
                    List<Map<String,Object>> auths=sysService.getAuthByUserId(userId);
                    session.setAttribute("auths",auths);
                    List<String> resources=sysService.getResourceByUserId(userId);
                    session.setAttribute("resources",resources);
                    object.put("success",true);
                }else{
                    object.put("success",false);
                    object.put("reason","密码错误");
                }
            }
        }
        return object.toJSONString();
    }

    @RequestMapping("/toMain")
    public String toMain() {
        return "sys/main";
    }

/*    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        session.removeAttribute("userName");
        session.invalidate();
        return "redirect:/login.jsp";
    }
    @RequestMapping("/ui")
    public String ui() {
        return "sys/main1";
    }*/
 /*@RequestMapping(value = "/regr", produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String registerDemo(@RequestParam("userName") String name,
                               @RequestParam("email") String email,
                               @RequestParam("password") String password,
                               HttpServletResponse response){

        SqlSession sqlSession = SqlSessonFactoryUtil.getSqlSessionFactory().openSession();
        UserDao dao = sqlSession.getMapper(UserDao.class);
        User user = new User();
        user.setName(name);
        user.setPassword(password);
        user.setEmail(email);
        JSONObject object = new JSONObject();
        User user1 = dao.getUserById(name);
        System.out.println(user);
        if (user1 == null) {
            int adduser= dao.addUser(user);
            sqlSession.commit();
            sqlSession.close();
            if (adduser==1){
                object.put("success", true);
            }else{
                object.put("success",false);
            }
        }else{
            object.put("success",false);
            object.put("reason","该用户已经存在");
        }

        return object.toJSONString();
    }
*/

}
