package com.example.mark.enumtype;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 11:32 PM 2019/11/2
 */
public enum NotationType {
    /**
     *
     */
    RETARGETING("RETARGETING"),
    SALIENCY("SALIENCY"),
    ATTRIBUTE("ATTRIBUTE"),
    GRAIN("GRAIN");

    private String type;
    NotationType(String type){
        this.type = type;
    }

}
