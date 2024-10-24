@echo off

cd ..
npx tailwindcss -i ../public/styles/main.css -o ../public/styles/style.css --watch

pause
