const validateEnv = () => {
  const envs = {
    ...process.env,
  };

  const requiredEnvs = ['PORT'];

  requiredEnvs.forEach(env => {
    if (!envs[env]) {
      throw new Error(`Missing env: ${env}`);
    }
  });
};

export default validateEnv;
