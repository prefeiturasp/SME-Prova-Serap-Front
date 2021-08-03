import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { useCallback, useEffect } from 'react';
import { obterSentryDSN } from '../variaveis';

const SentryConfigurator = () => {
  const obterDsn = useCallback(async () => {
    const dsn = await obterSentryDSN();

    Sentry.init({
      dsn: dsn || '',
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 1.0,
    });
  }, []);

  useEffect(() => {
    obterDsn();
  }, [obterDsn]);

  return null;
};

export default SentryConfigurator;
