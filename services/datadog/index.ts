import { datadogRum } from "@datadog/browser-rum";

export const datadogService = () => {
  const APPLICATION_ID = process.env.DATADOG_APPLICATION_ID;
  const CLIENT_TOKEN = process.env.DATADOG_CLIENT_TOKEN;
  if (APPLICATION_ID && CLIENT_TOKEN) {
    datadogRum.init({
      applicationId: APPLICATION_ID,
      clientToken: CLIENT_TOKEN,
      site: process.env.DATADOG_SITE,
      service: process.env.DATADOG_SERVICE,
      env: process.env.NODE_ENV,
      sessionSampleRate: 100,
      sessionReplaySampleRate: 100,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: "allow",
    });
  }
};
