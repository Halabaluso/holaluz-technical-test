
![Logo](https://elbiensocial.org/wp-content/uploads/2021/11/holaluz-logo.jpg)


# Proyect title

#RoofRevolution

Holaluz frontend programmer technical test


## Demo

Link live demo: https://65af7a5eb7780a00088d03a2--benevolent-starburst-96dd99.netlify.app/


## Installation

Go to the project folder and run

```bash
  npm install
```

For live version 

```bash
  npm run dev
```

For deploy version y dist folder 

```bash
  npm run build
```

For e2e test  

```bash
  test:e2e:dev
```
    
## Features

- Typescript
- Vue 3 with Vite
- Pinia
- Cypress
- TailwindCSS & DaisyUI & Tailwind animated


## Documentation

The application consists of an input to enter the customer's cups. If the cups is incorrect the /client page is not displayed, if it is favorable the /client page is displayed with the necessary information.

Regarding the accessibility of the promotion, if the promotion is available it will be displayed, and if it is not available it will not be displayed.

Likewise, if available, the first type of discount will not be displayed, and the second and third type of discount will be displayed on the screen.

For the second type of discount I have taken into account that if any of the neighbors has a power higher than that of the client, the discount will not be applied.

For the third type of discount, the turnover of all neighbors must be > 100

In the "views" folder are the general views, and in the "components" folder are the components of each general view.


