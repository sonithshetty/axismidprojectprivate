package com.axis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import com.axis.entity.Teacher;

@SpringBootApplication
@EnableDiscoveryClient
public class MoneyManagementSystemApplication {
	public static void main(String[] args) {
		SpringApplication.run(MoneyManagementSystemApplication.class, args);	
	}
}
