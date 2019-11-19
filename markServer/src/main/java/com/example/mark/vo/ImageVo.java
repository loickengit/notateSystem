package com.example.mark.vo;

import com.example.mark.enumtype.NotationStatus;
import com.example.mark.model.inner.Image;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 11:13 PM 2019/11/1
 */
@Data
@NoArgsConstructor
public class ImageVo {
    private String path;

    private String opType;

    private String ratio = "";

    private NotationStatus status = NotationStatus.DEFAULT;

    private int resolution = -1;

    public ImageVo(Image image){
        this.path = image.getPath();
        this.opType = image.getOpType();
        this.ratio = image.getRatio();
        this.status = image.getStatus();
    }
}
