package com.app.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.registration.model.LoginTime;
import com.app.registration.model.UserRegister;

public interface LoginTimeRepository extends JpaRepository< LoginTime,Integer> {

}
