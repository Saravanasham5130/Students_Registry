package com.Students.dic.Service;

import java.util.List;

import com.Students.dic.Enitiy.Student;
import com.Students.dic.Exception.ResourceNotFoundException;
import com.Students.dic.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {
	
	@Autowired
	private UserRepository userrepository;

	@Override
	public Student createUser(Student student) {
		// TODO Auto-generated method stub
		return userrepository.save(student);
	}

	@Override
	public List<Student> getUser() {
		// TODO Auto-generated method stub
		return (List<Student>) userrepository.findAll();
	}

	@Override
	public Student UpdateUser(Student student, int regNo) {
		
		Student student1 = userrepository.findById(regNo).orElseThrow(() -> new ResourceNotFoundException("Student not exist with register no :" + regNo));
		student1.setApplicantName(student.getApplicantName());
		student1.setCourse(student.getCourse());
		student1.setInstitute(student.getInstitute());
		student1.setEmailId(student.getEmailId());
		student1.setUserMobile(student.getUserMobile());

		// TODO Auto-generated method stub
		return userrepository.save(student1);
	}

	@Override
	public void delete(int regNo) {

		userrepository.deleteById(regNo);
	}


	@Override
	public Student getUserById(int regNo) {
		// TODO Auto-generated method stub
		Student student1 =  userrepository.findById(regNo).orElseThrow(() -> new ResourceNotFoundException("Student not exist with register no :" + regNo));
		return ResponseEntity.ok(student1).getBody();
	}
}
