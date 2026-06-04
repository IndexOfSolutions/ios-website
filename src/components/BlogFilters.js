'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';

function distributeIntoColumns(items, columnCount) {
    const columns = Array.from({ length: columnCount }, () => []);
    items.forEach((item, i) => {
        columns[i % columnCount].push(item);
    });
    return columns;
}

function BlogCard({ blog }) {
    if (!blog.id || !blog.link || !blog.title) {
        console.warn('Skipping invalid blog entry:', blog);
        return null;
    }

    return (
        <Link
            href={`/blogs/${blog.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-6 bg-secondary rounded-lg flex flex-col gap-4 hover:opacity-80 transition-opacity"
        >
            <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                    <span className="font-[inter] font-black text-sm">
                        {blog.author || 'Unknown Author'}
                    </span>
                    <span className="text-xs">{format(blog.date, 'dd-MM-yyyy') || 'No date'}</span>
                </div>
                <div className="text-xs px-1.5 py-1 h-fit leading-none bg-primary rounded-2xl">
                    <span className="capitalize">{blog.type || 'article'}</span>
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
}

export default function BlogFilters({ blogs }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [activeFilter, setActiveFilter] = useState(searchParams.get('type') || 'all');
    const [columnCount, setColumnCount] = useState(3);

    // Sync column count with screen size
    useEffect(() => {
        function updateColumns() {
            setColumnCount(window.innerWidth >= 768 ? 3 : 1);
        }
        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

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

    const columns = distributeIntoColumns(filteredBlogs, columnCount);

    return (
        <>
            {/* Filter Bar */}
            <div className="flex items-center gap-4 mb-8 top-[100px] sticky z-10 bg-mainbg py-4">
                {filterOptions.map(option => (
                    <button
                        key={option.value}
                        onClick={() => handleFilterChange(option.value)}
                        className={`px-4 py-2 border rounded-lg transition-colors cursor-pointer ${
                            activeFilter === option.value
                                ? 'bg-primary border-primary text-mainbg'
                                : 'bg-mainbg border-primary text-fg hover:bg-primary/10'
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            {!filteredBlogs.length ? (
                <p className="text-fg">No Blogs Found</p>
            ) : (
                <div className="flex gap-4 w-full text-fg items-start">
                    {columns.map((column, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-4 flex-1 min-w-0">
                            {column.map(blog => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}