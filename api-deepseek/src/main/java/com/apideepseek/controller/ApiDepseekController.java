package com.apideepseek.controller;


import com.apideepseek.dto.request.ContentApiRequest;
import com.apideepseek.dto.response.RequestApiDeepseek;
import com.apideepseek.dto.response.ResponseApiDeepseek;
import com.apideepseek.service.ApiDepseekService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ai/v1")
public class ApiDepseekController {

   private final ApiDepseekService apiDepseekService;

   public ApiDepseekController(ApiDepseekService apiDepseekService) {
      this.apiDepseekService = apiDepseekService;
   }

   @PostMapping("/message")
   public ResponseApiDeepseek generatedConsultApi(@RequestBody RequestApiDeepseek requestApiDeepseek) {
      return apiDepseekService.generatedConsultApi(requestApiDeepseek);
   }



}
