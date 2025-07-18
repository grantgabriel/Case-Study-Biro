<!DOCTYPE html>
<html lang="id">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Berita SDGs | Universitas Sumatera Utara</title>
        <script>
            window.articlesData = @json($articles);
        </script>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/berita.jsx'])
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
