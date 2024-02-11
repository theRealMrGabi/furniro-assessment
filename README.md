# E-Commerce Application (assessment)

> Welcome to Furniro (not real name), an E-commerce assessment web app for managing e-commerce products. The basic functionalities of the app include Fetching and viewing list of products, viewing a single product by its ID, adding a new product, adding item to cart, updating cart item quantity and removing item from cart. This project utilizes technologies listed below to deliver a feature-rich e-commerce solution

## Getting Started (usage)

The following steps must be strictly adhered to in other to successfully run the project.

1. Ensure Node.JS is installed on your local machine, and by extension npm also.
2. Clone the [repository](https://github.com/theRealMrGabi/furniro-assessment).
3. Open project repo via terminal or code editor and run `npm install` to install project dependencies.
4. Create a `.env.local` file in the root of the project, and copy the values from `.env.example` into the newly created `.env.local` file.
5. Run `npm run dev` to start the application in development mode.
6. Navigate to [http://localhost:3000](http://localhost:3000) in your browser to access the application.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Plus_Jakarta_Sans, a custom Google Font.

## Assumptions

- Basic understanding of Javascript, Typescript, NodeJS, ReactJS and NextJS
- Since no data fetching library/concept was mentioned, i opted to go for `@tanstack/react-query`.
- NextJS app router was used over page router

## Technologies and packages used

- TypeScript
- **@heroicons/react**: used for icons so as not to add extra bundle of image assets to the project
- **axios**: a popular JavaScript library used for making HTTP requests from both the browser and Node.js environments. It provides a simple and intuitive API for performing asynchronous operations like fetching data from APIs or submitting data to servers.
- **@tanstack/react-query**: a state management library for React applications, providing hooks for fetching, caching, and updating asynchronous data. It simplifies complex data-handling tasks with features like automatic caching, background data fetching, and mutation functions.
- **classnames**: A simple JavaScript utility for conditionally joining classNames together.
- **react-hook-form**: a lightweight React library for managing form state and validation with minimal boilerplate. It offers easy-to-use hooks for handling form data, validation rules, and error messages, promoting a cleaner and more efficient approach to building forms in React applications.
- **@hookform/resolvers**: an extension package for react-hook-form, providing built-in validation resolver functions for handling complex validation logic such as Yup, Joi, or custom validation schemas. It seamlessly integrates with react-hook-form to simplify form validation and error handling in React applications.
- **react-hot-toast**: a lightweight, customizable notification library for React applications, offering easy-to-use hooks for displaying toast notifications.
- **Yup**: a schema validation library for JavaScript and TypeScript, widely used for validating objects, forms, and data structures.
- **Zustand**: a small, fast, and reactive state management library for React applications. It offers a simple and intuitive API for creating and managing global or local state with minimal boilerplate, promoting a more straightforward and efficient approach to state management in React components

## Deployment

Vercel is my choice of deployment for this project. Instructions on how to deploy a NextJS project on vercel can be found on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) and [Next.js deployment documentation](https://nextjs.org/docs/deployment)

## Contact

Author and Developer

- [@theRealMrGabi](https://www.github.com/therealmrgabi) - GitHub
- [@theRealMrGabi](https://www.twitter.com/therealmrgabi) - Twitter
- [@Adegabi Ibrahim](https://www.linkedin.com/in/ibrahimadegabi/) - LinkedIn

## License

[MIT](https://choosealicense.com/licenses/mit/)
