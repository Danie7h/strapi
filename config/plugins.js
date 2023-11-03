module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-firebase-storage",
      providerOptions: {
        serviceAccount: require("../firebase.json"),
        // Custom bucket name
        bucket: env("STORAGE_BUCKET_URL"),
        sortInStorage: true, // true | false
        debug: false, // true | false
      },
    },
  },
});
