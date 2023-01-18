package com.Students.dic.Controller;

import java.util.List;


import com.Students.dic.Enitiy.Student;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.Students.dic.Service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userservice;
	@PostMapping("/add")
	//Create User
	public Student createUser(@RequestBody Student student) {
		Student student1 = userservice.createUser(student);
		return student1;
	}
	//Get User
	@GetMapping("/getAll")
	public List<Student> getUser(){
		return userservice.getUser();
	}
// Update User by Id
	@PutMapping("/update/{regNo}")
	public Student UpdateUser(@RequestBody Student student, @PathVariable("regNo") int regNo) {
		return userservice.UpdateUser(student,regNo);
}
	//Delete User by Id
	@DeleteMapping("/delete/{regNo}")
	public String deleteTimeTable(@PathVariable("regNo") int regNo) {
		 userservice.delete(regNo);
		 return "The User has been deleted";
	}
	//Get User by Id
	@GetMapping("/get/{regNo}")
	public Student getUserById(@PathVariable("regNo")int regNo ) {
		return userservice.getUserById(regNo);
	}
	
}
