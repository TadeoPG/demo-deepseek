package com.apideepseek.service;

import com.apideepseek.config.ApiDeepSeek;
import com.apideepseek.dto.request.ContentApiRequest;
import com.apideepseek.dto.response.RequestApiDeepseek;
import com.apideepseek.dto.response.ResponseApiDeepseek;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class ApiDepseekService {

   private final ApiDeepSeek apiDeepSeek;

   public ApiDepseekService(ApiDeepSeek apiDeepSeek) {
      this.apiDeepSeek = apiDeepSeek;
   }

   public ResponseApiDeepseek generatedConsultApi(RequestApiDeepseek requestApiDeepseek){
      return apiDeepSeek.getContainPrompt(requestApiDeepseek);
   }
}
