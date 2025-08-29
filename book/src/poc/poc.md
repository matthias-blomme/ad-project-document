
#### Mandatory requirements for all projects
   1. Coding guidelines: use all good practices from previous and current other courses. Don’t
      forget:
          - Create readable code
          - No redundant code
          - Small functions
          - Functions do 1 thing
          - No duplication
          - Refactor code!

   2. The web client is a Vue.js application. You use Vuetify as UI framework. No other
      Javascript frameworks are permitted. The usage of libraries to extend the functionality
      is permitted, however only limited technical support will be offered when choosing a
      library not offered in the curriculum.

   3. The server is a Java server which uses the vert.x library to provide the necessary
      building blocks for the communication of JSON between both platforms. The startup
      project is written in predefined structure. The student must work in this structure. No





         boilerplate code cannot be removed except for everything todo with the included
         todoApp. No other Java libraries or frameworks are permitted, except by explicit
         confirmation of the group mentor.

   4. A Web API built according to OpenAPI (http) ospecs is mandatory for data exchange
      between client and server.

   5. A SQLite database holds the user collected data.

#### Customisable requirements
Additionally, to the mandatory requirements, you need to implement some other technologies /
principles listed below. Customisation is to fit the needs of your application.

Caution: proper feature integration into product is required! Again, don’t add these as an
afterthought, but as a useful contribution to your product.

You need to complete at least 2 of the class-taught topics and a total of 2 points for the self-
study topics. The level == point worth. (E.g. implementing one level-2 topic == 2 points,
implementing two level-1 topics == 2 points)

Any deviations need to be consolidated with the group mentors.

                      Class-taught topics:
 Push notifications                       Support for notification sent by the server.

 Graphs (Canvas, SVG and/or Chart.js)     Interactive client-side graphs that enable the user to have
                                          an immersive data experience

 Maps (Leaflet)                           Interactive maps via OpenStreetMap which at the very
                                          least use the geolocation feature (which for Adria can
                                          obviously be spoofed). Add markers, routes, area
                                          descriptions… whatever fits your need




                      Self-study topics:
 Level                                     Topics

 Level-1                                       -    Native drag ‘n drop
 Small enhancements                            -    History API
                                               -    Fullscreen API
                                               -    Vibration API
                                               -    Sensor APIs (accelerometer, gyroscope, proximity
                                                    sensor, ambient light sensor...)






 Level-2                                       -   CSS animations (consistent across all pages and
 Useful features                                   components, not just a single animation!)
                                               -   MediaStream ImageCapture API
                                               -   Connected hardware via IoT (e.g. raspberry PI, …)




#### Server side tests
Testing is not optional. There should be no need to fire up the client to test your code!
Only test the application layer and domain layer.

Develop the tests as you’re writing the code. Adding them as an afterthought is pointless and
waste of valuable resources... As usual, we will be integrating SonarQube for automated code
quality checks, for client as well as server code.

Aim for a server-side code coverage of > 95%
A levels for bugs, vulnerabilities, and code smells on both client and server side.
Duplication should always be below 2%.


#### Bonus grades
Projects who go the extra mile will be awarded bonus points. This is a scoring measure that is
applied on top of the already existing score, ignoring any penalties that may be in effect.

Bonus grades will not be quantified beforehand, as they strongly depend on the level of
implementation (detail and quality). The exact amount will be determined ad hoc.

We’ll be allocating bonus grades for:

   -   Teams who manage to get their POCs to work together (by using OpenAPI spec
       integration or based on the asyncAPI spec)
   -   Usefully implemented client side testing
   -   Awesome factor

#### POC scope determination
At the end of week 5, you’ll need to submit a POC scope suggestion by means of a feature list
proposal. The jury will help you align objectives and definitively set the scope for the POC.
During development, always consult with your group mentors to modify the POC scope, wider or
more narrow.

No modifications to the scope are allowed without the explicit consent of the group mentors!








#### Publicly accessible API
Document your publicly accessible API according to the OpenAPI . These will be taught in the
“Information Systems” module.

Remember that you are documenting the entirety of the concept here. The objective is to consider
which aspects of your solution you will expose to the public and how. Not all endpoints or
channels written in the API Spec will be implemented. The implemented end points depend on the
POC scope.

Unimplemented endpoints will automatically be documented as ‘not implemented’ when using
the openAPI spec (https://vertx.io/docs/vertx-web-openapi/java/#_not_implemented_error). For
asyncAPI specs, for messages that are not implemented in the POC the payload in the spec
should state 'not implemented'.



