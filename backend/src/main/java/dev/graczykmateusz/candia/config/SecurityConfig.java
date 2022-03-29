//package dev.graczykmateusz.candia.config;
//
//import org.keycloak.adapters.KeycloakConfigResolver;
//import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
//import org.keycloak.adapters.springsecurity.KeycloakConfiguration;
//import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Profile;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.session.SessionRegistryImpl;
//import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
//import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
//
//@KeycloakConfiguration
//@EnableWebSecurity
//@Profile({"prod", "test"})
//public class SecurityConfig extends KeycloakWebSecurityConfigurerAdapter {
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        super.configure(http);
//        http.cors().and().csrf().disable()
//                .authorizeRequests()
//                .antMatchers("/resources/**").permitAll()
//                .antMatchers("/*.js").permitAll()
//                .antMatchers("/*.css").permitAll()
//                .antMatchers("/index.html").permitAll()
//                .antMatchers("/favicon.ico").permitAll()
//                .antMatchers("/actuator/health").permitAll()
//                .anyRequest().authenticated();
//    }
//
//    @Bean
//    public KeycloakConfigResolver KeycloakConfigResolver() {
//        return new KeycloakSpringBootConfigResolver();
//    }
//
//    @Bean
//    public SessionAuthenticationStrategy sessionAuthenticationStrategy() {
//        return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
//    }
//
//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//        auth.authenticationProvider(keycloakAuthenticationProvider());
//    }
//}
