package com.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")

public class ManagementController {
     @GetMapping
    public String get(){
        return "Get:: user controller";
    }
    @PostMapping
    public String post(){
        return "Post:: user controller";
    }

    @PutMapping
    public String update(){
        return "Put:: user controller";
    }
    @DeleteMapping
    public String delete(){
        return "Delete:: user controller";
    }
}
