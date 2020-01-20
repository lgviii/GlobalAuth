dbPassword =
  "mongodb+srv://Auth:alLAXAqtfhkvjD3v@cluster0-iknwp.gcp.mongodb.net/test?retryWrites=true&w=majority";
passwordSecret = "keyboardCatkeyboardCat";

// 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';

module.exports = {
  mongoURI: dbPassword,
  secret: passwordSecret
};
