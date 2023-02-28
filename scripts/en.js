(function() {
  window.langs = window.langs || {}
  window.langs.en = {
    occupation: 'Software Engineer',
    age: '30 years old',
    contact: 'Contact',
    phone: 'Phone: ',
    address: 'Address: ',
    skills: 'Skills',
    programming: 'Programming',
    modeling: 'Modeling',
    documentation: 'Documentation',
    architecture: 'Architecture',
    profile: 'Profile',
    profileDescription: `I know how accurately developing documented software,
    I have the creativity and experience to build applications with the intention of,
    prevent over-maintenance, and provide agility in the development process,
    with tools like lint and task runners. Able to use the SCRUM methodology to improve
    effectiveness in agility, and better understanding of the processes so that new and better
    solutions can be discovered in time. I know how to design applications that require a number
    high number of requests and services, and keep them highly resilient and available.`,
    experience: 'Experience',
    occupation6: 'Software Engineer',
    exp6: `BTime offers services focused on managing field teams, basically a
    checklist platform.
    In the back end we used the micro-services architecture, each service communicated with the other via seneca,
    a specific package for communicating microservices in Node.js.
    Data persistence was done through PostgreSQL, with Redis as a cache resource.
    To maintain backend availability, these services were managed by containers within Rancher.
    On the front end, we use Angular 8, with the Observable pattern to take advantage of its streaming characteristics
    to keep checklists updated in real time.`,
    occupation5: 'Software Engineer',
    exp5: `Activities: I work in the EPICALL project, which aims to offer
    to the customer a complete communication platform, with telephony resources (audio connection via SIP), conferences and chat in real time,
    conference scheduling and other custom features. We use Node on the backend, Angular 6 and React for the frontend.`,
    occupation4: 'Software Engineer',
    exp4: `Activities: We created a cryptocurrency exchange, where transactions were made using services from
    BlockIO API, which provides virtual wallet generation, transaction validation and transaction confirmations as it uses
    the validation BLOCKCHAIN ​​model. As the need for the business rule required a real-time application, we used the NodeJS stack alongside the
    Firebase database, as these have asynchronous characteristics that allow us a non-blocking connection. For productivity purposes,
    we opted for the Loopback 3 framework for exposing services via Rest, as it was a product that demonstrated to have advantages
    in relation to this point.`,
    occupation3: 'Desenvolvedor Back-End',
    exp3: `Activities: We are developing a backend to condensate all the santander bank's channels responsible to client handle it's account, creating an architecture in
    Node.js as the current application has issues with availability and performance. the language of
    programming used is TypeScript, and there are many libraries that we are using to speed up the
    development process, such as gulp.js (task runner), eslint, and so on. To guarantee a
    effective availability, node.js servers are deployed in a docker container, and Kubernets
    (docker manager), does the work of managing docker, quickly deploying a new container
    if something goes wrong with the current one.
    All features / API have a unit test, these tests are done with mocha.js and chai.
    For performance purposes, we use redis, an in-memory data structure store,
    used as a local database, which eliminates the need for continuous communication with the database
    of data on the server.`,
    occupation2: 'Sharepoint Developer',
    occupation1: 'Web Developer',
    education: 'Education',
    course: 'Computer Science',
    college: 'University Anhembi Morumbi',
    courseFinished: '2016',
    techs: 'Technology',
    languages: 'Language',
    english: 'English',
    advanced: 'Advanced'
  }
})()