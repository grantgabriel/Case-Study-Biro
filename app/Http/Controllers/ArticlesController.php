<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
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

    public function storeBerita(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'thumbnail' => 'nullable|image',
            'thumbnail_caption' => 'nullable|string',
            'publisher' => 'required|string',
            'artikel' => 'required|string',
            'tag' => 'nullable|string',
        ]);

        $thumbnailPath = null;
        if ($request->hasFile('thumbnail')) {
            $file = $request->file('thumbnail');
            $filename = 'banner-' . Str::slug($request->title) . '.' . $file->getClientOriginalExtension();
            $thumbnailPath = '/assets/images/thumbnail/' . $filename;
            $file->move(public_path('assets/images/thumbnail'), $filename);
        }

        \App\Models\Article::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'publisher' => $request->publisher,
            'thumbnail' => $thumbnailPath,
            'thumbnail_caption' => $request->thumbnail_caption,
            'article' => $request->artikel,
            'tag' => json_encode(explode(',', $request->tag)), // jika input tag pakai koma
        ]);

        return response()->json(['message' => 'Berita berhasil disimpan.'], 200);
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

    public function editBerita( $id ) {
        $article = Article::find($id);

        return view('edit_berita', compact('article'));
    }
}
