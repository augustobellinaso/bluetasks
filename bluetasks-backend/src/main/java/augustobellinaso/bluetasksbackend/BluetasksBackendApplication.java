package augustobellinaso.bluetasksbackend;

import augustobellinaso.bluetasksbackend.domain.task.Task;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@SpringBootApplication
public class BluetasksBackendApplication implements RepositoryRestConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(BluetasksBackendApplication.class, args);
	}

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		config.exposeIdsFor(Task.class);
	}
}
