# D3: Analysis document
   The following items need to be covered in detail in the analysis document.

   Important note: you are allowed and even encouraged to use AI to finetune and flesh
   out your ideas. However, you must keep all the prompts and add them as an appendix
   to your analysis document.


## Scope of product
Determine the scope of the concept of your product using the following tools:

   -   Create at least 3 persona for your concept. For each target group, you create a
       different persona. Don’t forget: persona get a face and an identity, and in so doing bring
       back the human factor into the design process.
   -   Write minimum 4 user stories for each persona. A user story is a short statement or
       abstract that identifies the user and their need/goal. It determines who the user is, what
       they need and why they need it. There is usually 1 user story per user persona per task.
       User stories should be created as epics in gitlab.
   -   Based on the user stories the feature list for your applications is determined. Make a
       MoSCoW list and Feature Priority Matrix to define. Clearly mark in the feature list which
       features will be included in the POC.


## Schematics
Describe the full concept in a collection of schematics, which can be suited to your needs. We
expect at the very least:

   -   Minimum 3 flow charts for the most common flows a user will have for your solution.
       Mind that we do not want application descriptors (no press this button, then fill out that
       field), but generic actions/choices which span much further than just the interface
       interaction. Interaction is part of it, but not the whole. The level of detail is more global
       (remember Application Prototyping)

   -   A C4 diagramme featuring at least a context and deployables diagramme. You may add
       component diagrammes for the items you find necessary, or omit them all together.
       Remember: the objective here is to get the message across, not to over-document

   -   One or several UCDs based on user stories. Those user stories should be created as
       epics in gitlab. Refer to those from your UCD’s

   -   An ERD describing the information model of the software system







   -   Any other schematic you may find useful to explain the concept. This does not need to
       be anything class-taught. If you find it useful, and it gets the message across, include it.
       Even if it’s concept art. (we like concept art)

Clearly mark on your documentation which elements will be included in the POC.




## Interactive wireframes and visual designs
The wireframes deliverable will hold interactive wireframes for the full concept, so your
wireframes will be far more extensive than your POC. They are clickable, high-fidelity and
created in Figma (mandatory).

For the visual designs you will use the Material Design system (mandatory). You add the visual
designs to the Figma file of your wireframes.

Depending on your concept, you will need to design several interfaces. You need to create all
necessary interfaces to elaborate your concept.

In 2080, we don’t think in “sizes”, but in “settings”. Most solutions will have a combination of
several settings. We require at least two different settings, but depending on your concept, you
might need more. Make sure you name every interface appropriately.


Consider the following use cases:

Example 1 Bad: Your concept is an event platform. Users can browse and pick events to attend.
Choose a resolution that best fits the information you wish to display to the user.

Wireframe deliverable: A single wireframe, one with the full-fledged event browser, on a
resolution of your choice -> Insufficient!! There’s only one setting here, expand the concept to fit
multiple settings!

Example 1 Good: The concept is the same as above, but your application also offers users a
way to connect with friends during the event. It will display a mini map of the event grounds,
with your friends highlighted, including the route towards them.

Wireframe deliverable: Two wireframes, one with the full-fledged event browser, on a resolution
of your choice (=high focus context in a primary setting) and another for the mini-map interface
(notification-like context in secondary setting)

Example 2: Your concept is an incident logger for maintenance equipment in one of the
subterranean facilities. There are two settings in this case: the first, where the worker logs the
incidents on site. A small resolution is suitable for this, given the cramped environment in which
the worker works, though he will be in high focus (many interactions, complex material, …)




The second setting for your solution is the overview dashboard, which is consulted by an
overseer elsewhere in the facility (not down in the ducts), while the workers are logging the
status of the machinery and possible incidents. S/he can initiate incident response procedures.
This is also an interface which requires high focus.

Wireframe deliverable: Two wireframes, one for the worker logging setting and one for the
dashboard overseer setting.

Example 3: Your concept is a rover rental service. The primary setting is an interface with
features such as vehicle selection, rental dates, etc. A secondary setting also applies, as once
the user is in the vehicle there’s a live “in air” assistant, which projects lifesize (un)docking
instructions, route and other contextual information.

Wireframe deliverable: Two wireframes, one for rental setting and one for the driving setting.

As you see, the actual pixel size of the “screen” is irrelevant, as it can shrink and grow to your
needs. Instead of thinking of size, think of context and setting first and adjust size accordingly.
That is the size you’ll be developing for.


## User testing reports
Your clickable mockups need to be validated by end users. Therefore, you are required to
perform at least one user test with 4 different users that represent your target users determined
in the personas. A template will be made available to jot down your findings and determine
appropriate scenarios.

A minimum of three scenarios needs to be tested, but you can always include more should you
see fit.


## Ethical questions
Use the Ethical Decision Making framework to argument at least 2 ethical dilemmas according
to the 5 taught principles including a final conclusion per dilemma.



## Security risk assessment
Provide a security risk assessment where you identify, assess and give recommendations for
the key controls in your product/applications. The focus should focus on the possible security
defects and vulnerabilities.








## User flow demonstration
Demonstrate the most important user flows by a screen recording while navigating / using your
visual design. Make as many as are needed and provide them with a clear title.

You may precede the user flow screencast with a short explanation, textual or by means of
graphics / flowcharts / … if you find this necessary.