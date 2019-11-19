package com.example.mark.model;

import com.example.mark.enumtype.NotationType;
import com.example.mark.model.inner.Image;
import com.example.mark.vo.ImageAttribute;
import com.example.mark.vo.SampleVo;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 10:20 PM 2019/11/1
 */
@Data
@NoArgsConstructor
public class SampleModel {

    public static final String IMG_NAME = "imgName";
    public static final String USERNAME_NAME = "username";
    public static final String SEQUENCE_NUM = "sequenceNum";
    public static final String IMAGES = "images";
    public static final String NOTATETYPE = "notateType";

    @Id
    private String imgName;

    private String path;

    private String username;

    private List<Image> images = new ArrayList<>();

    private int sequenceNum;

    private NotationType notateType = NotationType.RETARGETING;

    private String dataSet = "";

    private String method = "";

    private ImageAttribute attribute = new ImageAttribute();

    public SampleModel(SampleVo vo){
        this.imgName = vo.getImgName();
        this.username = vo.getUsername();
        this.sequenceNum = vo.getSequenceNum();
        this.notateType = vo.getNotateType();
        this.dataSet = vo.getDataSet();
        this.method = vo.getMethod();
        this.path = vo.getPath();
        this.attribute = vo.getAttribute();
        this.images = vo.getImages().stream().map(Image::new).collect(Collectors.toList());
    }
}
