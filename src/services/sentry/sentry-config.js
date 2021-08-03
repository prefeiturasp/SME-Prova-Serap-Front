import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { useCallback, useEffect } from 'react';
import { obterSentryDNS } from '../variaveis';

const SentryConfigurator = () => {
  const obterDns = useCallback(async () => {
    const dns = await obterSentryDNS();

    Sentry.init({
      dsn: dns || '',
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 1.0,
    });
  }, []);

  useEffect(() => {
    obterDns();
  }, [obterDns]);

  return null;
};

export default SentryConfigurator;
