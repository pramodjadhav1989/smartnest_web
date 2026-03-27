FROM nginx:alpine

# Copy Vite build output
COPY dist/ /usr/share/nginx/html

# Nginx config for React routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4174
CMD ["nginx", "-g", "daemon off;"]
