# Stage 1 - imagen base con Node.js instalado
FROM node:10
# CReacion dle directorio de trabajo
WORKDIR /usr/src/app
# Exponemos los puertos de la aplicacion
EXPOSE 5000
# Asignamos las variables de entorno
ARG REACT_APP_URL
ENV REACT_APP_URL $REACT_APP_URL
# Instalamos "serve" para exponer nuestra aplicacion
RUN npm install -g serve
# Copiamos el codigo de nuestra aplicacion al directorio de trabajo
COPY . .
# Instalamos dependencias
RUN npm install
# Corremos nuestra aplicacion
CMD ["/usr/src/app/run"]

