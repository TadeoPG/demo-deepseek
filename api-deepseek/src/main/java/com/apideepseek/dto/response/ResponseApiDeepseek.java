package com.apideepseek.dto.response;

import com.apideepseek.entity.Choices;
import com.apideepseek.entity.Usage;
import java.util.List;

public record ResponseApiDeepseek(
        String id,
        String object,
        Long created,
        String model,
        List <Choices> choices,
        Usage usage,
        String system_fingerprint
) {

}
