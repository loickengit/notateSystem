package com.example.mark.controller;

import com.example.mark.services.SampleService;
import com.example.mark.vo.SampleVo;
import com.example.mark.vo.UserWork;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 12:09 AM 2019/10/22
 */
@RestController
public class SampleController {
    @Autowired
    SampleService sampleService;

    /**
     * get latest notated img and count
     * @param username
     * @return
     */
    @RequestMapping(value = "/img/getLatestWork", method = RequestMethod.GET)
    public UserWork getLatestWork(@RequestParam String username, @RequestParam String notateType) {
        UserWork work = new UserWork();

        SampleVo sample = sampleService.getLatestSample(username, notateType);
        long count = sampleService.getCount(username, notateType);

        work.setCount(count);
        work.setSample(sample);

        return work;
    }

    /**
     * get next img to notate by sequenceNum
     * @param username
     * @return
     */
    @RequestMapping(value = "/notation/getSample", method = RequestMethod.GET)
    public SampleVo getSample(@RequestParam String username,
                              @RequestParam int sequenceNum,
                              @RequestParam String notateType) {
        SampleVo vo = sampleService.getSample(username, sequenceNum, notateType);
        return vo == null ? new SampleVo() : vo;
    }

    /**
     * submit current img and return a new sample to notate
     * @param sampleVo
     * @return
     */
    @PostMapping(value = "/notation/submitNotation", consumes = "application/json", produces = "application/json")
    public boolean submitNotation(@RequestBody SampleVo sampleVo) {
        sampleService.submitNotation(sampleVo);
        return true;
    }

}
