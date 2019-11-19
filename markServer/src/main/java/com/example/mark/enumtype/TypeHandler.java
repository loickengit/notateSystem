package com.example.mark.enumtype;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 8:04 PM 2019/11/8
 */
public class TypeHandler {

    public static final String sep = "&";

    public static final Set<String> opTypes = Stream.of("raw", "saliency", "crop", "scale", "seam").collect(Collectors.toSet());

    public static final Set<String> ratioTypes = Stream.of("1vs1", "3vs4", "4vs3", "9vs16", "16vs9", "21vs9").collect(Collectors.toSet());

    public static final Set<String> resolutionTypes = Stream.of("262", "352").collect(Collectors.toSet());

    public static final Set<String> proportionTypes = Stream.of("1", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9").collect(Collectors.toSet());

    public static final Set<String> datasetsTypes = Stream.of("SCR-N", "mangguo_tv_500").collect(Collectors.toSet());


    public static String getDatasetsType(String name){
        return getType(name, "datasets");
    }

    public static String getRatioType(String name){
        return getType(name, "ratio");
    }

    public static String getOpType(String name){
        return getType(name, "op");
    }

    public static String getResolutionType(String name){
        return getType(name, "resolution");
    }

    public static String getProportionType(String name){
        return getType(name, "proportion");
    }

    private static String getType(String name, String category){
        String[] types = name.split(sep);
        Set<String> sets = null;
        switch (category) {
            case "op":
                sets = opTypes;
                break;
            case "ratio":
                sets = ratioTypes;
                break;
            case "resolution":
                sets = resolutionTypes;
                break;
            case "proportion":
                sets = proportionTypes;
                break;
            case "datasets":
                sets = datasetsTypes;
                break;

        }

        for(String type: types){
            if (sets.contains(type))
                return type;
        }
        return "";
    }


}
