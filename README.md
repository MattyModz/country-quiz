# Getting Started with Country Quiz app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This was a fun one to do, Learn countries capitals in this fun country capital quiz game, can you keep your streak going?

Guess the displayed countries capital from three available options, to learn how this project was built, read more below!

## Project Dependencies

This section provides an overview of the key packages and dependencies used in this project.

<strong>React</strong>

<strong>Typescript</strong>

<strong>Tailwind</strong>

### Data fetching and error handling

<strong>axios:</strong> data fetched via Axios, using axios native cancellation token, and data cached via local storage.

<strong>@tanstack/react-query</strong> - hook available to be used, found in hooks/use-fetch. Which can be imported and extends all tanstack functions.

For this application i chose to implement fetching just with axios for demonstration of good data fetching and testing principles.

Error handling throws toast error message and also stored error in state, which could be extended for logging purposes.

### Styling and UI

<strong>country-flag-icons package:</strong> Provides an array of country flag icons accesible thorugh ISO code returned from api.

<strong>react-hot-toast:</strong> for displaying error messages.

### Animations and Transitions

<strong>framer-motion:</strong> Enables the implementation of smooth animations and transitions in your user interface.

<strong>react-confetti:</strong> Adds celebratory confetti animations because who doesnt love conffetti.

### utils

<strong>tailwind-merge:</strong> allows you to define sets of Tailwind CSS classes as objects and merge them together to apply multiple classes to an element. This makes your code cleaner and more readable while still benefiting from the power of Tailwind's utility classes.

<strong>clsx:</strong> Aids in applying dynamic CSS classes conditionally to components, contributing to flexible styling.

## Quiz App Logic Explanation

This section provides an explanation of the logic behind the quiz app code. The code is designed to generate random quiz questions about country capitals and provide multiple-choice answer options.

### 1. Filtering Countries with Capitals

This line of code filters out countries from the dataset that have empty or whitespace-only capital names. The resulting CountriesWithCapitals array contains only countries with valid capitals.

```javascript
const CountriesWithCapitals = response.data.data.filter(
  (country) => country.capital.trim() !== ""
);
```

### 2. Choosing a Random Country

These lines of code select a random country from the CountriesWithCapitals array. The randomCountry will be used as the focus of the quiz question.

```javascript
const randomCountryIndex = Math.floor(
  Math.random() * CountriesWithCapitals.length
);
const randomCountry = CountriesWithCapitals[randomCountryIndex];
```

### 3. Selecting Other Countries

This code creates an array called otherCountries that includes all countries with capitals except for the randomCountry. This ensures that the other two answer options won't include the capital of the randomCountry.

```javascript
const otherCountries = CountriesWithCapitals.filter(
  (country) => country.capital !== randomCountry.capital
);
```

### 4. Shuffling Other Countries

Here, we shuffle the otherCountries array using the fisherYatesShuffle function and select the first two shuffled countries. These two options will serve as alternative answers

```javascript
const randomOtherCountries = fisherYatesShuffle(otherCountries).slice(0, 2);
```

### 5. Creating Answer Options

This code constructs the final array of answer options. It includes the capital of the randomCountry and the capitals of the two randomly selected randomOtherCountries. The entire array is shuffled again using fisherYatesShuffle to present the options in a random order.

```javascript
const answerOptions = fisherYatesShuffle([
  randomCountry.capital,
  ...randomOtherCountries.map((country) => country.capital),
]);
```

## Tesing libaries

<strong>@testing-library/react:</strong> Provides utilities for writing tests to ensure the reliability of your components and application.

<strong>@testing-library/jest-dom:</strong> Enhances testing with additional matchers for more intuitive assertions.

### Testing Scenarios

The unit tests cover the following scenarios:

### Testing Fetching data from the country endpoint

1. <strong>Successful Data Fetching:</strong> The test simulates a scenario where the API responds with valid country data. The function's ability to fetch the data, store it in local storage, and update the loading state is validated.

2. <strong>Error Handling:</strong> The test simulates an error response from the API. The function's error handling capabilities are examined, including displaying error toast messages and updating the error state.

3. <strong>Mocking Dependencies</strong>
   To isolate the tests and control their behavior, several dependencies are mocked:

The axios library is replaced with mockAxios, allowing us to control the responses from the API and simulate different scenarios.

The react-hot-toast library is also mocked, enabling us to track and verify the behavior of toast notifications.

### Testing the quiz logic function

1. <strong>Correct State Updates</strong>
   This test verifies that the QuizLogic function appropriately updates the application's context states based on the provided response from the API. It confirms that the relevant context functions are called the expected number of times.

2. <strong>Non-Empty Options</strong>
   This test ensures that the generated answer options do not contain empty strings. It leverages the mock context functions to capture the generated options and checks for the presence of empty strings in them.

3. <strong>Unique Options.</strong>
   To guarantee that the quiz options are unique, this test creates a set of the generated options and compares its size with the total number of options. If they match, it means all options are unique.

### Running Tests

To run the tests, execute the following command in your project's root directory:

```javascript
npm test
```

This will trigger the Jest test runner, which will execute the unit tests and provide feedback on the results.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---
