const createPublicEnvs = (): IPublicEnvs => {
  // SSR
  if (typeof window === 'undefined') {
    return {
      FOO: String(process.env.FOO),
    };
  }

  // CSR
  return {
    FOO: String(window.__ENV['REACT_APP_FOO']),
  };
};

const createPrivateEnvs = (): IPrivateEnvs => ({
  BAR: String(process.env.BAR),
});

export const env = {
  ...createPublicEnvs(),
  ...createPrivateEnvs(),
};
