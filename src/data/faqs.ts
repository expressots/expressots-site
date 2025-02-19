export const faqs = [
  {
    question: 'What is ExpressoTS?',
    answer:
      'ExpressoTS is a lightweight, fast, and scalable Node.js framework built with TypeScript. It is designed to streamline the development of server-side applications by providing a developer-friendly environment that emphasizes clean code, type safety, and a clear separation of concerns. ExpressoTS offers flexible templates—both opinionated and non-opinionated—to cater to different project structures and development styles. The opinionated template is based on clean architecture principles, incorporating concepts like entities, use cases, repositories, and providers. This structure facilitates the creation of highly maintainable and testable applications.',
  },
  {
    question: 'Is ExpressoTS open-source?',
    answer:
      'Yes! ExpressoTS is an open-source project licensed under the MIT License. The source code is publicly available on GitHub, allowing developers to inspect, modify, and contribute to the project. The community is encouraged to participate actively by reporting issues, suggesting features, and submitting pull requests. This collaborative approach fosters continuous improvement and innovation within the framework.',
  },
  {
    question: 'How do I install ExpressoTS?',
    answer:
      'To install ExpressoTS, you can use the Node Package Manager (npm). First, install the ExpressoTS Command Line Interface (CLI) globally:\n\n```bash\nnpm install -g @expressots/cli\n```\n\nAfter installing the CLI, you can create a new ExpressoTS project by running:\n\n```bash\nexpressots new your-project-name\n```\n\nThis command will prompt you to select a template (opinionated or non-opinionated) and configure your project accordingly. The CLI streamlines the setup process, allowing you to start developing your application without boilerplate code.',
  },
  {
    question: 'Where can I find the documentation?',
    answer:
      "The official documentation for ExpressoTS is available at https://doc.expresso-ts.com/. It provides comprehensive guides, tutorials, and API references to assist developers in building applications with ExpressoTS. The documentation covers various topics, including installation, project structure, middleware, controllers, and more. Additionally, the ExpressoTS GitHub repository hosts a wiki with technical documentation, offering insights into the framework's architecture, design decisions, coding conventions, and tools.",
  },
  {
    question: 'How can I contribute to ExpressoTS?',
    answer:
      "Contributing to ExpressoTS is welcomed and can be done in several ways:\n\n- **Reporting Issues:** If you encounter bugs or have suggestions for improvements, you can submit issues on the GitHub repository.\n\n- **Submitting Pull Requests:** Developers are encouraged to fork the repository, implement enhancements or fixes, and submit pull requests for review. Detailed guidelines for contributing can be found in the CONTRIBUTING_HOWTO.md file.\n\n- **Joining the Community:** Engage with other developers and contributors by joining the ExpressoTS Discord community and LinkedIn group. These platforms provide opportunities to share experiences, ask questions, and participate in discussions about the framework.\n\n- **Financial Support:** Consider supporting the project financially by becoming a sponsor on GitHub. Financial contributions help allocate more resources to the project's development, enabling faster implementation of new features and improvements.\n\nYour involvement, in any form, is greatly appreciated and contributes to the growth and success of ExpressoTS.",
  },
  {
    question: 'What templates does ExpressoTS offer for project setup?',
    answer:
      "ExpressoTS provides two types of templates to accommodate different development preferences:\n\n- **Opinionated Template:** This template is structured around clean architecture principles, incorporating layers such as entities, use cases, repositories, and providers. It enforces a modular and organized project structure, promoting maintainability and scalability.\n\n- **Non-Opinionated Template:** This template offers a more flexible structure, allowing developers to organize their projects as they see fit without adhering to a predefined architectural pattern.\n\nDuring project initialization with the ExpressoTS CLI, you can choose the template that best suits your project's requirements.",
  },
  {
    question: 'Does ExpressoTS support middleware and controllers?',
    answer:
      'Yes, ExpressoTS fully supports middleware and controllers, providing a robust system for handling HTTP requests and responses.\n\n- **Middleware:** You can add global or route-specific middleware to your application. ExpressoTS supports standard Express middleware and allows the creation of custom middleware to handle tasks such as authentication, logging, and error handling.\n\n- **Controllers:** Controllers in ExpressoTS act as the primary interface between the client and server. They handle incoming requests, validate payloads, and emit responses. The framework supports both the Model-View-Controller (MVC) pattern and the Single Responsibility Pattern, giving developers flexibility in organizing their code.\n\nDetailed information on implementing middleware and controllers can be found in the ExpressoTS Middleware & Controller guide.',
  },
  {
    question: 'How does ExpressoTS handle rendering views?',
    answer:
      'ExpressoTS enhances the web server capabilities of Express.js by providing a streamlined experience for rendering views. It supports various templating engines out-of-the-box, including EJS, Pug, and Handlebars (HBS). This support allows developers to render dynamic content seamlessly. The framework provides default configurations for each supported engine, simplifying the setup process. Developers can also customize settings such as the views directory and partials directory as needed.',
  },
]
