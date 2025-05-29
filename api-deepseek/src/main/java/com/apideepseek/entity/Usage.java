package com.apideepseek.entity;

public record Usage (
        Integer prompt_tokens,
        Integer completion_tokens,
        Integer total_tokens,
        PromptToken prompt_tokens_details,
        Integer prompt_cache_hit_tokens,
        Integer prompt_cache_miss_tokens



) {


}
