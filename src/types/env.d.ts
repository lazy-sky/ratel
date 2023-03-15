// CSR
interface IPublicEnvs {
  // In '.env.dev', '.env.prod'.
  // Prefixed with 'REACT_APP_'.
  FOO: string;
}

// SSR
interface IPrivateEnvs {
  BAR: string;
}
