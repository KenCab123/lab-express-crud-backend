# Captain's Log

![](https://cdn.shopify.com/s/files/1/2256/1635/products/4520_c-01.jpg?v=1510506828)

Every great captain, whether on the waters or in the skies, keeps a daily log.

Let's build the perfect Captain's Log App for our extraordinary captains. So that future generations can learn about life on a ship.

![](https://i.imgflip.com/2174sq.jpg)

## Multiple Session Lab/Activity

While you will start this lab/activity today, you will have several sessions to build it out.

The different parts should align with what you are learning in lecture.

By the end, your app should have the following functionality

|  #  | Action  |    URL    | HTTP Verb |    CRUD    |              Description              |
| :-: | :-----: | :-------: | :-------: | :--------: | :-----------------------------------: |
|  1  |  Index  |   /logs   |    GET    |  **R**ead  |   Get a list (or index) of all logs   |
|  2  |  Show   | /logs/:id |    GET    |  **R**ead  | Get an individual view (show one log) |
|  3  | Create  |   /logs   |   POST    | **C**reate |           Create a new log            |
|  4  | Destroy | /logs/:id |  DELETE   | **D**elete |             Delete a log              |
|  5  | Update  | /logs/:id |    PUT    | **U**pdate |             Update a log              |

Bonuses in each section are not required to pass the assignment.

If you finish ahead of time you can try the bonus challenges or work on Codewars Challenges.

If you feel like you are falling behind, reach out to an instructor.

## Part 1

|  #  | Action |  URL  | HTTP Verb |   CRUD   |            Description            |
| :-: | :----: | :---: | :-------: | :------: | :-------------------------------: |
|  1  | Index  | /logs |    GET    | **R**ead | Get a list (or index) of all logs |

- `mkdir express-crud-fullstack && cd $_`
- inside the `express-crud-fullstack` directory, fork and clone this repository
- rename the repository `express-crud-backend`
- `cd` into the repository
- `npm install` (since this repo already has a package.json there is no need to use npm init -y)
- Create a basic express app including all of the package installs and files that are needed
- Create a models folder
- Inside the models folder create a `logs.model.js` file to hold your data.

The shape of each object of your data will consist of the key value pairs below.

- captainName: string
- title: string
- post: string
- mistakesWereMadeToday: boolean
- daysSinceLastCrisis: number

- Add this data below to your `logs.model.js`

```js
module.exports = [
  {
    id: 1,
    captainName: "Picard",
    title: "Courage",
    post: "Courage can be an emotion too.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 100,
  },
  {
    id: 2,
    captainName: "Ahab",
    title: "Whale",
    post: "By heavens man, we are turned round and round in this world, like yonder windlass, and fate is the handspike.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 20,
  },
  {
    id: 3,
    captainName: "Sarah Lance",
    title: "Vandal Savage",
    post: "I’d tell you to go to hell, but you’d probably just feel at home there.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  },
  {
    id: 4,
    captainName: "Ahab",
    title: "Insolence",
    post: "I don't give reasons. I give orders!",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 100,
  },
  {
    id: 5,
    captainName: "Sarah Lance",
    title: "Ava",
    post: "Ava's the kind of girl that you take home to your parents, and I am the kind you take to an exorcism",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  },
  {
    id: 6,
    captainName: "Ahab",
    title: "What is sleep?",
    post: "Sleep? That bed is a coffin, and those are winding sheets. I do not sleep, I die.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 5,
  },
  {
    id: 7,
    captainName: "Sarah Lance",
    title: "Jonah Hex",
    post: "I know you don’t like taking orders from a woman, but you’re gonna like getting your ass kicked by one even less.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  },
];
```

### App.js

- create a route `/` that says something like `welcome to the captain's log`
- create a 404 route that when a user tries to access a route that doesn't exist, they will see this page

### Controllers

Create controllers that will hold the routes for your logs.

- create a route `/logs` that returns the json for all of the logs in the data.

### Frontend

- Navigate into your parent `express-crud-fullstack` folder.
- `fork` and `clone` the [lab-express-crud-frontend](https://github.com/10-3-pursuit/lab-express-crud-frontend)
- Create a `Logs.jsx` component in the `src` folder
- `fetch` all of the logs
- diplay all of the values from the data in a list
- for the boolean value you should display a string OR use a check and x emoji.
- Nest the `Logs.jsx` component inside the `App.jsx` component and test your frontend to see if it displays your values.

### Frontend Bonus

Add CSS

### Backend Bonus

Add functionality where if a user goes to

- `/logs?order=asc` it will organize the logs alphabetically
- `/logs?order=desc` it will organize the logs in reverse alphabetical order
- `/logs?mistakes=true` it will only show the logs where the value of `mistakesWereMadeToday` is true
- `/logs?mistakes=false` it will only show the logs where the value of `mistakesWereMadeToday` is false
- `/logs?lastCrisis=gt10` it will return all the logs where the `daysSinceLastCrisis`is **g**reater **t**than 10
- `/logs?lastCrisis=gte20`it will return all the logs where the `daysSinceLastCrisis`is **g**reater **t**than or **e**qual to 20
- `/logs?lastCrisis=lte5`it will return all the logs where the `daysSinceLastCrisis`is **l**ess **t**than or **e**qual to 5

**Note** the original `/logs` route should be unaffected by these additions

## Part 2

Do not start Part 2 until you have completed at least the backend for part 1. If you are stuck, be sure to ask for help.

|  #  |   Action   |    URL    | HTTP Verb |    CRUD    |              Description              |
| :-: | :--------: | :-------: | :-------: | :--------: | :-----------------------------------: |
|  2  |  **Show**  | /logs/:id |    GET    |  **R**ead  | Get an individual view (show one log) |
|  3  | **Create** |   /logs   |   POST    | **C**reate |           Create a new log            |

- add routes for create and show
- add some logic so that if someone goes to an invalid array id they will be redirected to the 404 route you had written in the last part

### Frontend

## Show

Using your `lab-express-crud-frontend` repo:

- Create a `Log.jsx` component in the `src file` to display a single log
- `fetch` a single log using the id of the log. This should ultimately
- diplay all of the values from the data in a list
- for the boolean value you must display a string OR use a check and x emoji.
- Nest the `Logs.jsx` component inside the `App.jsx` component and test your frontend

## Create

- Create a `LogForm.jsx` file
- include inputs for all of the key/value pairs from the model except for id
- make a POST call to the backend that adds a log to the array of logs.
- test the form by placing it above or below all of the logs in the `App.jsx` file.
- the new log should automatically add to the page.

### Backend Bonuses

Add a validation function that checks to make sure that the values of each key are the correct type

- captainName: string
- title: string
- post: string
- mistakesWereMadeToday: boolean
- daysSinceLastCrisis: number

If a wrong datatype is entered, send an error, otherwise push the new data into the array

## Part 3

Do not start Part 3 until your show and create routes pass all its tests. If you are stuck, be sure to ask for help.

|  #  |   Action    |    URL    | HTTP Verb |    CRUD    | Description  |
| :-: | :---------: | :-------: | :-------: | :--------: | :----------: |
|  4  | **Destroy** | /logs/:id |  DELETE   | **D**elete | Delete a log |
|  5  | **Update**  | /logs/:id |    PUT    | **U**pdate | Update a log |

- add routes for delete and update
- add some logic so that if someone goes to an invalid array id they will be redirected to the 404 route you had written in the last part

### Bonuses

- If you've already written a validation function, try adding it to the update route. If you have not written it yet, give it a try!
- Go back and try any of the previous Bonuses
