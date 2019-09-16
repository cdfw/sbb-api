# SBB API

## Build / Packaging

*	Install Java 1.8 SDK
*	Install Eclipse IDE with EE option
*	Eclipse Run As -> Maven Build (Goals: clean install)
*	See target folder for JAR file.

## Run

*	See [Externalized Configuration](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html) for information on specifying the runtime configuration values. Can use environment, command line, or an application.properties file.

	spring.datasource.url=jdbc:mysql://{hostname}:3306/{schemaname}?zeroDateTimeBehavior=convertToNull&autoReconnect=true&useSSL=false
	spring.datasource.username={username}
	spring.datasource.password={password}

*	java -jar sbb-rest-service-`{version}`.jar
