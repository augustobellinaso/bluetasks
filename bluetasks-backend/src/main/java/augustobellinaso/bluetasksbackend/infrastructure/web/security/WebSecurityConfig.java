package augustobellinaso.bluetasksbackend.infrastructure.web.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
//@EnableWebSecurity
//@EnableWebMvc
public class WebSecurityConfig extends WebSecurityConfigurerAdapter implements WebMvcConfigurer {

    private static Logger logger = LoggerFactory.getLogger(WebSecurityConfig.class);


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf()
                .disable()
                .cors()
                .and()
                    .headers().frameOptions().disable()
                .and()
                    .httpBasic()
                .and()
                    .authorizeRequests()
                        .antMatchers("/h2-console/**").permitAll()
                        .anyRequest().authenticated()
                .and()
                    .addFilter(new JWTAuthenticationFilter(authenticationManager()))
                    .addFilter(new JWTAuthorizationFilter(authenticationManager()))
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS);


        logger.info("Security setup... OK!");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("POST")
                .allowedHeaders(SecurityConstants.AUTHORIZATION_HEADER);

        logger.info("CORS setup... OK!");
    }

/*
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
        configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

*/


}
