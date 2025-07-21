<!DOCTYPE html>
<html lang="id" class="h-full">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Login | Universitas Sumatera Utara</title>
        <link rel="icon" href="/assets/images/logo-usu.png">
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/login.jsx'])
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body class="flex justify-center items-center w-screen h-screen">
        <div id="app"></div>
    </body>
</html>
