# Advisors List Project

## Introduction

This project was bootstrapped with Create Next App. It uses Next.js, TypeScript and Storybook which are great tools to help you build React applications faster.

## Installation

First step is clone the repository and install the dependencies:

```bash
git clone https://github.com/<your-github-url>/advisors_list.git
cd advisors_list
npm install
```

## Running the project

To run the project in the development mode:

```bash
npm run dev
```

Then, open http://localhost:3000 in the browser to see the result.

## Running the server

To run the server, use the following command:

```bash
npm run server
```

## Running the tests

To run the tests:

```bash
npm run test
```

To run the tests in watch mode:

```bash
npm run test:watch
```

## Running Storybook

To run the Storybook:

```bash
npm run storybook
```

## Linting Code

We use ESLint to maintain code quality. To ensure your code complies with these standards, execute:

```bash
npm run lint
```

## Building the Project

To build the project for deployment:

```bash
npm run build
```

## Trade-offs and Reasoning

Given the constraints and goals of this project, several important decisions were made:

#### Client-side Filtering and Sorting

For this project, we decided to handle filtering and sorting on the client-side. The main reason for this choice is that our dataset is generated by Faker and doesn’t have any persistence or database layer involved. This means that we don't have to worry about bandwidth and could load all data onto the client for efficient manipulation.

However, it's essential to note that this might not be the best choice for larger datasets or in multi-user environments. With a larger dataset, loading all data to the client could be slow or even crash some clients. Moreover, unless all updates go through a single client, there's the risk of data getting out of sync between users, as each client will have its own separate version of the data.

In such cases, server-side sorting and filtering supported by a database layer would be a better option: it provides a single source of truth and the power to handle request of any size. We would likely implement such a feature as we scale the app and add a persisted database.

#### Next.js and TypeScript

These technologies provide a robust framework and assist with catching errors during the development process. They speed up development and offer improved maintainability without adding too much complexity.

#### Storybook

We included Storybook to allow for independent development of each component, making the process modular and more manageable.

These choices reflect the specific context and requirements of this project. In a different setting or with altered constraints, a different set of trade-offs would likely be more appropriate.

## Missing Pieces and Future Work

While this project serves its current purpose, there are several aspects that haven't been covered or could be improved:

#### Unit Testing

Currently, only one component is covered with a unit test. This has been set up as an example and illustrates how similar tests can be written for the rest of the components in the application.

#### Integration Testing

Cypress UI integration tests would greatly improve our confidence in the application. These tests would simulate a user interacting with the application and check that components are integrated correctly and behave as expected.

#### Documentation

Although this project has readme documentation, API documentation is missing. Swagger can be added for this purpose. Swagger provides a UI for documenting API which can be used by developers and users to understand API functionalities.

#### CSS Methodologies

This project doesn't use any CSS methodologies like BEM to organize styles. Although the current CSS setup might serve smaller projects, using a methodology like BEM could increase maintainability as the project grows.

#### Environment Variables

Uniform Resource Locators (URLs) are currently hardcoded into the application. It would be beneficial to send these values into the application as environment variables. This makes the code more secure and flexible, as you can alter the application's behavior without changing the code.

#### Accessibility

Accessibility options, such as aria-label attributes and roles, are currently not implemented. This is certainly a limitation of the site, and full accessibility support is a goal for future development.

It should be noted that this project was a testing app, and the decisions made reflect that.

## References

The project was influenced and guided by several resources. Specifically:

#### Card Design

The design of the cards in the application was inspired by this Codepen: [https://codepen.io/FlorinPop17/pen/EJKgKB](https://codepen.io/FlorinPop17/pen/EJKgKB)

#### Avatars

The avatars used in the application are from Dicebear Avatars service: [https://www.dicebear.com/how-to-use/http-api/](https://www.dicebear.com/how-to-use/http-api/)

#### Select Design

The styling of the select element in the application was influenced by this Codepen: [https://codepen.io/KenanYusuf/pen/PZKEKd](https://codepen.io/KenanYusuf/pen/PZKEKd)

Each of these resources has been instrumental in the design and development of this project.
