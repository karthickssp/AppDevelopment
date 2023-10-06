package com.entity;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.entity.enumerate.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@SuppressWarnings("serial")
@Entity
@Table(name = "gardenadmins")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class Admin implements UserDetails{
	
	@Id
    @Column(nullable = false, unique=true)
    private String adminId;

    
    private String adminpassword;

    @Enumerated (EnumType.STRING)
    private Role adminrole;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        
        return adminrole.getAuthorities();
    }


    @Override
    public String getUsername() {
        
        return adminId;
    }
    @Override
    public String getPassword() {
        
        return adminpassword;
    }



    @Override
    public boolean isAccountNonExpired() {
        
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        
        return true;
    }

    @Override
    public boolean isEnabled() {
       
        return true;
    }

}
