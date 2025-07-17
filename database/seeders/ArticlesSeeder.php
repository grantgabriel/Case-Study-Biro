<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class ArticlesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('articles')->insert([
            [
                'title' => 'USUs Effort to Encourage Student Digital Literacy by Cooperating with PT. Gojek',
                'slug' => Str::slug('USUs Effort to Encourage Student Digital Literacy by Cooperating with PT. Gojek'),
                'publisher' => 'Lorem Ipsum Dolor Sit',
                'thumbnail' => '/assets/images/thumbnail/banner-detail-berita.png',
                'thumbnail_caption' => 'Foto Bersama Lorem Ipsum Dolor Sit Amer',
                'article' => '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p><p>More content here...</p>',
                'tag' => json_encode(['TPB04', 'TPB12']),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
