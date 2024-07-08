const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const addItem = async (event) => {
  const body = JSON.parse(event.body);
  const item = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: AWS.util.uuid.v4(),
      customerName: body.customerName,
      customerEmail: body.customerEmail,
      customerPhone: body.customerPhone,
      itemDate: body.itemDate,
      itemDetails: body.itemDetails,
      amount: body.amount,
      billType: body.billType
    }
  };

  try {
    await dynamoDb.put(item).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, item: item.Item }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};

const getItems = async () => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };

  try {
    const data = await dynamoDb.scan(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, items: data.Items }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};

const getItemById = async (event) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  try {
    const data = await dynamoDb.get(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, item: data.Item }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};

exports.handler = async (event) => {
  const { httpMethod, path } = event;

  if (httpMethod === 'POST' && path === '/add-item') {
    return await addItem(event);
  } else if (httpMethod === 'GET' && path === '/get-items') {
    return await getItems();
  } else if (httpMethod === 'GET' && path.startsWith('/get-item/')) {
    return await getItemById(event);
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' }),
    };
  }
};
