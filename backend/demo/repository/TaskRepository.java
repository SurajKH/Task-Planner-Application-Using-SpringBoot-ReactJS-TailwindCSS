package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.TasksEntity;

//we are basically considering the definition of 
//the repository over here.

@Repository
public interface TaskRepository extends JpaRepository<TasksEntity,Long>{

}
