import React from 'react'

function blog() {
    const blogs_list = [];
    return (
        <section>
            <div className='container pt-3'>
                <div className='row'>
                    <h1 className='p-0'>Blog</h1>
                    <hr/>
                    {blogs_list.length > 0  ? "Blog" : "Will add soon..."}
                </div>
            </div>
        </section>
    )
}

export default blog