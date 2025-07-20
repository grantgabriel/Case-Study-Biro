import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function NewsForm({ data, edit }) {
    const editorRef = useRef(null);
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const [formValues, setFormValues] = useState({
        title: '',
        thumbnail_caption: '',
        publisher: '',
        tag: '',
    });

    useEffect(() => {
        if (data && edit) {
            let parsedTags = '';
            try {
                const tagData = typeof data.tag === 'string' ? JSON.parse(data.tag) : data.tag;
                parsedTags = Array.isArray(tagData) ? tagData.join(',') : tagData;
            } catch {
                parsedTags = data.tag || '';
            }

            setFormValues({
                title: data.title || '',
                thumbnail_caption: data.thumbnail_caption || '',
                publisher: data.publisher || '',
                tag: parsedTags || '',
            });

            setTimeout(() => {
                if (editorRef.current && data.article) {
                    editorRef.current.setContent(data.article);
                }
            }, 100);
        }
    }, [data, edit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();

        formData.append('title', form.title.value);
        formData.append('thumbnail_caption', form.thumbnail_caption.value);
        formData.append('publisher', form.publisher.value);
        formData.append('artikel', editorRef.current.getContent());
        formData.append('tag', form.tag.value);

        if (form.thumbnail.files.length > 0) {
            formData.append('thumbnail', form.thumbnail.files[0]);
        }

        const url = edit
            ? `/dashboard/action/edit-berita/update/${data.id}`
            : '/dashboard/action/add-berita/store';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: formData,
            });

            const text = await response.text();

            if (response.ok) {
                alert(edit ? 'Berita berhasil diperbarui!' : 'Berita berhasil disimpan!');
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
                    <label className="block mb-1 font-semibold">Title</label>
                    <input
                        type="text"
                        name="title"
                        required
                        defaultValue={formValues.title}
                        className="px-3 py-2 border focus:border-hijau-usu rounded w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Thumbnail</label>
                    {edit && data.thumbnail && (
                        <div className="mb-2">
                            <img src={data.thumbnail} alt="Thumbnail Preview" className="rounded h-32 object-cover" />
                            <p className="text-gray-500 text-sm">Thumbnail saat ini</p>
                        </div>
                    )}
                    <input
                        type="file"
                        name="thumbnail"
                        accept="image/*"
                        className="px-3 py-2 border focus:border-hijau-usu rounded w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Caption Thumbnail</label>
                    <input
                        type="text"
                        name="thumbnail_caption"
                        defaultValue={formValues.thumbnail_caption}
                        className="px-3 py-2 border focus:border-hijau-usu rounded w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Publisher</label>
                    <input
                        type="text"
                        name="publisher"
                        required
                        defaultValue={formValues.publisher}
                        className="px-3 py-2 border focus:border-hijau-usu rounded w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Artikel</label>
                    <Editor
                        apiKey="jbpyfwp2nj7v8lgazl5dgs3w0d66bz42qgjzv4x1fp2jsois"
                        onInit={(evt, editor) => {
                            editorRef.current = editor;
                            if (edit && data?.article) {
                                setTimeout(() => {
                                    editor.setContent(data.article);
                                }, 100);
                            }
                        }}
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
                    <label className="block mb-1 font-semibold">Tags (pisahkan dengan koma tanpa spasi)</label>
                    <input
                        type="text"
                        name="tag"
                        placeholder="Contoh: TPB01,TPB04"
                        defaultValue={formValues.tag}
                        className="px-3 py-2 border focus:border-hijau-usu rounded w-full"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-hijau-usu hover:bg-green-700 py-2 rounded w-full font-bold text-white"
                >
                    {edit ? 'Perbarui Berita' : 'Simpan Berita'}
                </button>
            </form>
        </div>
    );
}

export default NewsForm;
