package com.app.registration.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.app.registration.model.UserRegister;
import com.app.registration.service.RegistrationService;

import java.util.List;

@RestController
public class RegistrationController {

	@Autowired
	private RegistrationService service;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins="http://localhost:4200")
	public UserRegister registerUser(@RequestBody UserRegister user) throws Exception  {
		String tempEmailId=user.getEmail();
		if(tempEmailId != null && !"".equals(tempEmailId)) {
			UserRegister userObj=service.fetchUserByEmailId(tempEmailId);
			if(userObj != null) {
				
				throw new Exception("user with "+tempEmailId + " is already exist");
			}
		}
		
		UserRegister userObj=null;
		userObj=service.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/updateuser")
	@CrossOrigin(origins="http://localhost:4200")
	public UserRegister updateUser(@RequestBody UserRegister user) throws Exception  {
		String tempEmailId=user.getEmail();
		if(tempEmailId != null && !"".equals(tempEmailId)) {
			UserRegister userObj=service.fetchUserByEmailId(tempEmailId);
			
		}
		
		UserRegister userObj=null;
		userObj=service.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public UserRegister loginUser(@RequestBody UserRegister user) throws Exception {
		String tempEmailId=user.getEmail();
		String tempPass=user.getPassword();
		UserRegister userObj=null;
		if(tempEmailId !=null && tempPass !=null) {
			
			
			
		userObj=	service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		
		}
		if(userObj==null) {
			throw new Exception("bad Credentials");
		}
		return userObj;
	}  
	
	@GetMapping("/getuserlist")
	@CrossOrigin(origins="http://localhost:4200")
	public List<UserRegister> fetchUserList(){
		List<UserRegister> users=new ArrayList<UserRegister>();
		users=service.fetchUserList();
		return users;
	}
	
	@GetMapping("/getuserbyid/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public UserRegister fetchUserById(@PathVariable int id){
		return service.fetchUserById(id).get();	
	}
	@DeleteMapping("/deleteuserbyid/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public List<UserRegister>  DeleteUserById(@PathVariable int id)
	{
		List<UserRegister> userObj;
		 service.deleteUserById(id);
		 userObj=service.fetchUserList();
		   return userObj;
		   
    }
	}
	
	

