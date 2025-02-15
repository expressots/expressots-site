---
title: "Introduction to ExpressoTS"
author: "Juliano Soares"
date: "2025-02-15"
excerpt: "ExpressoTS is a lightweight and scalable Node.js framework built with TypeScript. This post covers its architecture, key features, and how to get started quickly."
image: "/assets/blog/expressots.png"
---

# Introduction to ExpressoTS

ExpressoTS is a lightweight, developer-friendly Node.js framework designed to streamline the creation of highly maintainable server-side applications using TypeScript. Built atop Express.js, it offers a structured yet flexible approach, enabling developers to focus on core business logic by abstracting technical complexities. ([expresso-ts.com](https://expresso-ts.com/?utm_source=chatgpt.com))

## Philosophy of ExpressoTS

The core philosophy of ExpressoTS is to enhance developer productivity through clean code practices, type safety, and a clear separation of concerns. By integrating seamlessly with the Node.js ecosystem and leveraging TypeScript's static typing, ExpressoTS promotes the development of scalable and easy-to-maintain applications. ([expresso-ts.com](https://expresso-ts.com/?utm_source=chatgpt.com))

## Architecture of ExpressoTS

ExpressoTS employs a modular architecture centered around the Inversion of Control (IoC) container, facilitating efficient dependency injection. This design ensures that all necessary modules, including route controllers, are properly managed and loaded. The framework encourages a clear separation of responsibilities, with controllers handling HTTP requests, services encapsulating business logic, and providers managing external resources.

**Key Components:**

- **Controllers**: Handle incoming HTTP requests and delegate tasks to appropriate services.
- **Services**: Contain business logic and interact with repositories or external APIs.
- **Providers**: Manage external resources such as databases or third-party services.
- **Repositories**: Abstract data access logic, providing a clean interface for data retrieval and manipulation.

## Getting Started with ExpressoTS

### Prerequisites

- **Node.js**: Ensure you have Node.js version 20.18.0 or higher installed.
- **npm**: Node's package manager, typically bundled with Node.js installations.

### Installing the ExpressoTS CLI

To facilitate project creation and management, ExpressoTS offers a Command-Line Interface (CLI). Install it globally using npm:

```bash
npm install -g @expressots/cli
```

### Creating a New Project

Initialize a new ExpressoTS project with the CLI:

```bash
expressots new project-name
```

During setup, you'll be prompted to select a project template:

- **Non-opinionated**: Offers flexibility with minimal configuration.
- **Opinionated**: Provides a structured setup adhering to best practices.
- **MicroAPI**: Ideal for building lightweight microservices.

Choose the template that best aligns with your project requirements.

### Project Structure

The default project structure for the **Non-opinionated** template includes:

```
project-name/
├── src/
│   ├── app.controller.ts
│   ├── app.ts
│   ├── main.ts
├── test/
│   ├── app.controller.spec.ts
```

- **app.controller.ts**: Defines a basic controller with a sample route.
- **app.ts**: Configures the application modules and middleware.
- **main.ts**: The entry point of the application.
- **app.controller.spec.ts**: Contains unit tests for the controller.

For detailed information on other templates and advanced configurations, refer to the [official documentation](https://doc.expresso-ts.com/docs/core/first-steps).

### Creating a Simple Controller

To add a new controller:

1. Within the `src` directory, create a file named `hello.controller.ts`:

    ```typescript
    import { controller, httpGet } from '@expressots/core';
    import { Response } from 'express';

    @controller('/hello')
    export class HelloController {
      @httpGet('/')
      public sayHello(res: Response): void {
        res.send('Hello, ExpressoTS!');
      }
    }
    ```

2. Register the controller in the application module (`app.module.ts`):

    ```typescript
    import { CreateModule } from '@expressots/core';
    import { HelloController } from './hello.controller';

    const AppModule = CreateModule([HelloController]);

    export { AppModule };
    ```

3. Start the application:

    ```bash
    npm run dev
    ```

Navigate to `http://localhost:3000/hello` to see the message: "Hello, ExpressoTS!".

## Conclusion

ExpressoTS streamlines server-side application development by combining the robustness of Node.js with the type safety of TypeScript. Its modular architecture and developer-centric design make it an excellent choice for building scalable and maintainable applications. For more information and advanced topics, visit the [official ExpressoTS documentation](https://doc.expresso-ts.com/).

For a visual introduction and deeper insights into ExpressoTS, consider watching the following video:

[ExpressoTS is here, Nest.js is Doomed](https://www.youtube.com/watch?v=WX4QHTtRpRo) 