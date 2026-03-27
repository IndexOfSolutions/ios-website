'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BlogFilters({ blogs }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [activeFilter, setActiveFilter] = useState(searchParams.get('type') || 'all');

    const handleFilterChange = (filterValue) => {
        setActiveFilter(filterValue);

        const params = new URLSearchParams(searchParams);
        if (filterValue === 'all') {
            params.delete('type');
        } else {
            params.set('type', filterValue);
        }
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const filteredBlogs = activeFilter === 'all'
        ? blogs
        : blogs.filter(blog => blog.type === activeFilter);

    const filterOptions = [
        { label: 'All', value: 'all' },
        { label: 'Blogs', value: 'blog' },
        { label: 'Success Stories', value: 'success story' },
    ];

    return (
        <>
            <div className="flex items-center gap-4 mb-8">
                {filterOptions.map(option => (
                    <button
                        key={option.value}
                        onClick={() => handleFilterChange(option.value)}
                        className={`px-4 py-2 border-[1] rounded-lg transition-colors cursor-pointer ${
                            activeFilter === option.value
                                ? 'bg-primary border-primary text-mainbg'
                                : 'bg-mainbg border-primary text-fg hover:bg-primary/10'
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            <div className="columns-1 md:columns-3 gap-4 w-full text-fg">
                {!filteredBlogs.length ? (
                    <p className='text-fg'>No Blogs Found</p>
                ) : (
                    filteredBlogs.map((blog) => {
                        if (!blog.id || !blog.link || !blog.title) {
                            console.warn('Skipping invalid blog entry:', blog);
                            return null;
                        }

                        return (
                            <Link
                                key={blog.id}
                                href={`/blogs/${blog.link}`}
                                target='_blank'
                                className="break-inside-avoid mb-4 w-full p-6 bg-secondary rounded-lg flex flex-col gap-4"
                            >
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-[inter] font-black text-sm">
                                            {blog.author || 'Unknown Author'}
                                        </span>
                                        <span className="text-xs">{blog.date || 'No date'}</span>
                                    </div>
                                    <div className="text-xs px-1.5 py-1 h-fit leading-none bg-primary rounded-2xl">
                                        <span className='capitalize'>{blog.type || 'article'}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-xl font-[inter] font-black">
                                        {blog.title}
                                    </h2>
                                    {blog.excerpt && (
                                        <p className="line-clamp-3">{blog.excerpt}</p>
                                    )}
                                </div>
                            </Link>
                        );
                    })
                )}
            </div>
        </>
    );
}
