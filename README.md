# Coffee Shop

This system produces a balance for each user in a Coffee Shop, taking into account their orders and payments.

[Problem Definition](./PROBLEM.md) defines the problem, and specifies data files for input and output.

## Development Commands

### Setup

```bash
 git clone https://github.com/gpazevedo/coffee-shop folder # copy the repository for a new folder
 yarn install                                              # install the dependencies
```

### Workflow

```bash
 yarn start:build    # Watch the source code and compiles it to JavaScript
 yarn start:run      # Watch the JavaScript files and run it
 yarn start          # Watch the source code, compile it and run it continuasly
 test                # Watch the source and execute all tests
 test component      # Watch the component source and execute its tests
 test:coverage       # Execute all tests and calculates the test coverage
 ```
