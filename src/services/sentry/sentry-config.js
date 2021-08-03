import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { useCallback, useEffect } from 'react';
import { obterSentryDSN } from '../variaveis';

const SentryConfigurator = () => {
  const obterDsn = useCallback(async () => {
    const sentryConfig = await obterSentryDSN();

    Sentry.init({
      dsn: sentryConfig?.sentryDSN || '',
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 1.0,
      environment: sentryConfig?.sentryEnvironment,
    });
  }, []);

  useEffect(() => {
    obterDsn();
  }, [obterDsn]);

  return null;
};

export default SentryConfigurator;
