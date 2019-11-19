package com.example.mark.enumtype;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 11:03 PM 2019/11/1
 */
public enum NotationStatus {
    /**
     * not notated
     */
    DEFAULT(0),

    GOOD(1),
    BAD(2),
    SALIENCY_MISS(3),
    SALIENCY_ERROR(4),
    MISS_AND_ERROR(5);

    private int val;
    NotationStatus(int val){
        this.val = val;
    }
}
