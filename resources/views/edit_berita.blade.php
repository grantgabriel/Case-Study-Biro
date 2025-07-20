<!DOCTYPE html>
<html lang="id">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Edit Berita SDGs | Universitas Sumatera Utara</title>
        <link rel="icon" href="/assets/images/logo-usu.png">
        <script>
            window.articleData = @json($article);
        </script>
        <script src="https://cdn.tiny.cloud/1/jbpyfwp2nj7v8lgazl5dgs3w0d66bz42qgjzv4x1fp2jsois/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/edit_berita.jsx'])
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body class="bg-background-gray-usu">
        <div id="app"></div>
    </body>
</html>
