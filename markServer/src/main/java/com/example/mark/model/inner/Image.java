package com.example.mark.model.inner;

import com.example.mark.enumtype.NotationStatus;
import com.example.mark.vo.ImageVo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 10:53 PM 2019/11/1
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Image {
    private String path;

    private String opType;

    private String ratio = "";

    private NotationStatus status = NotationStatus.DEFAULT;

    private String resolution = "";

    private String proportion = "";

    public Image(ImageVo vo){
        this.path = vo.getPath();
        this.opType = vo.getOpType();
        this.ratio = vo.getRatio();
        this.status = vo.getStatus();
    }
}
