# Use a lightweight nginx base image
FROM nginx:alpine

# Copy your site into the nginx web root
COPY . /usr/share/nginx/html

# Health check to ensure the container is serving pages
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:80/ >/dev/null || exit 1