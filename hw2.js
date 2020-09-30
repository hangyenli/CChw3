const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2020-08-01',
  authenticator: new IamAuthenticator({
    apikey: 'Sm9tuK34ueZ6gMS_8yH8x-cXh7N-L6odIUNrD8uXcen7',
  }),
  serviceUrl: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/42a21c9e-32ee-46e7-8a8f-77ee7e94c50a',
});

const analyzeParams = {
    "entities": {
        "model": "de5d2c56-5f96-4653-b9f7-2397e7b08113"
    },
  'url': 'https://www.cnn.com/2020/09/29/media/anthony-fauci-fox-news-media/index.html',
  'features': {
    'categories': {
      'limit': 3
    }
  }
};

naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
  console.log(JSON.stringify(analysisResults.result.categories, null, 2));
})
.catch(err => {
  console.log('error:', err);
});
