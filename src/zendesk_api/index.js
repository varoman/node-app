const request = require('request');

const auth = `Basic ${new Buffer('varomanukyan@gmail.com:asdasdasd').toString('base64')}`;

const createZendeskUser = (user) => {

    const postData = {
        user: {
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            user_fields: user
        }
    };

    request.post({
        url : 'https://varo.zendesk.com/api/v2/users.json',
        body: postData,
        json: true,
        headers : {
            'Authorization' : auth
        }
    });
};

module.exports = {
    createZendeskUser
};