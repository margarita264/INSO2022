const { IncomingWebhook } = require('@slack/webhook');
const url = 'https://hooks.slack.com/services/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';
const webhook = new IncomingWebhook(url);

exports.loggerSlack = {
  write: message => {
    if (process.env.NODE_ENV === 'production') {
      webhook.send({
        text: stripAnsi('```' + message + '```')
      })
    } else if (process.env.NODE_ENV === 'development') {
      console.log('ERROR', message)
    }
  },
};
