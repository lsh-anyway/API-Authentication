if (process.env.NODE_ENV === "test") {
  module.exports = {
    JWT_SECRET: "LshAuthentication",
    oauth: {
      google: {
        clientID: "number",
        clientSecret: "string"
      },
      facebook: {
        clientID: "number",
        clientSecret: "string"
      }
    }
  };
} else {
  module.exports = {
    JWT_SECRET: "LshAuthentication",
    oauth: {
      google: {
        clientID:
          "748134862501-i5bo2b70c2j97h4oaigkgvt8o0foq6rq.apps.googleusercontent.com",
        clientSecret: "1bvRYlJh0Tm0XrI_sWLyp_fK"
      },
      facebook: {
        clientID: "254497765117957",
        clientSecret: "c0f50ce76c18c87367b9a4ecceff28a2"
      }
    }
  };
}
