
# Super Connect

Super connect is a digital product in the mental health segment that provides benefits in the form of interaction through chatbots for people with mental illness to provide advice and accompany them to tell stories.


## Team Project
- [@putridnovyy](https://www.github.com/putridnovyy)
- [@msopiann](https://www.github.com/msopiann)
- [@thryna](https://www.github.com/thryna)
- [@SriLestariii](https://www.github.com/SriLestariii)
## Screenshots

![App Screenshot](url('./public/img/chatbotUI.png'))


## Tech Stack
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)

![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)



## API Reference

#### OPENAI
This project uses the API from OPENAI to generate chat responses sent by users. Get your API at OPENAI
```bash
  API_KEY = "YOUR_OPENAI_API"
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/msopiann/superconnect.git
```

Go to the project directory

```bash
  cd superconnect
```

Install dependencies

```bash
  composer install
```

Copy .env.example file to .env on the root folder.

```bash
  copy .env.example .env
```
Run

```bash
  php artisan key:generate
  php artisan migrate
```

Go to the project directory

```bash
  cd superconnect
  cd react
```

Install dependencies

```bash
  npm install
```

Start the server

Open 2 terminal

First terminal

```bash
  cd superconnect
  
  php artisan serve
```

Second terminal
```bash
  cd react
  
  npm run start
```

