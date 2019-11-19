package com.example.mark.dao.impl;

import com.example.mark.dao.UserModelDao;
import com.example.mark.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;


/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 11:52 PM 2019/11/1
 */
@Component
public class UserModelDaoImpl implements UserModelDao {

    @Autowired
    MongoTemplate template;

    @Override
    public boolean login(String username, String password) {
        Query query = new Query();
        query.addCriteria(Criteria.where(UserModel.USERNAME).is(username).and(UserModel.PASSWORD).is(password));

        return template.find(query, UserModel.class).size() > 0;
    }
}
