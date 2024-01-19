/// <reference types="cypress" />

describe('Bookstore App Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3003/');
  });

  it('Verify if the user has opened the app', () => {
    cy.contains('Welcome to My Bookstore').should('exist');
  });

  it('Click on Explore Now button', () => {
    cy.get('#navbarNav ul li:nth-child(1) button').click();
    cy.contains('Login!').should('exist');
  });

  it('Check for User login', () => {
    cy.get('#navbarNav ul li:nth-child(1) button').click();
    cy.get('#email').type('kashifkhankk799872@gmail.com');
    cy.get('#password').type('Kashif');
    cy.get('button:contains("Login!")').click();
    cy.get('div').should('exist');
  });

  it('Check the search functionality', () => {
    cy.get('input[type="text"]').type('the kite runner');
    cy.get('#basic-navbar-nav form button').click();
    cy.get('div').should('exist');
  });

  it('Check sign up functionality', () => {
    cy.get('#navbarNav ul li:nth-child(2) button').click();
    cy.contains('Sign up').should('exist');
    cy.get('#name').type('John Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#password').type('samplePassword');
    cy.get('#confirmPassword').type('samplePassword');
    cy.get('button:contains("Register")').click();
    cy.get('div').should('exist');
  });

  it('Users should register themselves', () => {
    cy.get('#navbarNav ul li:nth-child(2) button').click();
    cy.contains('Sign up').should('exist');
    cy.get('#name').type('John Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#password').type('samplePassword');
    cy.get('#confirmPassword').type('samplePassword');
    cy.get('button:contains("Register")').click();
    cy.get('div').should('exist');
  });

  it('Test Logout', () => {
    cy.get('#navbarNav ul li:nth-child(3) button').click();
    cy.get('#email').type('kashifkhankk799872@gmail.com');
    cy.get('#password').type('Kashif');
    cy.get('button:contains("Login!")').click();
    cy.get('input[type="text"]').type('the kite runner');
    cy.get('#basic-navbar-nav form button').click();
    cy.get('div').should('exist');
    cy.get('#basic-navbar-nav div:nth-child(2) button').click();
    cy.contains('Welcome to My Bookstore').should('exist');
  });

  it('Test Successful Login', () => {
    cy.visit('http://localhost:3003/login');
    cy.get('#email').type('testuser@example.com');
    cy.get('#password').type('testpassword');
    cy.get('button:contains("Login")').click();
    cy.contains('Search Results').should('exist');
  });

  it('Test Failed Login', () => {
    cy.visit('http://localhost:3003/login');
    cy.get('#email').type('invaliduser@example.com');
    cy.get('#password').type('invalidpassword');
    cy.get('button:contains("Login")').click();
    cy.contains('Search Results').should('not.exist');
  });

  it('Test Search Books No Results', () => {
    cy.visit('http://localhost:3003/search');
    cy.get('input[type="text"]').type('non-existent book');
    cy.get('#basic-navbar-nav form button').click();
    cy.contains('No results found.').should('exist');
  });

  it('Test Home Page', () => {
    cy.contains('Welcome to My Bookstore').should('exist');
    cy.contains('Explore Now').should('exist');
    cy.contains('Sign Up for Free').should('exist');
    cy.contains('Logout').should('not.exist');
  });

  it('Test Navigation from Home to Login', () => {
    cy.contains('Explore Now').click();
    cy.contains('Login!').should('exist');
  });

  it('Test Navigation from Home to Signup', () => {
    cy.contains('Sign Up for Free').click();
    cy.contains('Sign up').should('exist');
  });
  it('Test Navigation from Login to Home', () => {
    cy.contains('Explore Now').click();
    cy.contains('Login!').should('exist');
    cy.get('a[href="/"]').click();
    cy.contains('Welcome to My Bookstore').should('exist');
  });

  it('Test Navigation from Signup to Home', () => {
    cy.contains('Sign Up for Free').click();
    cy.contains('Sign up').should('exist');
    cy.get('a[href="/"]').click();
    cy.contains('Welcome to My Bookstore').should('exist');
  });

  it('Test Add Book Button', () => {
    cy.get('#navbarNav ul li:nth-child(5) button').click();
    cy.contains('Add a New Book').should('exist');
  });

  it('Test Add Book Form Submission', () => {
    cy.get('#navbarNav ul li:nth-child(5) button').click();
    cy.contains('Add a New Book').should('exist');
    cy.get('#title').type('Test Book');
    cy.get('#author').type('Test Author');
    cy.get('#description').type('Test Description');
    cy.get('button:contains("Add Book")').click();
    cy.contains('Book added successfully').should('exist');
  });

  it('Test Book List', () => {
    cy.get('#navbarNav ul li:nth-child(4) button').click();
    cy.contains('Book List').should('exist');
  });

  it('Test Logout from Book List', () => {
    cy.get('#navbarNav ul li:nth-child(4) button').click();
    cy.contains('Book List').should('exist');
    cy.get('#basic-navbar-nav div:nth-child(2) button').click();
    cy.contains('Welcome to My Bookstore').should('exist');
  });

  it('Test Search Books with Results', () => {
    cy.get('input[type="text"]').type('Harry Potter');
    cy.get('#basic-navbar-nav form button').click();
    cy.get('div').should('exist');
  });

  it('Test Search Books with No Results', () => {
    cy.get('input[type="text"]').type('Non-existent Book');
    cy.get('#basic-navbar-nav form button').click();
    cy.contains('No results found.').should('exist');
  });

  it('Test Unauthorized Access to Book List', () => {
    cy.visit('http://localhost:3003/books');
    cy.contains('Login!').should('exist');
  });

  it('Test Unauthorized Access to Add Book', () => {
    cy.visit('http://localhost:3003/add');
    cy.contains('Login!').should('exist');
  });

  it('Test Unauthorized Access to Search Books', () => {
    cy.visit('http://localhost:3003/search');
    cy.contains('Login!').should('exist');
  });

  it('Test Unauthorized Access to Logout', () => {
    cy.visit('http://localhost:3003/');
    cy.get('#basic-navbar-nav div:nth-child(2) button').click();
    cy.contains('Login!').should('exist');
  });
  it('Test Successful Registration', () => {
    cy.get('#navbarNav ul li:nth-child(2) button').click();
    cy.contains('Sign up').should('exist');
    cy.get('#name').type('New User');
    cy.get('#email').type('newuser@example.com');
    cy.get('#password').type('newpassword');
    cy.get('#confirmPassword').type('newpassword');
    cy.get('button:contains("Register")').click();
    cy.contains('Registration successful').should('exist');
  });
  
  it('Test Failed Registration - Password Mismatch', () => {
    cy.get('#navbarNav ul li:nth-child(2) button').click();
    cy.contains('Sign up').should('exist');
    cy.get('#name').type('Another User');
    cy.get('#email').type('anotheruser@example.com');
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('mismatchedpassword');
    cy.get('button:contains("Register")').click();
    cy.contains('Passwords do not match').should('exist');
  });
  
  it('Test Failed Registration - Email Already Exists', () => {
    cy.get('#navbarNav ul li:nth-child(2) button').click();
    cy.contains('Sign up').should('exist');
    cy.get('#name').type('Existing User');
    cy.get('#email').type('existinguser@example.com');
    cy.get('#password').type('newpassword');
    cy.get('#confirmPassword').type('newpassword');
    cy.get('button:contains("Register")').click();
    cy.contains('Email already exists').should('exist');
  });
  
  it('Test Add Book with Empty Fields', () => {
    cy.get('#navbarNav ul li:nth-child(5) button').click();
    cy.contains('Add a New Book').should('exist');
    cy.get('button:contains("Add Book")').click();
    cy.contains('Please fill in all fields').should('exist');
  });
  
  it('Test Unauthorized Access to Book Details', () => {
    cy.visit('http://localhost:3003/books/bookId123');
    cy.contains('Login!').should('exist');
  });
  
  it('Test Unauthorized Access to Add Book Form', () => {
    cy.visit('http://localhost:3003/add');
    cy.contains('Login!').should('exist');
  });
  
  it('Test Unauthorized Access to Search Books Results', () => {
    cy.visit('http://localhost:3003/search?q=Harry%20Potter');
    cy.contains('Login!').should('exist');
  });
});
