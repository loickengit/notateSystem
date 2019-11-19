package com.example.mark.vo;

import com.example.mark.enumtype.NotationType;
import com.example.mark.model.SampleModel;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 10:12 PM 2019/11/1
 */
@Data
@NoArgsConstructor
public class SampleVo {
    @Id
    private String imgName;

    private String path;

    private String username;

    private List<ImageVo> images = new ArrayList<>();

    /**
     * x-th sample user notated.
     */
    private int sequenceNum;

    private NotationType notateType = NotationType.RETARGETING;

    private String dataSet = "";

    private String method = "";

    private ImageAttribute attribute = new ImageAttribute();

    public SampleVo(SampleModel model){
        this.imgName = model.getImgName();
        this.username = model.getUsername();
        this.sequenceNum = model.getSequenceNum();
        this.notateType = model.getNotateType();
        this.dataSet = model.getDataSet();
        this.method = model.getMethod();
        this.attribute = model.getAttribute();
        this.path = model.getPath();
        this.images = model.getImages().stream().map(ImageVo::new).collect(Collectors.toList());
    }
}
