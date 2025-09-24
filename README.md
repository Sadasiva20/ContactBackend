# ContactBackend

## Overview
ContactBackend is a serverless backend service designed to handle contact form submissions. It provides a RESTful API for creating and storing contact information securely using AWS services.

## Purpose
This project serves as the backend interface for a contact form, allowing users to submit their contact details (first name, last name, email, phone number, and contact owner). The system validates the input, generates unique identifiers, and stores the data in a scalable NoSQL database.

## Technologies Used
- **Node.js 18.x**: Runtime environment for serverless functions
- **AWS SDK**: For interacting with AWS services, particularly DynamoDB
- **Serverless Framework**: For deploying and managing AWS Lambda functions and infrastructure
- **Amazon DynamoDB**: NoSQL database for storing contact information
- **UUID Base58**: For generating unique contact identifiers
- **Serverless Offline**: Development tool for local testing

## Project Structure
```
ContactBackend/
├── package.json                    # Project dependencies and scripts
├── serverless/
│   └── infrastructure/
│       └── serverless.yml          # Serverless Framework configuration
└── src/
    └── functions/
        └── auth/
            ├── contacts/
            │   └── contact.js      # Lambda function for contact creation
            └── register/
                └── ContactEvent.json # Example event payload for testing
```

## Features
- **Contact Creation**: RESTful POST endpoint for submitting contact information
- **Input Validation**: Ensures all required fields are provided
- **Unique ID Generation**: Each contact receives a unique Base58-encoded UUID
- **Error Handling**: Comprehensive error responses for validation failures and server errors
- **CORS Support**: Allows cross-origin requests from web applications
- **Local Development**: Supports offline development and testing

## API Endpoints
- **POST /contact**: Create a new contact
  - Body: JSON with `firstname`, `lastname`, `email`, `phoneNumber`, `contactOwner`
  - Returns: Success message with created contact data or error details

## Setup and Deployment
1. Install dependencies:
   ```
   npm install
   ```

2. Deploy to AWS:
   ```
   serverless deploy
   ```

3. Run locally for development:
   ```
   serverless offline
   ```

## Database Schema
- **Contacts Table**: Stores contact information with primary key `id`
- **Counters Table**: Manages auto-incrementing counters for contact IDs


