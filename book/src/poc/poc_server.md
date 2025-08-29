# Proof of Concept - Server

The server is the implementation of the agreed upon POC. 

Only implement the POC, all the rest is fictional and for Adria documentation purposes only.

## Starter Project
The start repository serves as the **server-side starter project**.

It offers the foundational structure for an OpenAPI web server with a mySQL database.

Working in this folder structure with .NET 8 and minimal web api's is mandatory.

## Requirements
- Adhere to the project structure as detailed in the Leho instructional videos and example server.
  - **Please review example repository and these videos thoroughly**.
- Ensure unit testing for both the application and domain layers.
  - Refer to the project document for detailed testing guidelines.
- Complete the **docker-compose.yaml** file with a mySQL database setup.
- Complete the **.gitlab-ci.yml** file with a job to dockerize and push the image to the docker registry.
- Correctly configure the .NET properties files.
  - `appsettings.json` for the test environment.
    -  The connection string should point to the database container defined in the docker-compose file.
  - `appsettings.Development.json` for the local development environment.
- Sonar quality gates should be green.

## Prerequisites
- Ensure .NET 8 and docker desktop are installed on your machine.
- Agree with your team on a database credentials and update the files:
  - `src/Adria.Main/appsettings.Development.json`
  - `config/docker/docker-compose.yml`

## Security
In this project, there is sensitive information such as database credentials. This is not done securely on purpose to facilitate easy setup for students. In a real-world scenario, sensitive information should be managed using secure methods such as environment variables or secret management tools.

If you have choosen the **sensitive information self study topic**, please ensure that you implement secure handling of sensitive information in your project. If not, you will learn this in the build and deploy project of S4.

## Push notifications
If you have chosen the **push notifications self study topic**, please ensure that you implement push notifications in the corresponding parts of your project.


## Testing & quality checks locally
- In this project, the sonar is only updated through the build pipeline.
  - [SonarQube Dashboard - Adria Server](https://sonarqube.ti.howest.be/dashboard?id=2025.ad-project.adria.XX.server)
  - [SonarQube Dashboard - Adria Client](https://sonarqube.ti.howest.be/dashboard?id=2025.ad-project.adria.XX.client)

## Running the project locally
1. Boot your database container.
```bash
docker compose -f config/docker/docker-compose.yml up -d
```
2. Run the server project with the command
```bash
 dotnet run --project src/Adria.Main
 ```

## Local Endpoints
- **Database**:
  - Connect to the mysql database with any MySQL client (e.g. DataGrip).
- **Server Logs**:
  - Available via terminal output.
- **Swagger Interface**:
  - Run the application and navigate to `http://localhost:8000/swagger/index.html`.
- **Web Client Project**:
  - Launch using an IDE like WebStorm/PhpStorm (refer to the client-side README).
- **Server API**:
  - Accessible at `http://localhost:8000/api/`.

## Production
In this project, there is no production environment. 

There is only a test environment that will run on your local machine. That's why it's important that the gitlab-ci.yml file is correctly configured to push the docker image to the howest docker registry. 

In the end the test environment will pull all images from the howest docker registry and run the Adria solution.

## Build Pipeline
- The build pipeline is partially pre-configured:
  - Executes unit tests on every push to the main branch.
  - Generates a SonarQube analysis.

- The build pipeline is not fully configured, the following tasks are still required:
  - Dockerizing the application.
  - Pushing the docker image to a howest docker registry.

## Configuring Properties
- Local properties: `src/Adria.Main/appsettings.Development.json`
- Test properties: `src/Adria.Main/appsettings.json`

## Database Management
- Do not manipulate the database manually
  - Use the **Migrations** and **Seeders** scripts in the `infrastructure/persistence` folder.
- The database will be recreated (Migration) and repopulated (Seeder) every time you run the API.