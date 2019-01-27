# react-exchange

Folder ke bagi menjadi 2:
  1. Folder Docker (Berisikan Dockerfile dan folder build untuk membuat docker images)
  2. Folder React-Code (Berisikan file-file reactjs yang biasa di jalankan lewat npm start)
  
Cara menjalankan Docker
  - masuk ke folder docker lewat terminal
  - jalankan perintah "docker build -t react-app ."
  - lalu run docker image dengan perintah "docker run -d -p 8000:80 --name react-app react-app"
  - setelah itu ilahkan buka "localhost:8000"
  - aplikasi react sudah berhasil dijalankan
  
Cara menjalankan React-Code
  - masuk ke folder react-code
  - jalankan perintah "npm install"
  - lalu run aplikasi dengan perintah "npm start"
  - aplikasi react sudah berjalan
