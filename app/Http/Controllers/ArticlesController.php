<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use App\Models\Article;
use Carbon\Carbon;

class ArticlesController extends Controller
{
    public function berita() {
        App::setLocale('id');

        $articles = Article::all();

        foreach ($articles as $article) {
            $article->formatted_date = $article->created_at->translatedFormat('l, d F Y');
            $article->tags = json_decode($article->tag, true);
        }

        return view('activities.berita', compact('articles'));
    }

    public function detail($slug) {
        App::setLocale('id');

        $article = Article::where('slug', $slug)->firstOrFail();

        $article->formatted_date = $article->created_at->translatedFormat('l, d F Y');

        // Decode tag JSON ke array
        $article->tags = json_decode($article->tag, true);

        return view('activities.detail_berita', compact('article'));
    }
}
