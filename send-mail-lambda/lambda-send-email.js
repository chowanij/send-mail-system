const aws = require('aws-sdk');
const ses = new aws.SES({
   region: 'us-west-2'
});

exports.handler = async(event) => {
    console.log("Incoming: ", event);
   // var output = querystring.parse(event);

    const eParams = {
        Destination: {
            ToAddresses: ["jan.chowaniec@outlook.com"]
        },
        Message: {
            Body: {
                Text: {
                    Data: "Hey! What is up?"
                }
            },
            Subject: {
                Data: "to jest email z aws"
            }
        },
        Source: "jchowaniec85@gmail.com"
    };

    console.log('===SENDING EMAIL===');
    const email = await ses.sendEmail(eParams)
        .promise()
        .then((result) => {
            return {
                status: 'sucess'
            }
        })
        .catch((err) => {
            console.log(err)
            return {
                status: error,
                err
            }
        });
    

    return email;
};