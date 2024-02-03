module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env('S3_ACCESS_KEY_ID'),
          secretAccessKey: env('S3_SECRET_ACCESS_KEY'),
          region: env('S3_REGION'),
          params: {
            Bucket: env('S3_BUCKET'),
          },
        }
      },
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  },
  email: {
    config: {
      provider: env('EMAIL_PROVIDER'),
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('SENDGRID_FROM_EMAIL'),
        defaultReplyTo: env('SENDGRID_REPLY_TO_EMAIL'),
        testAddress: env('SENDGRID_TEST_EMAIL'),
      },
    },
  },
});