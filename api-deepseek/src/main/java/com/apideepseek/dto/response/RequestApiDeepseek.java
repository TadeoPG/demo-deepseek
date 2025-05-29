package com.apideepseek.dto.response;

import com.apideepseek.dto.request.ContentApiRequest;
import java.util.List;
import lombok.Builder;

@Builder
public record RequestApiDeepseek (
        String model,
        List <ContentApiRequest> messages,
        String stream
){

}
