package com.udemy.backend.enums;

public enum Category {
    DEVELOPMENT("Development"),
    BUSINESS("Business"),
    FINANCE("Finance"),
    IT_AND_SOFTWARE("ItAndSoftware"),
    DESIGN("Design"),
    MARKETING("Marketing"),
    HEALTH_AND_FITNESS("HealthAndFitness"),
    MUSIC("Music");

    private final String value;

    Category(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return value;
    }
}
