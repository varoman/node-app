const request = require('request');

const auth = `Basic ${new Buffer('varomanukyan@gmail.com:asdasdasd').toString('base64')}`;

const createZendeskUser = (user) => {
    const postData = {
        user: {
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            user_fields: user,
            role: 'end-user'
        }
    };

    return new Promise((resolve, reject) => {
        request.post({
            url : 'https://varo.zendesk.com/api/v2/users.json',
            body: postData,
            json: true,
            headers : {
                'Authorization' : auth
            }
        }, (err, res, body)=> {
            if (err)
                reject(err);
            else
                resolve(body);
        });
    });
};

const updateUser = editedUser => {
    const updatedUSer = Object.assign({}, editedUser);

    delete updatedUSer._id;
    delete updatedUSer.__v;
    delete updatedUSer.zendesk_id;
    const postData = {
        user: {
            name: `${updatedUSer.first_name} ${updatedUSer.last_name}`,
            email: updatedUSer.email,
            user_fields: updatedUSer
        }
    };

    request.put({
        url : `https://varo.zendesk.com/api/v2/users/${editedUser.zendesk_id}.json`,
        body: postData,
        json: true,
        headers : {
            'Authorization' : auth
        }
    });
};

module.exports = {
    createZendeskUser,
    updateUser
};