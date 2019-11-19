package com.example.mark.dao;

import com.example.mark.model.SampleModel;

import java.util.List;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 11:46 PM 2019/11/1
 */
public interface SampleModelDao {

    SampleModel findLatest(String username, String notateType);

    SampleModel findBySequenceNum(String username, int sequenceNum, String notateTye);

    SampleModel getNewOne(String username, int sequenceNum, String notateTye);

    long countAll(String username, String notateType);

    List<SampleModel> getAll(String username);

    SampleModel update(SampleModel model);

    List<String> getAllImageNames(String notateType);

    void batchInsert(List<SampleModel> models);


}
