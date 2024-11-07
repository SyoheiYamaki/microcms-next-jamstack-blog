import { client } from "@/libs/client";
import Link  from 'next/link';
import type { Metadata } from 'next';
import styles from '../[id]/index.module.scss';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const data = await client.getList({ endpoint: 'blog' })
  return data.contents.map((content) => ({
    id: content.id
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogId = (await params).id
  const blog = await client.getListDetail({
    endpoint: 'blog',
    contentId: blogId
  })

  return {
    title: blog.title
  }
}

export default async function Page ({ params }: Props) {
  const blogId = (await params).id
  const blog = await client.getListDetail({
    endpoint: 'blog',
    contentId: blogId
  })

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <p>{blog.category && blog.category.name}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`
        }}
        className={styles.post}
      />
      <Link href={"/"} className="inline-block mt-8">戻る</Link>
    </main>
  )
}
