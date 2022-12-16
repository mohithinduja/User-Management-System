package com.app.registration.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class LoginTime {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int id;
	@Temporal(TemporalType.TIMESTAMP)	
	@JsonFormat(pattern = "HH:mm:ss','dd-MM-yyyy", timezone = "India/Kolkata")
	@Column(nullable=false)
	@LastModifiedDate
	private Date loginTime;
	
	@OneToOne()
	private UserRegister user;
	
	public LoginTime(int id, Date loginTime, UserRegister user) {
		super();
		this.id = id;
		this.loginTime = loginTime;
		this.user = user;
	}
	
	public LoginTime() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getLoginTime() {
		return loginTime;
	}
	public void setLoginTime(Date loginTime) {
		this.loginTime = loginTime;
	}
	public UserRegister getUser() {
		return user;
	}
	public void setUser(UserRegister user) {
		this.user = user;
	}
	
}
