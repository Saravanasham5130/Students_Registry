package com.Students.dic.Repository;


import com.Students.dic.Enitiy.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Student,Integer>{


	
}
