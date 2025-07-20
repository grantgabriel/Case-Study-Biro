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
                'article' => '<p>&ldquo;Lorem ipsum dolor sit amet consectetur. Quam sem curabitur pellentesque ultricies. Urna lobortis egestas elit consectetur turpis non in egestas proin. Elementum mi ultrices phasellus neque integer dignissim porttitor tincidunt odio. Elementum sapien egestas donec purus velit praesent. Neque fermentum eget.&rdquo;</p>
<p>Lorem ipsum dolor sit amet consectetur. Sit fames sed suspendisse euismod leo urna. Potenti urna felis non ultricies id cras. Et convallis sem id neque quam hac pulvinar nisl. Blandit scelerisque sit eu netus. Scelerisque varius amet risus donec dignissim cras urna. Quam enim tristique hendrerit scelerisque amet mauris cras pulvinar. Duis vulputate lacus condimentum et. Fermentum vulputate varius fermentum ipsum facilisis venenatis adipiscing sollicitudin massa.</p>
<p>Condimentum lacus nunc porttitor sed viverra neque amet vitae vulputate. Pretium dolor nibh sollicitudin nulla cursus ac suspendisse. Viverra quisque erat purus elementum varius magnis enim. Quis bibendum dictum tincidunt arcu in est libero lorem est.</p>
<p>Accumsan neque nunc nec tortor. Massa rutrum pretium morbi morbi. Augue porttitor integer et id in viverra. Proin posuere ut senectus suspendisse a id. Habitasse pharetra aliquet maecenas iaculis vitae justo. Praesent iaculis consectetur suspendisse vestibulum commodo.</p>
<p>Nulla eget fermentum pellentesque fermentum neque arcu nam. Neque mi nulla faucibus risus lorem diam neque varius ut. Nibh adipiscing feugiat nunc elementum. Donec turpis cras enim sit. Duis varius diam adipiscing sed purus vel dignissim sed gravida.</p>',
                'tag' => json_encode(['TPB04', 'TPB12']),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Grant Gabriel Tambunan Mewakili Fasilkom Sebagai Mapres Utama!',
                'slug' => Str::slug('Grant Gabriel Tambunan Mewakili Fasilkom Sebagai Mapres Utama!'),
                'publisher' => 'Fasilkom-TI',
                'thumbnail' => '/assets/images/thumbnail/banner-grant-gabriel-tambunan-mewakili-fasilkom-sebagai-mapres-utama.png',
                'thumbnail_caption' => 'Banner Pilmapres',
                'article' => '<p>Grant Gabriel Tambunan, mahasiswa Teknologi Informasi USU 2022 akan mewakili Fasilkom-TI sebagai mahasiswa berprestasi utama.</p>
<p>Bermodalkan E-Cycle, Grant Gabriel Tambunan akan mewakili gagasan kreatifnya, dan juga poster pribadi nya dan menjadikan e-cycle sebuah proyek karya inovasi terbaik.&nbsp;</p>
<p>Harapan fasilkom semoga karya ini mendapatkan awards. Aminnn!</p>
<p>Love, PIE</p>',
                'tag' => json_encode(['TPB04', 'TPB11']),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]
        ]);
    }
}
