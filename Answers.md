# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a Library for building large applications.  It helps to take a lot of the work off the DOM when manipulating the DOM, which will cause the application to run slowly. Therefor it provides a better/faster user and developer experience.  Also if something needs to change in multiple places on an application, react will do this without the page having to refresh.

2. What does it mean to think in react?

Thinking in react means to think about how you will break your application into components and then planning which document will hold State and Props.

3. Describe state.

State is the current data as it exsists. State is dynamic so it can be saved and motified.

4. Describe props.

Props a.k.a Properties store exsisting data so that it can pass it to different components.  Props cannot be motified dynamically.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side Effects are any event that happens outside the scope of your application's purpose.  So requesting data from an outside source is considered a side effect.  You can sync effects by using the useEffect hook and applying the state or prop inside an array as a second argument to the useEffect hook.