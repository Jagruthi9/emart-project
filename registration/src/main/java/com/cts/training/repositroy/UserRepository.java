package com.cts.training.repositroy;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cts.training.beans.Users;

public interface UserRepository extends CrudRepository<Users, String>{

	Optional<Users> findById(int id);

}