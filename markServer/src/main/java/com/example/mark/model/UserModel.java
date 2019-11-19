package com.example.mark.model;

import lombok.Data;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 11:51 PM 2019/11/1
 */
@Data
public class UserModel {

    public static final String USERNAME = "username";
    public static final String PASSWORD = "password";

    private String username;

    private String password;

}
