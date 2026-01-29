# Build an All-True Property Validator

In this lab, you will test a specific property of each object in an array to determine whether it always has a truthy value.

## Example Data

You may be given an array of objects like the following:

```js
[
  {
    name: "Quincy",
    role: "Founder",
    isBot: false
  },
  {
    name: "Naomi",
    role: "",
    isBot: false
  },
  {
    name: "Camperbot",
    role: "Bot",
    isBot: true
  }
]
````

### Example Checks

* **Testing the `name` property**
  The values are `"Quincy"`, `"Naomi"`, and `"Camperbot"`.
  All values are truthy → result is `true`.

* **Testing the `role` property**
  The values are `"Founder"`, `""`, and `"Bot"`.
  The empty string (`""`) is falsy → result is `false`.

## Objective

Fulfill the user stories below and get all the tests to pass to complete the lab.

## User Stories

* You should have a function named `truthCheck`.
* The `truthCheck` function takes two arguments:

  * An array of objects
  * A string representing a property name found in those objects
* The function should check whether the property (specified by the second argument) has a **truthy value** in **all** objects in the array.
* The function should return `true` if the condition is met, and `false` otherwise.
