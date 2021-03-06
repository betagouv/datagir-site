var SibApiV3Sdk = require('sib-api-v3-sdk')

var defaultClient = SibApiV3Sdk.ApiClient.instance

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SENDINBLUE_API_KEY
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['api-key'] = "Token"

exports.handler = function(event) {
  var api = new SibApiV3Sdk.ContactsApi()
  return api.getList(10).then((data) => ({
    statusCode: 200,
    body: JSON.stringify(data),
  }))
}
