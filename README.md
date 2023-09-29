Project features

1. User-friendly interface
2. Displaying a course catalog with detailed course information.
3. Automated reminders if course credit limit is crossed.

State Management in this project:

Prop Drilling: Passing data from a parent component to a child component through props. Prop Drilling can become cumbersome when dealing with deeply nested components.
Such as for showing course card course data is passed from Parent component (Courses.jsx) to Child component (Course.jsx).

useState hook: For managing state within a single component, the useState hook is used. It is used to initialize and update the state within components.

useEffect Hook:  For handling side effects in component the useEffect hook is used, such as data fetching, DOM manipulation, and more.
