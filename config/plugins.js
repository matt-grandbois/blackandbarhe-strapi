module.exports = ({ env }) => ({
    /*
    upload: {
      config: {
        provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            ACL: env('AWS_ACL', 'public-read'), // 'private' if you want to make the uploaded files private
            Bucket: env('AWS_BUCKET'),
          },
        },
      },
    }, 
    */
    email: {
        config: {
          provider: 'sendgrid',
          providerOptions: {
            apiKey: env('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'),
          },
          settings: {
            defaultFrom: 'no-reply@blackandbarhe.com',
            defaultReplyTo: 'no-reply@blackandbarhe.com',
            testAddress: 'matt@mattgrandbois.com',
          },
        },
    },
  });