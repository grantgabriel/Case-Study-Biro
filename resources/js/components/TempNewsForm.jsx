import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function NewsForm({ data, edit }) {
    const editorRef = useRef(null);
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    // Submit propoperty form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();

        formData.append('title', form.title.value);
        formData.append('thumbnail', form.thumbnail.files[0]); // <== file
        formData.append('thumbnail_caption', form.thumbnail_caption.value);
        formData.append('publisher', form.publisher.value);
        formData.append('artikel', editorRef.current.getContent()); // <== dari TinyMCE
        formData.append('tag', form.tag.value);

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

            const response = await fetch('/dashboard/action/add-berita/store', {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: formData,
            });

            const text = await response.text();

            if (response.ok) {
                alert('Berita berhasil disimpan!');
                form.reset();
                editorRef.current.setContent('');
                window.location.href = '/dashboard';
            } else {
                console.error('Response error body:', text);
                alert('Gagal menyimpan berita.');
            }
        } catch (error) {
            console.error('Error saat kirim data:', error);
            alert('Terjadi kesalahan: ' + error.message);
        }
    };

    return (
        <div className="flex px-8 lg:px-16 2xl:px-[224px] py-2">
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <div>
                    <label className="block mb-1 font-semibold text-[12px] text-hitam-usu lg:text-[16px]">Title</label>
                    <input type="text" name="title" required className="px-3 py-2 border focus:border-hijau-usu rounded w-full text-hitam-usu" />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-[12px] text-hitam-usu lg:text-[16px]">Thumbnail</label>
                    <input type="file" name="thumbnail" accept="image/*" className="px-3 py-2 border focus:border-hijau-usu rounded w-full text-hitam-usu" />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-[12px] text-hitam-usu lg:text-[16px]">Caption Thumbnail</label>
                    <input type="text" name="thumbnail_caption" className="px-3 py-2 border focus:border-hijau-usu rounded w-full text-hitam-usu" />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-[12px] text-hitam-usu lg:text-[16px]">Publisher</label>
                    <input type="text" name="publisher" required className="px-3 py-2 border focus:border-hijau-usu rounded w-full text-hitam-usu" />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-[12px] text-hitam-usu lg:text-[16px]">Artikel</label>
                    <Editor
                        apiKey="jbpyfwp2nj7v8lgazl5dgs3w0d66bz42qgjzv4x1fp2jsois"
                        onInit={(evt, editor) => editorRef.current = editor}
                        init={{
                            height: 400,
                            menubar: false,
                            plugins: ['image', 'paste', 'link'],
                            toolbar: 'undo redo | bold italic underline | image link | removeformat',
                            paste_as_text: true
                        }}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-[12px] text-hitam-usu lg:text-[16px]">Tags (pisahkan dengan koma tanpa spasi)</label>
                    <input type="text" name="tag" placeholder="Contoh: TPB01,TPB04" className="px-3 py-2 border focus:border-hijau-usu rounded w-full text-hitam-usu" />
                </div>

                <button type="submit" className="bg-hijau-usu hover:bg-green-700 py-2 rounded w-full font-bold text-white">
                    Simpan Berita
                </button>
            </form>
        </div>
    );
}

export default NewsForm;
