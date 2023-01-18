package com.Students.dic.Enitiy;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;


import java.time.LocalDateTime;
import java.util.Date;

@Data
@Entity
@Table(name="User")
public class Student {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer	regNo;
	@Column(name="Name" , length = 15)
	private String applicantName;
	@Column(name="Course" , length = 15)
	private String course;
	@Column(name="Institute" , length = 30)
	private String institute;
	@Column(name="Email" )
	private String emailId;
	@Column(name="Mobile No" , length = 15)
	private Long userMobile;

	public Student() {
		super();
	}

	public Integer getRegNo() {
		return regNo;
	}

	public void setRegNo(Integer regNo) {
		this.regNo = regNo;
	}

	public String getApplicantName() {
		return applicantName;
	}

	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public String getInstitute() {
		return institute;
	}

	public void setInstitute(String institute) {
		this.institute = institute;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Long getUserMobile() {
		return userMobile;
	}

	public void setUserMobile(Long userMobile) {
		this.userMobile = userMobile;
	}


	@Override
	public String toString() {
		return "Student{" +
				"regNo=" + regNo +
				", applicantName='" + applicantName + '\'' +
				", course='" + course + '\'' +
				", institute='" + institute + '\'' +
				", emailId='" + emailId + '\'' +
				", userMobile=" + userMobile +
				 +
				'}';
	}
}