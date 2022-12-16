package com.app.registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.registration.model.UserRegister;
import com.app.registration.repository.RegistrationRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RegistrationService {
	
	@Autowired
	private RegistrationRepository repo;
	
	public UserRegister saveUser(UserRegister user) {
		return repo.save(user);
	}
	
	public UserRegister fetchUserByEmailId(String email) {
		return repo.findByEmail(email);
	}
	public UserRegister fetchUserByEmailIdAndPassword(String email,String password) {
		return repo.findByEmailAndPassword(email, password);
	}

	
	public List<UserRegister>fetchUserList()
	{
		return repo.findAll();
	}
	public Optional<UserRegister> fetchUserById(int id)
	{
		return repo.findById(id);
	}
	public void deleteUserById(int id)
	{	
//		String result;
//		try {
//		
//	
//		repo.deleteById(id);
//		result="User Successfully Deleted";
//		}
//		catch(Exception e) {
//			result="User with id is not deleted";
//		}
//		return result;
//		}
		repo.deleteById(id);
	}
}


