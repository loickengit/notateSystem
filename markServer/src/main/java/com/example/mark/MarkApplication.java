package com.example.mark;

import com.example.mark.util.LoadSaliencyProcess;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class MarkApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(MarkApplication.class, args);
        context.getBean(LoadSaliencyProcess.class).processDir();
    }

}
