echo "Inicializando a Aplicação..."
echo "API_URL = ${API_URL}"
echo "TRACKING_ID = ${TRACKING_ID}"
echo "SENTRY_DSN = ${SENTRY_DSN}"
echo "SENTRY_ENVIRONMENT = ${SENTRY_ENVIRONMENT}"
envsubst < "/usr/share/nginx/html/configuracoes/template.json" > "/usr/share/nginx/html/configuracoes/variaveis.json"
nginx -g 'daemon off;'
