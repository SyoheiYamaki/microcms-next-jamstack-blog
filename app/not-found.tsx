import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='text-center mt-10 '>
      <h2 className='text-3xl'>404</h2>
      <p className='mt-6'>ページが見つかりませんでした。</p>
      <Link href="/" className='inline-block mt-3 hover:underline'>TOPに戻る</Link>
    </div>
  )
}
