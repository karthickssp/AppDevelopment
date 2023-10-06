package com.config;

import static com.entity.enumerate.Permission.ADMIN_CREATE;
import static com.entity.enumerate.Permission.ADMIN_DELETE;
import static com.entity.enumerate.Permission.ADMIN_READ;
import static com.entity.enumerate.Permission.ADMIN_UPDATE;
import static com.entity.enumerate.Permission.USER_CREATE;
import static com.entity.enumerate.Permission.USER_DELETE;
import static com.entity.enumerate.Permission.USER_READ;
import static com.entity.enumerate.Permission.USER_UPDATE;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.entity.enumerate.Role;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {
    
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;


    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
       http
       .csrf(csrf -> csrf.disable())
       .authorizeHttpRequests(authorize -> authorize.requestMatchers("/api/v1/auth/**").permitAll()
       //Roles & Permissions
       .requestMatchers("/api/v1/user/**").hasAnyRole(Role.ADMIN.name(), Role.USER.name())
       
       
       .requestMatchers(HttpMethod.GET, "/api/v1/user/**").hasAnyAuthority(ADMIN_READ.name(), USER_READ.name())
       .requestMatchers(HttpMethod.POST, "/api/v1/user/**").hasAnyAuthority(ADMIN_CREATE.name(), USER_CREATE.name())
       .requestMatchers(HttpMethod.PUT, "/api/v1/user/**").hasAnyAuthority(ADMIN_UPDATE.name(), USER_UPDATE.name())
       .requestMatchers(HttpMethod.DELETE, "/api/v1/user/**").hasAnyAuthority(ADMIN_DELETE.name(), USER_DELETE.name())
       
    //    .requestMatchers("/api/v1/admin/**").hasRole(Role.ADMIN.name())
    //    .requestMatchers(HttpMethod.GET, "api/v1/admin/**").hasAuthority(Permission.ADMIN_READ.name())
    //    .requestMatchers(HttpMethod.POST, "api/v1/admin/**").hasAuthority(Permission.ADMIN_CREATE.name())
    //    .requestMatchers(HttpMethod.PUT, "api/v1/admin/**").hasAuthority(Permission.ADMIN_UPDATE.name())
    //    .requestMatchers(HttpMethod.DELETE, "api/v1/admin/**").hasAuthority(Permission.ADMIN_DELETE.name())
       
       .anyRequest().authenticated())
       .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
       .authenticationProvider(authenticationProvider)
       .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();

    }
}