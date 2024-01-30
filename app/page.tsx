import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { AuthButtonServer } from './components/auth-button-server'; 
import { redirect } from 'next/navigation';
import PostCard from './components/post-card'
import PostLists from './components/post-list';

export default async function Home () {
  const supabase = createServerComponentClient({cookies})
  const {data: { session }} = await supabase.auth.getSession()

  if (session === null ){
    redirect ('/login')
  }
  const {data : posts} = await supabase
  .from ('posts')
  .select('*, users(name, avatar_url, user_name)')

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <section className='max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen'>
        <AuthButtonServer />
        <PostCard/>
        <PostLists posts={posts}/>
      </section>
      
      
      
    </main>
  )
}
