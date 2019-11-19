package com.example.mark.vo;

import lombok.Data;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 9:35 PM 2019/11/11
 */
@Data
public class ImageAttribute {
    /**
     * none, one, many
     */
    private String faceCount = "default";

    /**
     * none, one, many
     */
    private String personCount = "default";

    /**
     * 几何显著物体 -1 没有 0 default，1 有
     */
    private String saliencyObject;

    /**
     * contain text
     */
    private String containText;

    /**
     * none, one, many
     */
    private String semanticsObject = "default";

    /**
     * none, little, more_than_half
     */
    private String backgroudRatio = "default";
}
