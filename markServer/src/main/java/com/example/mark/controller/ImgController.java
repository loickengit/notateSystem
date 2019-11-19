package com.example.mark.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

/**
 * 1. @Description:
 * 2. @Author: TianGuisong
 * 3. @Date: Created in 4:34 PM 2019/11/11
 */
@RestController
public class ImgController {
    @GetMapping(value = "/img", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(@RequestParam String path) throws IOException {
        File fi = new File(path);
        byte[] fileContent = Files.readAllBytes(fi.toPath());
        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(fileContent);
    }
}
