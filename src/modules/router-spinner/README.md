ROUTER WITH SPINNER
==================

* DESCRIPTION
    It is displaying a snipper between components and events using lazy loading. It is usefull to avoid navigation errors.

* PARTS
    - component : capture components while it is routing and implement the snipper

HOW TO USE
==========

Add the tag _app-router-with-spinner_ instead of _router-outlet_. This tag will need the followings inputs to work:

    - *routerComponents:* Main components of each module using lazy loading. You should add the same name of the component.
    For example for this project: 
    ``` 
        routerComponents = [
            PageOneComponent,
            PageTwoComponent,
            PageThreeComponent,
            PageFourComponent
        ];
    ```
    - *showEvents:* Detect navigation events where you want to start displaying the spinner. 
    In this project, we want to start the spinner whenever there is a navigation start event. That means the following:
    ```
        showEvents =[
            NavigationStart
        ];
    ```
    - *hideEvents:* Hide spinner whenever an event in this list is emitted. Mostly, this is for errors and cancelations events.
    For example:
    ```
        hideEvents =[
            NavigationCancel,
            NavigationError
        ];
    ```
    - *loadingClass:* Adding a class to a _div_ with the name provided in the input. This class will contain some styles coming from the parent.
    For example:
    ```
        loadingClass ='loading';
    ```
    We add loading as a name class and we add the styles for that class in the file _styles.css_ of the project, for example:
    ```
        .loading {
            position: fixed;
            width: 100%;
            height: 50%;
            background: grey  url('./assets/gears.gif') center center no-repeat;
            opacity: .5;
        }
    ``

