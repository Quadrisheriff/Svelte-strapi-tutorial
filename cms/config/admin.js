module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '972a1e8e74305a637c2a1789fd93b283'),
  },
});
