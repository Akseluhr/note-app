import React from 'react';
import Link from 'next/link';

// Check up programmatic routing ! for routing with a button instead of Link and a tag
// Navigation happens on client side = fast.
// Routes were defined at build time (hence fast)
export default () => {
    const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note: ${i}`}))
  
    return (
      <div>
        <h1>Notes</h1>
  
        {notes.map(note => (
          <div>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a>
                <strong>{note.title}</strong>
              </a>
            </Link>
          </div>
        ))}
      </div>
    )
  }
