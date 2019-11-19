package com.example.mark.dao.impl;

import com.example.mark.dao.SampleModelDao;
import com.example.mark.model.SampleModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 11:46 PM 2019/11/1
 */
@Component
public class SampleModelDaoImpl implements SampleModelDao {

    @Autowired
    private MongoTemplate template;


    @Override
    public SampleModel findLatest(String username, String notateType) {
        Query query = new Query();
        query.addCriteria(Criteria.where(SampleModel.USERNAME_NAME).is(username)
                .and(SampleModel.NOTATETYPE).is(notateType));

        query.with(Sort.by(Sort.Direction.DESC, SampleModel.SEQUENCE_NUM)).limit(1);
        return template.findOne(query, SampleModel.class);
    }

    @Override
    public SampleModel findBySequenceNum(String username, int sequenceNum, String notateTye) {
        Query query = new Query();
        query.addCriteria(Criteria.where(SampleModel.USERNAME_NAME).is(username)
                .and(SampleModel.SEQUENCE_NUM).is(sequenceNum)
                .and(SampleModel.NOTATETYPE).is(notateTye));
        return template.findOne(query, SampleModel.class);
    }

    @Override
    public SampleModel getNewOne(String username, int sequenceNum, String notateTye) {
        Object obj = new Object();
        Query query = new Query();
        query.addCriteria(Criteria.where(SampleModel.USERNAME_NAME).is(null).and(SampleModel.NOTATETYPE).is(notateTye));

        synchronized (obj) {
            SampleModel model = template.findOne(query, SampleModel.class);
            if (model == null)
                return null;
            model.setUsername(username);
            model.setSequenceNum(sequenceNum);
            return update(model);
        }
    }

    @Override
    public long countAll(String username, String notateType) {
        Query query = new Query();
        query.addCriteria(Criteria.where(SampleModel.USERNAME_NAME).is(username).and(SampleModel.NOTATETYPE).is(notateType));
        return template.count(query, SampleModel.class);
    }

    @Override
    public List<SampleModel> getAll(String username) {
        Query query = new Query();
        query.addCriteria(Criteria.where(SampleModel.USERNAME_NAME).is(username));

        return template.find(query, SampleModel.class);
    }

    @Override
    public SampleModel update(SampleModel model) {
        return template.save(model, "sampleModel");
    }

    @Override
    public List<String> getAllImageNames(String notateType) {
        Query query = new Query();
        query.addCriteria(Criteria.where(SampleModel.NOTATETYPE).is(notateType));
        query.fields().include(SampleModel.IMG_NAME);
        return template.find(query, SampleModel.class).stream().map(model -> model.getImgName()).collect(Collectors.toList());
    }

    @Override
    public void batchInsert(List<SampleModel> models) {
        template.insert(models, SampleModel.class);
    }
}
