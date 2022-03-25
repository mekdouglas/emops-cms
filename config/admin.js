module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '71743a24468c140771069f397069c543'),
  },
});
