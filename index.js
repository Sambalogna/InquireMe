const fs = require('fs');
const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where do you live?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Hobby?',
      name: 'hobby',
    },
    {
      type: 'input',
      message: 'Write a small bio.',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'Type in your githubURL',
      name: 'githubURL',
    }
  ])
  .then((response) => {
    console.log(response)

    const htmlSkeleton = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inquire Me</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">

    </head>
    <body>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h1 id="name">${response.name}</h1>
        </div>
        <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p id="hobby">${response.hobby} </p>
          <p id="bio">${response.bio}</p>
          <p id="bio"><a href='${response.githubURL}'>${response.githubURL}</a></p>
          
          <footer class="blockquote-footer" id="location">${response.location} </footer>
        </blockquote>
        </div>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </body>
    </html>`
    fs.writeFile('index.html',htmlSkeleton,(err)=>
    err ? console.error(err) : console.log('index.html created!')
    )}
  );

//Created by: Mohammad & Sam

 
    // Quote
  
  
    
      
    //   <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    
  
