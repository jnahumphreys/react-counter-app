# Setup from base image
FROM mcr.microsoft.com/devcontainers/base:jammy

# Add required dependencies for Cypress
RUN apt-get update && apt-get install -y \
libgtk2.0-0 \
libgtk-3-0 \
libgbm-dev \
libnotify-dev \
libnss3 \
libxss1 \
libasound2 \
libxtst6 \
xauth \
xvfb