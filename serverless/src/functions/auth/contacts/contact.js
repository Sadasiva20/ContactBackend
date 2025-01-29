
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const  { uuid58 } = require ('uuid-base58');
const  {crypto  } = require ('crypto');  

const getRandomInt = (min, max) => {
  return crypto.randomInt(min, max);  
};

exports.contact = async (event) => {
  const { firstname, lastname, email, phoneNumber, contactOwner } = JSON.parse(event.body || '{}');


  if (!firstname) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'The First name is required.' })
    };
  }
  if (!lastname) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'The Last name is required.' })
    };
  }
  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'The Email is required.' })
    };
  }
  if (!phoneNumber) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'The Phone number is required.' })
    };
  }
  if (!contactOwner) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'The Contact owner is required.' })
    };
  }


  const randomId = uuid58();  



  const contactParams = {
    TableName: 'Contactname',
    Item: {
      id: randomId,  
      firstname,
      lastname,
      email,
      phoneNumber,
      contactOwner,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  };

  try {
  
    await dynamoDB.put(contactParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Contact created successfully!',
        data: {
          id: randomId,  
          firstname,
          lastname,
          email,
          phoneNumber,
          contactOwner
        }
      })
    };
  } catch (error) {
    console.error('Error inserting contact into DynamoDB:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to create contact.',
        error: error.message
      })
    };
  }
};
