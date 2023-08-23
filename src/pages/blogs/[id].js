import React from 'react'
import Head from 'next/head';
import { BlogDetail } from '../../BlogDetail/BlogDetail';
import { Subcribe } from '../../Component/share/Subcribe';
import { MobileSubcribe } from '../../Component/share/mobileSubcribe';

const PostPage = () => {
  return (
    <>
             <Head>
        <title>
        Blogs     </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <BlogDetail/>
      <div className='desktopboxdisplay'><Subcribe/></div>
      <MobileSubcribe/>
    </>
  )
}

export default PostPage