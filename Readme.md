# SBB API

Service Based Budgeting API and UI hosting project.

## Prerequisites

*	Install Java 1.8 SDK
*	Install Eclipse IDE with EE option
*	Get Microsoft SQL Server JDBC 7.4 driver package. Copy the x64/sqljdbc_auth.dll to the system32 folder.
The DLL is need for Integrated Authentication and must be in %PATH%.

## Build / Packaging

*	Eclipse Run As -> Maven Build (Goals: clean install)
*	See target folder for JAR file.

## Run

*	See [Externalized Configuration](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html) for information on specifying the runtime configuration values. Can use environment, command line, or an application.properties file.
*	spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=SBB;integratedSecurity=true
*	java -jar sbb-rest-service-`{version}`.jar

## Deploy

*	Install/Update JRE 1.8 on host system (as needed).
*	Install/Update sqljdbc_auth.dll in host's system32 folder (as needed).
*	Copy sbb-rest-service-`{version}`.jar to a folder on the host system.
*	Configure a Windows Service Wrapper for .NET4 or similar as service wrapper for JAR file.
*	Install/Update service.
*	Service must be running as Windows Identity with read/write permissions to SBB database.
*	Update application.properties with appropriate `spring.datasource.url` value to reach SBB database.
*	Restart service.
