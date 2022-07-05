package com.codeclan.example.chooseit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ChooseIt {

	public static void main(String[] args) {
		SpringApplication.run(ChooseIt.class, args);
	}

	@Configuration
	public class SpringGlobalConfig implements WebMvcConfigurer {

		private static final String CORS_BASE_PATTERN = "/**";
		private static final String ALLOWED_ORIGINS = "*";
		private static final String ALLOWED_HEADERS = "*";
		private static final String ALLOWED_METHODS = "*";

		@Override
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping(CORS_BASE_PATTERN)
					.allowedOrigins(ALLOWED_ORIGINS)
					.allowedHeaders(ALLOWED_HEADERS)
					.allowedMethods(ALLOWED_METHODS);
		}
	}
}
