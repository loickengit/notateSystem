package com.example.mark.services.impl;

import com.example.mark.dao.UserModelDao;
import com.example.mark.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 1:39 AM 2019/11/2
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserModelDao userModelDao;

    @Override
    public boolean login(String username, String password) {
        return userModelDao.login(username, password);
    }
}
