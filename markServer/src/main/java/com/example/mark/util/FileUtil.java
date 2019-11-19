package com.example.mark.util;

import java.io.*;

public class FileUtil {

    public static String readPlainText(String path) {
        StringBuilder content = new StringBuilder();
        BufferedReader br = null;
        try {
            br = new BufferedReader(new InputStreamReader(new FileInputStream(new File(path)), "UTF-8"));
            String lineContent = null;
            while ((lineContent = br.readLine()) != null) {
                content.append("\n" + lineContent);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return content.toString();
    }

    public static void writePlainText(String path, String text) {
        createIfNotExist(path);

        BufferedWriter bw = null;
        try {
            bw = new BufferedWriter(new FileWriter(path, false));
            bw.write(text);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (bw != null) {
                try {
                    bw.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    /**
     * @param path
     * @return true if not exist and successfully created; false if already exist
     */
    public static boolean createIfNotExist(String path) {
        File file = new File(path);
        // 判断目标文件是否存在
        if (!file.exists()) {
            // 判断目标文件所在的目录是否存在
            if (!file.getParentFile().exists()) {
                //如果目标文件所在的目录不存在，则创建父目录
                if (!file.getParentFile().mkdirs()) {
                    // TODO 创建目标文件所在目录失败
                }
            }
            try {
                file.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return true;
        } else {
            return false;
        }
    }

}
