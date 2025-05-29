package com.apideepseek.config;


import com.apideepseek.dto.request.ContentApiRequest;
import com.apideepseek.dto.response.RequestApiDeepseek;
import com.apideepseek.dto.response.ResponseApiDeepseek;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "api-deepseek", url = "https://api.deepseek.com/chat/completions")
public interface ApiDeepSeek {

   @PostMapping()
   ResponseApiDeepseek getContainPrompt(@RequestBody RequestApiDeepseek requestApiDeepseek, @RequestHeader(name = "Authorization") String authorization);

}
