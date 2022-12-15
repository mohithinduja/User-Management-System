package com.app.registration.model;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class Auditable {

@Temporal(TemporalType.TIMESTAMP)	
//@JsonFormat(pattern = "HH:mm:ss','dd-MM-yyyy", timezone = "India/Kolkata")
@Column(nullable=false)
@LastModifiedDate
protected Date lastLogin;

public Auditable(Date lastLogin) {
	super();
	this.lastLogin = lastLogin;
}

public Auditable() {
	super();
	// TODO Auto-generated constructor stub
}

public Date getLastLogin() {
	return lastLogin;
}

public void setLastLogin(Date lastLogin) {
	this.lastLogin = lastLogin;
}



}
