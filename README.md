
# Super Connect Application User Guide

Super connect is a digital product in the mental health segment that provides benefits in the form of interaction through chatbots for people with mental illness to provide advice and accompany them to tell stories.


# Table of Contents
  - [Getting Started](#getting-started)
  - [Tech Stack](#tech-stack)
  - [Using Super Connect](#using-super-connect)
  - [Troubleshooting](#troubleshooting)
  - [Contact](#contact)

# Getting Started

* System Requirements

    Before installing and using Super Connect, ensure that your device must have a stable internet connection.

- Installation
    - API Reference
        
    This project uses the API from OPENAI to generate chat responses sent by users. Get your API at OPENAI and edit at react/src/pages/home.jsx
    ```bash
        API_KEY = "YOUR_OPENAI_API"
    ```
    - Clone the project

    ```bash
        git clone https://github.com/msopiann/superconnect.git
    ```

    - Install Laravel dependencies
    ```bash
    composer install
    ```
    ```bash
    copy .env.example .env
    ```
    
    - Generate key and database migratation

    ```bash
    php artisan key:generate
    php artisan migrate
    ```

    - Go to the react directory

    ```bash
    cd react
    ```

    - Install React dependencies

    ```bash
    npm install
    ```

    - Start the server
    Open 2 terminal
    
    First terminal (root folder)

    ```bash
    cd superconnect
    
    php artisan serve
    ```

    Second terminal (react folder)
    ```bash
    cd react
    
    npm run start
    ```


## Tech Stack

![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)

![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

# Using Super Connect

- Accessing the Super Connect
    
    To access the Super Connect, follow these steps:
    
    - Run the Super Connect application on your device.
    
    - You will be directed to the Super Connect login interface, where you can sign in or sign up account to be able to interact with the Super Connect.

- Chatting with the Super Connect
    
    The Super Connect application uses natural language processing to understand your queries and provide relevant responses. To have a conversation with the Super Connect, follow these guidelines:
    
    - Type your message or question in the chatbox provided.
    
    - Press Enter or click the "Send" button to send your message to the Super Connect.
    
    - The Super Connect will analyze your input and generate a response in real-time.
    
    - Read the Super Connect's response and continue the conversation as needed.

- Command and Query Examples

    Here are a few examples of commands and queries you can use with the Super Connect:
    
    - Command: "Help"
        - Description: Asks the Super Connect to provide assistance or instructions.
            - Query: "I'm feeling really overwhelmed and stressed out. I need some advice on managing my mental health."
                - Description: Asks the Super Connect to provide information about guidance on how to alleviate stress and regain control over their mental well-being.

Note: Super Connect's capabilities may vary based on its configuration at the given prompt (the more complete the prompt is, the better the answer Super Connect gives).

# Troubleshooting

- Common Issues
    
    If you encounter any issues while using the chatbot application, refer to the following common solutions:
    
    - Issue: No response from the chatbot.
    
        - Solution: Ensure you have a valid OPENAI API KEY and a stable internet connection and try restarting the application. If the problem persists, contact our support team.

    - Issue: Unexpected or incorrect responses from the chatbot.
    
        - Solution: Review your input for clarity and try rephrasing your query. If the issue persists, report the problem to our support team.

# Contact

If you have any feedback, please reach out to us at ghealth.psti@gmail.com

Please provide relevant details about your issue to help us assist you more effectively.

Thank you for choosing our chatbot application! We hope this user guide has been helpful in getting you started and maximizing your experience. Happy chatting!

