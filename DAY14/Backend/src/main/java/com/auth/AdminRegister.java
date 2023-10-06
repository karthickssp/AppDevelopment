package com.auth;

import com.entity.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 
public class AdminRegister {
	
    private String adminId;
    private String adminpassword;

    private Role adminrole;
}
