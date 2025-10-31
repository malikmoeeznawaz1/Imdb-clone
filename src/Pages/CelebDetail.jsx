import React from 'react'
import { useLocation, Link } from 'react-router-dom'

// This page intentionally DOES NOT fetch data.
// It expects a `celebrity` object to be passed via `location.state` when navigating from the list.
// If the object is missing (direct link / refresh), we show a friendly message and a Back button.

const CelebDetail = () => {
    const location = useLocation()
    const celebrity = location.state?.celebrity || null

    if (!celebrity) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center p-6">
                <div className="max-w-xl text-center bg-[rgba(0,0,0,0.6)] p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-amber-100 mb-3">Data not provided</h2>
                    <p className="text-gray-300 mb-4">This page expects the celebrity data to be passed from the list. Please open the profile from the celebrities list to view details.</p>
                    <Link to="/" className="inline-block bg-[#F5C518] text-black px-4 py-2 rounded-md">Back to home</Link>
                </div>
            </div>
        )
    }

    const img = celebrity.image?.original || celebrity.image?.medium

    return (
        <div className="min-h-[70vh] p-6 md:p-12 text-white">
            <div className="max-w-5xl mx-auto shadow-[#E9BE00] rounded-lg shadow-md overflow-hidden">
                <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl md:text-2xl font-semibold text-amber-100">Person profile</h2>
                        <Link to="/" className="text-sm bg-[#F5C518] text-black px-3 py-1 rounded">Back</Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-56 lg:w-72 shrink-0">
                            <div className="w-full h-56 md:h-72 bg-gray-700 rounded-lg overflow-hidden shadow-md">
                                {img ? (
                                    <img src={img} alt={celebrity.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-300">No image</div>
                                )}
                            </div>
                        </div>

                        <div className="flex-1">
                            <h1 className="text-2xl md:text-3xl font-bold">{celebrity.name}</h1>
                            <div className="mt-3 text-sm text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-2">
                                {celebrity.country?.name && (
                                    <div><span className="text-gray-200 font-medium">Country:</span> <span className="ml-1">{celebrity.country.name}</span></div>
                                )}
                                {celebrity.gender && (
                                    <div><span className="text-gray-200 font-medium">Gender:</span> <span className="ml-1 capitalize">{celebrity.gender}</span></div>
                                )}
                                {celebrity.birthday && (
                                    <div><span className="text-gray-200 font-medium">Birthday:</span> <span className="ml-1">{celebrity.birthday}</span></div>
                                )}
                                {celebrity.deathday && (
                                    <div><span className="text-gray-200 font-medium">Deathday:</span> <span className="ml-1">{celebrity.deathday}</span></div>
                                )}
                                {celebrity.url && (
                                    <div className="md:col-span-2"><a href={celebrity.url} target="_blank" rel="noreferrer" className="text-amber-200 underline">View on TVMaze</a></div>
                                )}
                            </div>

                            <div className="mt-6">
                                <h3 className="text-lg font-semibold">About</h3>
                                <p className="mt-2 text-gray-300">No biography available from the passed object. You can extend this page to include credits or external links.</p>
                            </div>

                            <div className="mt-6 flex gap-3 flex-wrap">
                                <span className="text-xs text-gray-400">Updated: {celebrity.updated ? new Date(celebrity.updated * 1000).toLocaleString() : '—'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CelebDetail