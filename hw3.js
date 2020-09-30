const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');


const personalityInsights = new PersonalityInsightsV3({
    authenticator: new IamAuthenticator({ apikey: 'ZhQjahXZKu3tK-oucJ-zB9JlNeVUHDWG7_74poGjXSWg' }),
    version: '2016-10-19',
    serviceUrl: 'https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/eeadf03f-3f0e-467b-a118-718bdce40e38'
});


const express = require('express')
const app = express()
const port = 3000
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', (req, res) => {
    res.sendfile('hw3.html');
})

app.post('/', (req, res) => {
    console.log(req.body);

    personalityInsights.profile(
        {
            content:req.body.text,
            contentType: 'text/plain',
            consumptionPreferences: true
        })
        .then(response => {
        console.log(JSON.stringify(response.result, null, 2));
        res.send(response);
}).catch(err => {
    console.log('error: ', err);
});


})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})