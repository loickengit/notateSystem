package com.example.mark.controller;

import com.example.mark.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 12:04 AM 2019/11/2
 */
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/user/login", method = RequestMethod.GET)
    public boolean login(@RequestParam String username, @RequestParam String password) {
        return userService.login(username, password);
    }
}
