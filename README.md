# Library Project

**Library Project** is a web application designed to manage virtual libraries. This application allows you to add and manage authors and books, as well as name your virtual library, providing an intuitive interface to handle literary content.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Usage](#usage)

## Features

- **Author Management:**  
  Create, list, edit, and delete authors.

- **Book Management:**  
  Register books with details such as title, author, publication date, page count, description, and cover image.

- **Deletion Validation:**  
  Prevents deletion of authors with associated books, ensuring data integrity.

- **Image Upload:**  
  Integrated with FilePond for image upload and preview (e.g., book covers).

- **Responsive Interface:**  
  Uses EJS for dynamic rendering, providing a smooth and pleasant user experience.

## Technologies Used

- **Backend:** Node.js with Express  
- **Database:** MongoDB (using Mongoose)  
- **Template Engine:** EJS  
- **Environment Variables:** dotenv  
- **File Upload:** FilePond (with plugins for image preview, resizing, and file encoding)

## Project Structure
The project is organized with a modular and intuitive structure:

```
library-project/
├── app.js or server.js          # Main file to start the server
├── models/                      # Mongoose models
├── routes/                      # Application routes 
├── views/                       # EJS templates for rendering the pages
├── public/                      # Static files
├── .env                         # Environment variables
└── package.json                 # Project dependencies and scripts
```

## Usage

The application allows you to:

- **Register an Author:** Enter the name and other relevant details.

- **Register a Book:** Associate the book with an author and input details such as title, publication date, page count, description, and upload a cover image.

- **Manage Records:** Edit or delete existing entries, with validations that prevent undesired actions (e.g., not allowing deletion of an author if there are books associated).

If an author has associated books and a deletion is attempted, an error message will be displayed, ensuring data integrity.