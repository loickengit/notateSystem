package com.example.mark.util;

import com.example.mark.dao.SampleModelDao;
import com.example.mark.enumtype.NotationType;
import com.example.mark.enumtype.TypeHandler;
import com.example.mark.model.SampleModel;
import com.example.mark.model.inner.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 10:59 PM 2019/11/2
 */
@Component
public class LoadSaliencyProcess {

    @Autowired
    private SampleModelDao sampleModelDao;

//    private final static String rootpath = "/Users/loick/Documents/magus/";
    public static final String rootpath = "/mnt/magus/storage/Notation/";

    private final static String saliencyRaw = "imgs/saliencyImg/raw/";
    private final static String saliencyResults = "imgs/saliencyImg/results/";
    private final static String retargetingRaw = "imgs/retargeting/raw/";
    private final static String retargetingResults = "imgs/retargeting/results/";

    private final static String attributeRaw = "imgs/attribute/";

    private final static String grainRaw = "imgs/grain/raw";
    private final static String grainResults = "imgs/grain/results";

    public void processDir(){
//        insertDB(NotationType.SALIENCY);
        insertDB(NotationType.RETARGETING);
//        insertDB(NotationType.ATTRIBUTE);
        System.out.println("load success");
    }

    public void insertDB(NotationType type){
        List<String> names = sampleModelDao.getAllImageNames(type.toString());
        Set<String> snames = new HashSet<>();
        snames.addAll(names);

        List<SampleModel> models = null;
        if (type.equals(NotationType.ATTRIBUTE))
            models = loadAttribute();
        else
            models = loadAll(type);
        System.out.println("presize " + models.size());
        models = models.stream().filter(model -> !snames.contains(model.getImgName())).collect(Collectors.toList());
        sampleModelDao.batchInsert(models);
        System.out.println(models.size());
    }

    public List<SampleModel> loadAttribute(){
        File[] files = new File(rootpath + attributeRaw).listFiles();
        if (files == null)
            return new ArrayList();

        List<SampleModel> models = new ArrayList<>();
        for (int i = 0; i<files.length; i++){
            SampleModel model = new SampleModel();
            model.setNotateType(NotationType.ATTRIBUTE);
            model.setImgName("a_" + files[i].getName());
            model.setPath(attributeRaw+files[i].getName());

            models.add(model);
        }

        return models;
    }

    public static List<SampleModel> loadAll(NotationType type){
        String rawPath = type.equals(NotationType.RETARGETING) ? retargetingRaw : saliencyRaw;
        String resultsPath = type.equals(NotationType.RETARGETING) ? retargetingResults : saliencyResults;
        File[] rawfiles = new File(rootpath + rawPath).listFiles();
        File[] resfiles = new File(rootpath + resultsPath).listFiles();

        if (rawfiles == null)
            return new ArrayList<>();

        List<SampleModel> models = new ArrayList<>();

        for (int i = 0; i < rawfiles.length; i++){
            String name = rawfiles[i].getName();
            if (name.startsWith("."))
                continue;

            // new model
            SampleModel model = new SampleModel();
            model.setImgName("r_" + name);
            model.setNotateType(type);

            // raw
            List<Image> images = new ArrayList<>();
            Image rawimg = new Image();
            rawimg.setPath(rawPath + name);
            rawimg.setOpType("RAW");
            images.add(rawimg);

            // res imgs
            String match = name.substring(name.lastIndexOf("&"));
            for (int j = 0; j < resfiles.length; j++){
                String resname = resfiles[j].getName();
                if (resname.endsWith(match)){
                    Image img = new Image();
                    img.setPath(resultsPath + resname);
                    img.setOpType(TypeHandler.getOpType(resname));
                    img.setProportion(TypeHandler.getProportionType(resname));
                    img.setRatio(TypeHandler.getRatioType(resname));
                    img.setResolution(TypeHandler.getResolutionType(resname));
                    images.add(img);
                }
            }
            model.setImages(images);
            models.add(model);
        }
        return models;
    }

    public static void main(String[] args) {
        SampleModel model = loadAll(NotationType.RETARGETING).get(0);
//        System.out.println(model.getDataSet());
        System.out.println(model);
    }
}
