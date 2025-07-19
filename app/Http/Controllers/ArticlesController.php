<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
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

    public function dashboard() {
        App::setLocale('id');

        $articles = Article::select('id', 'title', 'slug', 'thumbnail', 'tag', 'article', 'created_at')->get();

        foreach ($articles as $article) {
            $article->formatted_date = $article->created_at->translatedFormat('l, d F Y');
            $article->tags = json_decode($article->tag, true);
            unset($article->tag);
        }

        return view('dashboard', compact('articles'));
    }

    public function addBerita() {

        return view('add_berita');
    }

    public function deleteBerita($id) {
        $article = Article::find($id);

        if (!$article) {
            return redirect()->back()->with('error', 'Berita tidak ditemukan.');
        }

        if ($article->thumbnail && File::exists(public_path($article->thumbnail))) {
            File::delete(public_path($article->thumbnail));
        }

        $article->delete();

        return redirect()->route('dashboard')->with('success', 'Berita berhasil dihapus.');
    }
}
