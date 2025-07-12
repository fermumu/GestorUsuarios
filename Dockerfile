# Imagen de Node
FROM node:18

# directorio del contenedor
WORKDIR /app

# copiar archivos de configuración
COPY package*.json ./

# instalar dependencias
RUN npm install

# copiar el codigo
COPY . .

# exponer el puerto
EXPOSE 3000

# iniciar la app
CMD ["node", "app.js"]