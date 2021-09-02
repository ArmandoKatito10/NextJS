import React from 'react'
import Link from 'next/link'

const page = () => (
<div>
    <h1>Index Path</h1>
    <Link href="/note/[id].jsx" as ={'/note/1'}>
    <a>
        Link
    </a>
    </Link>
</div>)

export default page