package com.udemy.backend.exceptions;

public class ApiCommonException extends RuntimeException {

    private final String code;
    private final String message;

    public ApiCommonException(String code, String message) {
        super(message); // optional
        this.code = code;
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    @Override
    public String getMessage() {
        return message;
    }
}