package com.example.mark.services;

import com.example.mark.vo.SampleVo;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 11:45 PM 2019/11/1
 */
public interface SampleService {

    SampleVo getLatestSample(String username, String notateType);

    SampleVo getSample(String username, int sequenceNum, String notateTye);

    void submitNotation(SampleVo sampleVo);

    long getCount(String username, String notateType);
}
