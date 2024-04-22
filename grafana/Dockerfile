FROM grafana/grafana:latest

# Verifica se é necessário mudar para usuário root e instala gettext para obter envsubst
USER root
RUN apk --no-cache add gettext

# Copia o entrypoint.sh e define as permissões diretamente
COPY --chmod=755 grafana/entrypoint.sh /entrypoint.sh
COPY --chown=grafana:root grafana/datasources/datasources.template.yaml /etc/grafana/provisioning/datasources/datasources.template.yaml

# Muda de volta para o usuário padrão do Grafana
USER grafana
ENTRYPOINT ["/entrypoint.sh"]
CMD ["grafana-server"]
