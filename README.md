Q-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById is used to find a single element.
getElementsByClassName is used to find multiple elements with the same class name. 
In querySelector, if there are 100 or more elements with the same class or tag name, querySelector will return only the first matching element.
When using querySelector, use (#) before an id and (.) before a class name.
querySelectorAll is used to select all elements that have the same name. Like querySelector, it follows the same rules when selecting by class or ID.


Q-2:How do you create and insert a new element into the DOM?

Ans: First, I create an element using createElement and then I set its value/inner text, then I select a parent to append it to. 


Q-3:What is Event Bubbling and how does it work?

Ans: Event bubbling behaves like a water bubble, moving upward through the DOM. When an event is triggered on a child element,
it bubbles up to its parent. If the parent also has an event listener, that gets triggered too. This bubbling behavior can be stopped using stopPropagation.


Q-4:What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation is a powerful technique that makes managing multiple events easier. It helps keep the code clean and maintainable.


Q-5:What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() is used to stop the browser's default behavior, and stopPropagation() is used to stop the event from propagating to parent elements.
