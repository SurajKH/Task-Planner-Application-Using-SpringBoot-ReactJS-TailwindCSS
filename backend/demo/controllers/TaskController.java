package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.TasksEntity;
import com.example.demo.repository.TaskRepository;

//we are considering the concept of establishing a connectivity
//between the front-end and the back-end application.
@RestController
@CrossOrigin("http://localhost:3000")
public class TaskController {

	@Autowired
	TaskRepository taskRepository;
	
	//lets now define various Mappings like getMapping and 
	//putMapping.
	
	//we are able to retrieve all the Tasks over here.
	@GetMapping("/v1/allTasks")
	public List<TasksEntity> getAllTasks()
	{
		return taskRepository.findAll();
	}
	
	//we are considering an addition of a new Task.
	@PostMapping("/v1/addNewTask")
	public TasksEntity addNewTask(@RequestBody TasksEntity taskEntity)
	{
		return taskRepository.save(taskEntity);
		//return taskEntity;
	}
}
