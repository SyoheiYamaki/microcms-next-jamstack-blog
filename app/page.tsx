import Link from "next/link";
import { client } from '../libs/client';

export default async function Page() {
  const data = await client.getList({ endpoint: 'blog' })

  return (
    <div>
      <h1 className="text-3xl">記事一覧</h1>
      <ul className="mt-6">
        {data.contents.map((blog) => (
          <li key={blog.id} className="mt-2">
            <Link href={`/blog/${blog.id}`}　className="hover:underline">
            { blog.title }
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
