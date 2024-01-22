module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env('AKIAW3MEAONSPR2E5LB3'),
          secretAccessKey: env('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'),
          region: env('us-east-1'),
          params: {
            Bucket: env('blackandbarhe-strapi'),
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