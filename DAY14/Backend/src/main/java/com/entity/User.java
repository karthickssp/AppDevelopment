package com.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="gardenusers")

public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="userid")
	private int userId;
	@Column(name="firstname", nullable = false)
	private String firstName;
	@Column(name="lastname", nullable = false)
	private String lastName;
	@Column(name="mobile", nullable = false)
	private Long mobile;
	@Column(name="dob", nullable = false)
	private Date Dob;
	@Column(name="email", nullable = false)
	private String email;
	@Column(name="password", nullable = false)
	private String password;
	@Column(name="gender", nullable = false)
	private String gender;
	@Column(name="experience", nullable = false)
	private String experience;
	@Column(name="size", nullable = false)
	private String size;
	@Column(name="interest", nullable = false)
	private String interest;
	@Column(name="location", nullable = false)
	private String location;
}
