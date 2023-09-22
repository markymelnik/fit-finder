package app.fitnessfinderapp.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import app.fitnessfinderapp.backend.initialize.InitializationService;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(InitializationService initializationService) {
		return args -> {
			initializationService.initializeDefaults();
		};
	}
}
