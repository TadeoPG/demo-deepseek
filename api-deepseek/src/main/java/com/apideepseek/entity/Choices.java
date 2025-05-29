package com.apideepseek.entity;

public record Choices (
        Integer index,
        Message message,
        String logprobs,
        String finish_reason



) {

}
