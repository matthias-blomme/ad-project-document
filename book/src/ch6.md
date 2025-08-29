# 6. Deliverables: specific requirements

Below you’ll find specific requirements for each of the deliverables listed at the start of this
document.










### Client/server knowledge quiz/exam (D4)
A Leho quiz which tests if you have enough knowledge of the client will be available on the first
day of the first project week. The questions will focus on Vue.js and push notifications from the
input sessions.

On the same day there will be a server exam in which you will need to add some basic features
to the start code of the server in a structured manner. You must use the Gitlab server of TI to
submit. A start repository will be available.

The quiz and exam are individual. More details about the quiz & server exam are on Leho.

### Proof of Concept (D5)
The application contains a web client to handle user interaction and a server to power the back
end.


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




### Project work (D6)

#### PM on Gitlab
All work, communication, deadlines, branching, … needs to be handled on the school’s provided
Gitlab repositories according to the best practices taught in current and past Applied Computer
Sciences classes. If things are rusty, get out your old course material and brush up on your
knowledge in order to comply with our rules.

In the first year, you were handed the milestones (=sprints) and the epics (=user stories). This
year, you will need to create these yourselves in gitlab (on your group level).


#### Daily standups
At the start of each project day, the groups should have a "daily standup". You will discuss the
following allocating an average speaking time of 1 minute per person:

   -   What did I work on previously and what is its state (Finished / still in development)?
   -   Did I experience any difficulties with it? If so, which?
   -   What will I be working on today?
   -   Do I expect any difficulties / will I be needing some help with a certain topic?

A team member with expertise in the element in question can already indicate this and can be
an aid at a later stage.

In the project weeks the daily standups take place every day, during the regular class weeks
every Thursday.




You'll need to submit a summary of your daily standup in the secured part of your site as a blog
post. You can choose to either take notes, or record the standup itself and upload it as a video
in the post. Don’t forget to add a title and every post should also have a ‘picture of the day’ with
all the group members. The post should be published at the latest at 10:30am every project day.

### Retrospections and peer assessments (D7)
We’ll be posting several retrospections and peer assessment assignments via Leho, which need
to be completed.

### Presentation (D8)
Read and apply the guidelines of the semester 2 presentation techniques course "Beter
presenteren, is dat echt nodig?"

   -   Allocated time for the presentation is 20 mins and an additional 10 minutes question time
   -   Your audience consists of potential investors (private and government). Keep this in
       mind!
   -   Your presentation is in English. Questions can be answered in Dutch.
   -   Your presentation has the same look and feel as your application.
   -   You are free to choose which tools used to build the presentation (i.e. you are not limited
       to powerpoint slides). Conveying the story is the primary objective.
   -   You make sure the presentation is clear and only contains information that is relevant
       and interesting for your audience.

A few more tips:

   -   Everyone participates equally in the presentation.
   -   You bring a coherent story and you try to anticipate the audience's questions.
   -   You have a neat appearance, but don't exaggerate: you must still be yourself to some
       extent.
   -   Your attitude is of course very important; this means no ringing cell phone, no chewing
       gum, being polite, enthusiastic, … .
   -   The way in which you address the public is also important! Greet the investors, thank
       them for their attention and calmly answer questions, even if they may be formulated
       rather directly.
   -   You defend your project if you feel it is appropriate. However, when necessary you admit
       you made a mistake or you admit you do not know the answer to a specific question.
       The following sentence is always helpful in this kind of situation: “I have not yet looked at
       the matter from this point of view but that is certainly a valuable suggestion. (Don't
       overuse it ;).
   -   You use your non-verbal communication correctly and efficiently.

The entire group must participate in the planned trial presentations before the Christmas
leave. It goes without saying that your test presentation is structured according to the guidelines
of the semester 2 presentation techniques course.