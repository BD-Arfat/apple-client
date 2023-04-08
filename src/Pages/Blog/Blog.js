import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl lg:text-5xl mt-9 lg:mt-20 font-bold'>We are waiting for your Curiosity</h1>
                <p className='text-center mt-7 lg:text-xl'>Here are some question that you expect from us. If you have further question we can <br /> directly contact with us.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 mt-14 px-7'>
                <div className=' text-justify lg:ms-12 mb-20'>
                    <h1 className='text-success text-xl font-bold mt-5'>What are the different ways to manage a state in a React application?</h1>
                    <p className='text-lg mt-5'>
                        Local (UI) state – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />
                        Global (UI) state – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. <br />
                        Server state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />
                        URL state – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state.
                    </p>
                    <h1 className='text-success text-xl font-bold mt-5'>How does prototypical inheritance work?</h1>
                    <p className='text-lg mt-5'>
                        Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                    </p>
                    <p className='text-lg mt-5'>
                        All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.prototype. Array objects inherit from Array.prototype. Player objects inherit from Player.prototype. The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.
                    </p>
                </div>
                <div className=' text-justify lg:me-12 mb-20'>
                    <h1 className='text-success text-xl font-bold mt-5'>What is a unit test? Why should we write unit tests?</h1>
                    <p className='text-lg mt-5'>
                        Unit testing involves the testing of each unit or an individual component of the software application. It is the first level of functional testing. The aim behind unit testing is to validate unit components with its performance.
                        A unit is a single testable part of a software system and tested during the development phase of the application software.
                        The purpose of unit testing is to test the correctness of isolated code. A unit component is an individual function or code of the application. White box testing approach used for unit testing and usually done by the developers.
                    </p>
                    <p className='text-lg mt-5'>
                        Unit tests act as documentation for your code. They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you’re having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex. They contribute to higher code quality.
                    </p>
                    <h1 className='text-success text-xl font-bold mt-5'>React vs. Angular vs. Vue?</h1>
                    <p className='text-lg mt-5'>
                        Angularjs extensive features are: HTML vocabulary extension for web applications. Testable initial development stages Improved design structure Inbuilt dependency injection subsystem for quicker development and testing. automatic and easy data synchronization in its architecture
                    </p>
                    <p className='text-lg mt-5'>
                        ReactJs features: Highly reusable components React server-side rendering Separate option to create a pure JavaScript template Small API makes it easier for beginners SEO friendly
                    </p>
                    <p className='text-lg mt-5'>
                        Vue features: Vue.js is the youngest of the three. It was released in 2014 and developed by ex-Google employee Evan You. The last three years has seen a significant shift in Vue’s popularity. Without having proper backing by a large company, the framework’s current stable version is 2.6 that was released in 2019. Being a standalone project it has a dedicated team of core contributors that work on building the framework with incremental changes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;