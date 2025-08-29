# Proof of Concept - Test Environment

This repository will contain the code to run the test environment for the Adria project.

## Goal

The test environment is used to run the **complete Adria solution** on your local machine independently of any IDE or source code. It's meant to simulate a production environment as closely as possible.

Use this environment to do final testing of your application before the final delivery.

- Navigate to the root of this repository and run:
```bash
docker compose -f docker-compose.yml up -d
```
- Test your application through the web client or API (Swagger).

## Starter Project
The start repository is empty.
<br>Not all mandatory topics are taught in class. 
<br>**You will need to do some self-study to implement them.**

## Prerequisites
Docker desktop is installed on your machine.

## Requirements
- Create a working docker-compose file that runs the complete Adria solution.
  - Server runs on **port 8000**
  - Client runs on **port 80**
- The docker-compose file must contain at least:
  - A database container (MySQL)
  - A server container
  - A client container
  - A network to connect the containers
  - A volume to persist the database data
- This repository only contains Docker code.
- It must be possible to run the complete Adria solution with a single command:
  -  The lecturer will clone your repository, navigate to the folder containing the docker-compose file and run the command
```bash
docker compose -f docker-compose.yml up -d
```
- No CI is required for this repository.

