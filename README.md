# Angular Project README

This Angular project is designed to demonstrate the synchronization of data between components using services and @Input/@Output decorators.

## Project Structure

The project structure is organized as follows:

```
angular-project/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── first/
│   │   │   │   ├── first.component.ts
│   │   │   │   ├── first.component.html
│   │   │   │   ├── first.component.scss
│   │   │   │
│   │   │   ├── second/
│   │   │   │   ├── second.component.ts
│   │   │   │   ├── second.component.html
│   │   │   │   ├── second.component.scss
│   │   │   │
│   │   ├── services/
│   │   │   ├── shared.service.ts
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │   ├── ...
│
├── ...
```

- `first.component`: First component with input fields for product price and discount.
- `second.component`: Second component receiving the price with discount from the first component, and receive input for tax value and returns through Output() the final price
- `main-container.component`: Main container component containing both the first and second components.
- `shared.service`: Shared service managing the synchronization of data between components.
- `app-routing.module`: Routing module defining routes for the application.

## Running the Application

To run the application, follow these steps:

1. **Install Dependencies**: Run `npm install` to install all dependencies.

2. **Start the Development Server**: Run `yarn start` to start the development server. Navigate to `http://localhost:4200/` to view the application in your browser.

## Accessing the First Component

To access the first component via a route, follow these steps:

1. Navigate to `http://localhost:4200/product` to access the first component.

## Testing

Unit tests have been provided for both the `FirstComponent` and the `SecondComponent`. To run the tests, use the command `yarn test`.
