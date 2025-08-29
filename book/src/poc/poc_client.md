# Proof of Concept - Client

The client is the implementation of the agreed upon POC. 

Only implement the POC, all the rest is fictional and for Adria documentation purposes only.

## Starter Project
The start repository is almost empty.
You have the freedom to choose your own client-side framework (Vue, React, Angular, ...) and strcuture.
- However, we recommend Vue.
- Look up the best practices for the choosen front-end.


## Requirements
- Follow good practices from previous and current courses.
  - Create readable code
  - Write small functions
  - Ensure functions do one thing
  - Refactor code regularly
  - Pass Sonar quality checks
- Dockerize the client application by building a working Dockerfile.
- Build a gitlab-ci file that:
  - Publishes the source code to Sonar for quality checks
  - Dockerizes the client application and pushes the image to the GitLab Docker registry
- Sonar quality gates should be green.
- No tests are required for the client application.

## Prerequisites
- Docker desktop is installed on your machine.

## Testing & quality checks locally
- In this project, the sonar is only updated through the build pipeline.
  - [SonarQube Dashboard - Adria Server](https://sonarqube.ti.howest.be/dashboard?id=2025.ad-project.adria.XX.server)
  - [SonarQube Dashboard - Adria Client](https://sonarqube.ti.howest.be/dashboard?id=2025.ad-project.adria.XX.client)

## Production
In this project, there is no production environment. 

There is only a test environment that will run on your local machine. That's why it's important that the gitlab-ci.yml file is correctly configured to push the docker image to the howest docker registry. 

In the end the test environment will pull all images from the howest docker registry and run the Adria solution.

## Useful code snippets

**File: sonar-project.properties**
<br>Purpose: Configuration file for SonarQube analysis of the client project.
```properties
#CHANGE XX TO GROUP NUMBER e.g. XX -> 01
sonar.projectKey=2025.ad-project.adria.XX.client
sonar.projectName=2025.ad-project.adria.XX.client
sonar.host.url=https://sonarqube.ti.howest.be/
sonar.sources=src
```

**File: package.json**
<br>Purpose: Minimal package.json with necessary CI scripts
```json
{
  "name": "2025-adria-client",
  "license": "UNLICENSED",
  "private": true,
  "type": "module",
  "scripts": {
    "validate-html": "java -jar node_modules/vnu-jar/build/dist/vnu.jar --Werror --filterpattern \".*(v-|@).*\" --filterfile .vnuignore --skip-non-html ./src",
    "sonar-ci": "node_modules/sonar-scanner/bin/sonar-scanner",
    "validate-on-ci": "npm run validate-html && npm run sonar-ci"
  },
  "dependencies": {
    "sonar-scanner": "^3.1.0",
    "vnu-jar": "^20.2.28"
  },
  "devDependencies": {
  }
}
```

**File: .vnuignore**
<br>Purpose: Ignore file for HTML validation
```
The "date" input type.*
The “date” input type.*
````

File: .gitlab-ci.yml
<br>Purpose: GitLab CI configuration file for building, validating, and deploying the client application
<br>Note: the script sections are gone
```yaml
image: registry.ci.infra.lan:5000/project-2:client-QA

stages:
  - QA

before_script:
  - ln -s /ci/node_modules .

validateHTML:
  stage: QA
  only:
    - main
  script:

SonarQube:
  stage: QA
  only:
    - main
  script:
```