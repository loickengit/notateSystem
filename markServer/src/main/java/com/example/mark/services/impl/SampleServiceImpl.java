package com.example.mark.services.impl;

import com.example.mark.dao.SampleModelDao;
import com.example.mark.model.SampleModel;
import com.example.mark.services.SampleService;
import com.example.mark.vo.SampleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 11:33 PM 2019/11/1
 */
@Service
public class SampleServiceImpl implements SampleService {

    @Autowired
    SampleModelDao modelDao;

    @Override
    public SampleVo getLatestSample(String username, String notateType) {
        SampleModel model = modelDao.findLatest(username, notateType);
        return model == null ? getSample(username, 1, notateType): new SampleVo(model);
    }


    @Override
    public SampleVo getSample(String username, int sequenceNum, String notateTye) {
        SampleModel model = modelDao.findBySequenceNum(username, sequenceNum, notateTye);
        model = model == null ? modelDao.getNewOne(username, sequenceNum, notateTye):model;
        return model == null ? null : new SampleVo(model);
    }

    @Override
    public void submitNotation(SampleVo sampleVo) {
        SampleModel model = new SampleModel(sampleVo);
        modelDao.update(model);
    }

    @Override
    public long getCount(String username, String notateType) {
        return modelDao.countAll(username, notateType);
    }
}
