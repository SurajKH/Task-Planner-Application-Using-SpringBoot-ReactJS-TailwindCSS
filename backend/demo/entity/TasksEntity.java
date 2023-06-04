package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

//lets define the Product Entity over here.
//we are defining the entity over here.

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Data
@Table(name="tasks_table")
public class TasksEntity {
//lets define the class over here.
	
	/*
	  Attributes:ProductID,ProductName,ProductCategory,ProductManfacturingCompany
	  ProductManufacturingCountry
	 */
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long taskId;
	private String taskName;
	private String taskCategory;
	private String taskDate;
	private String taskPriority;
	
	
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public String getTaskCategory() {
		return taskCategory;
	}
	public void setTaskCategory(String taskCategory) {
		this.taskCategory = taskCategory;
	}
	public String getTaskDate() {
		return taskDate;
	}
	public void setTaskDate(String taskDate) {
		this.taskDate = taskDate;
	}
	public String getTaskPriority() {
		return taskPriority;
	}
	public void setTaskPriority(String taskPriority) {
		this.taskPriority = taskPriority;
	}
	public long getTaskId() {
		return taskId;
	}
	public void setTaskId(long taskId) {
		this.taskId = taskId;
	}
	
	
}