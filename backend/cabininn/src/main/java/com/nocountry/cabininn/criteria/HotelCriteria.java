package com.nocountry.cabininn.criteria;

import io.github.jhipster.service.filter.IntegerFilter;
import io.github.jhipster.service.filter.StringFilter;

public class HotelCriteria {

    private StringFilter countryName;
    private StringFilter cityName;
    private IntegerFilter dailyPrice;

    public StringFilter getCountryName() {
        return countryName;
    }

    public void setCountryName(StringFilter countryName) {
        this.countryName = countryName;
    }

    public StringFilter getCityName() {
        return cityName;
    }

    public void setCityName(StringFilter cityName) {
        this.cityName = cityName;
    }

    public IntegerFilter getDailyPrice() {
        return dailyPrice;
    }

    public void setDailyPrice(IntegerFilter dailyPrice) {
        this.dailyPrice = dailyPrice;
    }

}