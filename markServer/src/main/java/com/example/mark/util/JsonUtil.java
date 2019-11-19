package com.example.mark.util;

import com.alibaba.fastjson.JSONObject;

public class JsonUtil {

    public static JSONObject readJsonObject(String fpath) {
        return JSONObject.parseObject(FileUtil.readPlainText(fpath));
    }

    public static void writeJsonObject(String fpath, JSONObject jsonObject) {
        FileUtil.writePlainText(fpath, jsonObject.toJSONString());
    }

}
