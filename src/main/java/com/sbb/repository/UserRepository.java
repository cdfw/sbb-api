package com.sbb.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import com.sbb.entity.UserEntity;

public interface UserRepository  extends CrudRepository<UserEntity, Integer> {

    @Query("SELECT usr FROM UserEntity usr WHERE LOWER(usr.userName) = LOWER(:userName) AND usr.password = (:password)")
    public UserEntity findByCredentials(@Param("userName") String userName, @Param("password") String password);
    
    @Query("SELECT usr FROM UserEntity usr WHERE user_token = :userToken ")
    public UserEntity findByToken(@Param("userToken") String userToken);

}
