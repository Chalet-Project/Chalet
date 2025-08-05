


```bash
docker run -itd --name Chalet -v /opt/Dev/Chalet/Chalet:/workspace oven/bun:latest bash
```

```bash
# curl -fsSL https://bun.com/install | bash
bun create better-t-stack@latest chalet --yes --frontend next --database postgres --db-setup docker --addons pwa turborepo
```