package com.entity.enumerate;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:READ"),
    ADMIN_CREATE("admin:CREATE"),
    ADMIN_UPDATE("admin:UPDATE"),
    ADMIN_DELETE("admin:DELETE"),

    USER_READ("staff:READ"),
    USER_CREATE("staff:CREATE"),
    USER_UPDATE("staff:UPDATE"),
    USER_DELETE("staff:DELETE")
    ;
    
    @Getter
    private final String permission;

}