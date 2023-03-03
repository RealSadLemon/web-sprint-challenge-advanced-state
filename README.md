# Sprint Challenge: Advanced State Management

In this challenge, I wrote the logic for [THIS APP](https://advanced-state-wheel.herokuapp.com/), which is a React App using stateful logic to allow transmition of data from one page to another on the SPA. Letting users submit quiz data and then take the quiz, as well as implementing clockwise and counter-clockwise alteration of UI elements.

## Tools

- Node 16.x
- NPM 8.x (update NPM executing `npm i -g npm`)
- Unix-like shell (Gitbash/bash/zsh)
- Chrome >= 98.x

### Important notes from "Product"

- The routes **don't lose their state** by navigating the links back and forth:
  - Current position of the "B" in the wheel is maintained.
  - Current quiz question stays loaded.
  - Values inside the form are kept.
- The endpoint to fetch the next quiz is rather slow, and a "Loading next quiz" shows instead of the quiz **while it arrives**.
- A next quiz is only requested if there is **no quiz already in app state**, or by submitting an answer.
- The "Submit answer" button in the quiz stays disabled until **an answer is selected**.
- Once an answer is selected, the only way to unselect it is by **selecting the other answer**.
- The "Submit new quiz" button in the form stays disabled until **all** inputs have values such that `value.trim().length > 0`.
- Submitting a new quiz successfully **adds it to the roster** of questions that cycle through the quiz screen.
- The structure of the HTML (hierarchy, ids, class names, texts on buttons etc) must match those of the prototype exactly.

The endpoints needed for this project are the following:

- `[GET] http://localhost:9000/api/quiz/next`
  - The response to a proper request includes `200 OK` and the next quiz object
- `[POST] http://localhost:9000/api/quiz/new`
  - Expects a payload with the following properties: `question_text`, `true_answer_text`, `false_answer_text`
  - Example of payload: `{ "question_text": "Love JS?", "true_answer_text": "yes", "false_answer_text": "nah" }`
  - The response to a proper request includes `201 Created` and the newly created quiz object
  - A malformed client payload will result in a `422 Unprocessable Entity` response with a reason
- `[POST] http://localhost:9000/api/quiz/answer`
  - Expects a payload with the following properties: `quiz_id`, `answer_id`
  - Example of payload: `{ "quiz_id": "LVqUh", "answer_id": "0VEv0" }`
  - A response to a proper request includes `200 OK` and feedback on the answer
