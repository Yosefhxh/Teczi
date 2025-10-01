# Teczi
Empresa de cursos

# Documentacion 
# 🌐 Proyecto Web Estático - Teczi

Este proyecto consiste en la creación de una **página web profesional** para la empresa **Teczi**, que muestra una galería de imágenes en formato **slider** y un apartado de **videos**.  
Todos los recursos (imágenes y videos) se encuentran alojados en un bucket de **Amazon S3** configurado como hosting web estático.

---

## 📌 Actividades / Retos Realizados

### 1. Creación del bucket S3
- Se creó un bucket en Amazon S3 con un nombre único:
- Se seleccionó la región más cercana.
- Se desactivó **Block Public Access** para permitir el acceso público a los objetos.

---

### 2. Subida de objetos
- Se subieron **5 imágenes (.jpg)** y **2 videos (.mp4)** al bucket.
- Se habilitaron propiedades públicas para cada objeto (`ACL → public-read`).
- Se copiaron los enlaces públicos de cada archivo:

**📷 Imágenes**
- https://galerias-teczi.s3.us-east-2.amazonaws.com/curso1.jpeg  
- https://galerias-teczi.s3.us-east-2.amazonaws.com/curso2.jpeg  
- https://galerias-teczi.s3.us-east-2.amazonaws.com/curso3.jpeg  
- https://galerias-teczi.s3.us-east-2.amazonaws.com/curso4.jpeg  
- https://galerias-teczi.s3.us-east-2.amazonaws.com/curso5.jpeg  

**🎥 Videos**
- https://galerias-teczi.s3.us-east-2.amazonaws.com/vid1.mp4  
- https://galerias-teczi.s3.us-east-2.amazonaws.com/vid2.mp4  

---

### 3. Diseño de la página web
- Se desarrollaron los **3 archivos básicos**:

1. `index.html` → estructura de la web.  
2. `style.css` → estilos modernos, responsive y estéticos.  
3. `script.js` → genera dinámicamente la galería de imágenes y videos desde un arreglo de URLs de S3.  

📌 Funcionalidades implementadas:
- **Slider de imágenes** con botones de navegación.  
- **Sección de videos** en formato grid.  
- **Modal interactivo** para ampliar imágenes o reproducir videos en pantalla completa.  
- **Diseño responsive**, accesible desde dispositivos móviles y escritorio.  

---

### 4. Hosting web estático en S3
- Se configuró el bucket como **Static Website Hosting**:  
- `Index document`: `index.html`  
- Se subieron `index.html`, `style.css` y `script.js` al bucket.  
- Se obtuvo la **URL del sitio web público** generado por S3.  

Ejemplo de URL:  

---

## 🚀 Cómo usar este proyecto

1. Clonar este repositorio o descargar los archivos:
   ```bash
   git clone https://github.com/[usuario]/teczi-web.git
