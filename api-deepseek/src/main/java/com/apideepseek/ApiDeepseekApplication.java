package com.apideepseek;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ApiDeepseekApplication {

   public static void main(String[] args) {
      SpringApplication.run(ApiDeepseekApplication.class, args);
   }

}
