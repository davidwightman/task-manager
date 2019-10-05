const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'davidwightmanmusic@gmail.com',
        subject: 'Thanks for joining the App',
        text: `Hi ${name}, Welcome to the App. - David`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'davidwightmanmusic@gmail.com',
        subject: 'See you later',
        text: `Hi ${name}, Thanks for using the app. Sorry things did not work out. - David`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}