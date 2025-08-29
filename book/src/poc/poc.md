# Proof of Concept
In this project, you will implement a Proof of Concept (POC) of your chosen concept. The POC
should demonstrate the core functionalities of your application, showcasing its potential and
feasibility. 

**Remember, the POC is only a small part of your overall concept.**

## POC scope determination
At the end of week 5, you’ll need to submit a POC scope suggestion by means of a feature list
proposal.

The jury will help you align objectives and definitively set the scope for the POC.
<br>During development, always consult with your group mentors to modify the POC scope, wider or
more narrow.

No modifications to the scope are allowed without the explicit consent of the group mentors!

## What do we expect?
You will be given four repositories on the http://gitlab.ti.howest.be space.

   -  A **documentation** repository
     - All documents, links, diagrams, ... related to the project
   -  A **client** repository
     - The web client application connecting to the server
   -  A **server** repository
     - The server application containing the business logic and a web api
   -  A **Test environment** repository
     - A docker solution that is able to run your whole Adria solution

These will hold all deliverable content, except for the peer assessments, retrospections and
reflections.

All implementations must implement the **mandatory requirements** and **customisable requirements** as described below.

## Publicly accessible API
Document your publicly accessible API according to the OpenAPI . <br>These will be taught in the
“Information Systems” module.

Remember that you are documenting the **entirety of the concept** here. <br>The objective is to consider
which aspects of your solution you will expose to the public and how. <br>Not all endpoints or
channels written in the API Spec will be implemented. The implemented end points depend on the
POC scope.

Endpoints not belonging to the poc must return a 'not implemented' error.


## Mandatory requirements for all projects

The following are mandatory requirements that **must** be implemented in your project. <br>See the page of each repository (client, server, test environment) for specific details.

Not all mandatory topcis are taught in class. You will need to do some self-study to implement them.
<br>Don't worry, the POC scope is only a small part of your overall concept.

- **Coding guidelines**: use all good practices from **previous and current** other courses.
  - Create readable code
  - Small functions
  - Functions do 1 thing
  - Refactor code!
  - Sonar passes!

- The **web client** is build with a **front-end framework** (we recommend Vue). <br>The usage of libraries to extend the functionality is permitted, however only (very) limited technical support will be offered when choosing a library not offered in the curriculum. 
  - **Docker**:
    - Dockerize the client application. Build a working Dockerfile.
  - It must be possible to dockerize the client application. Build a working Dockerfile. 
  - **CI**
    - Build a gitlab-ci file that:
      - Published the source code to sonar for quality checks.
      - Dockerizes the client application and pushes the image to the gitlab docker registry.

- The **server** is a .NET 8 solution which uses minimal Web Api's to provide the necessary communication with the client. <br>The startup project is written in predefined structure. 
  - The student must work in this structure. No boilerplate code cannot be removed.
  - **Tests**: only test the application layer and domain layer.
Develop the tests as you’re writing the code. Adding them as an afterthought is pointless and
waste of valuable resources... 
    - As usual, we will be integrating SonarQube for automated code
quality checks, for client as well as server code.
      - Coverage: > 95% (aim for it)
      - Bugs, vulnerabilities, code smells, duplication: Sonar must pass. 
  - **Docker**:
    - The database of the server must run in a docker container. Use the provided
      docker-compose.yaml file to start the database.
    - It must be possible to dockerize the server application. A working Dockerfile is provided. Adapt this file if you change the project structure.
  - **CI**:
    - Extend the provided .gitlab-ci.yml file to build and push the docker image to the gitlab docker registry.

- The **test environment** is a docker solution that is able to run your whole Adria solution. It should at least contain:
  - A database container (MySQL)
  - A server container
  - A client container- A network to connect the containers
  - A volume to persist the database data


## Customisable requirements
Additionally, to the mandatory requirements, you need to implement some other technologies /
principles listed below. Customisation is to fit the needs of your application.

**Caution**: proper feature integration into product is required! Again, don’t add these as an
afterthought, but as a useful contribution to your product.

You need to complete at least 4 points of topics. E.g. you can choose 4 topics of 1 point or 2 topics of 2 points, etc.

Some of the topics are class-taught, others are self-study.

Any deviations need to be consolidated with the group mentors.

### Topics

| Title | Description | Points |
| --- | --- | --- |
| Native drag 'n drop | Support for native drag and drop functionality in the web client. | 1 |
| History API | Support for navigation through the browser history. | 1 |
| Fullscreen API | Support for fullscreen mode in the web client. | 1 |
| Vibration API | Support for vibration on devices that support it. | 1 |
| Sensor APIs (accelerometer, gyroscope, proximity sensor, ambient light sensor...) | Support for reading data from device sensors. | 1 |
| Push notifications | Support for notification sent by the server. | 2 |
| Graphs (Canvas, SVG and/or Chart.js) | Interactive client-side graphs that enable the user to have an immersive data experience. | 2 |
| Maps (Leaflet) | Interactive maps via OpenStreetMap which at the very least use the geolocation feature (which for Adria can obviously be spoofed). Add markers, routes, area descriptions… whatever fits your need. | 2 |
| CSS animations (consistent across all pages and components, not just a single animation!) | Add animations to enhance the user experience. | 2 |
| MediaStream ImageCapture API | Use the MediaStream ImageCapture API to take photos or capture video from a user's camera. | 2 |
| Connected hardware via IoT | Extend your application to interact with connected hardware devices. This could involve using a Raspberry Pi or similar device to collect data, control hardware components, or interface with other IoT devices. | 2 |
| Sensitive information (server) | Implement secure handling of sensitive information, such as API keys, passwords, or personal data. Take a look at dotnet user secrets and how to pass **env** files to a docker service. The end goals is not sensitive information in the repositories | 2 |
| End to end tests (server) | Implement end-to-end tests that cover critical user journeys in your application. The testing suit must be executed with a single click or command | 2 | 
| Web Api authentication | Implement authentication for your web API using JWT token. Ensure that only authenticated users can access certain endpoints and that user roles and permissions are properly managed. | 2 |


## Bonus grades
Projects who go the extra mile will be awarded bonus points. <br>This is a scoring measure that is
applied on top of the already existing score, ignoring any penalties that may be in effect.

Bonus grades will not be quantified beforehand, as they strongly depend on the level of
implementation (detail and quality). <br>The exact amount will be determined ad hoc.

**We’ll be allocating bonus grades for**:
  -   Teams who manage to get their POCs to work together (by using OpenAPI spec
       integration or based on the asyncAPI spec)
  -   Usefully implemented client side testing
  -   Awesome factor



