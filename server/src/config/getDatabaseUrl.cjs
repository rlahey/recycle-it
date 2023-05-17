const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/rlahey_breakable_toy_development",
      test: "postgres://postgres:postgres@localhost:5432/rlahey-breakable-toy_test",
      e2e: "postgres://postgres:postgres@localhost:5432/rlahey-breakable-toy_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
