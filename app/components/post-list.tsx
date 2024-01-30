export default function PostLists({posts}) {
  return (
    <>
    {
        posts?.map(post =>{
          const {
            id, 
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl,
            content
          } = post

          return (
            <PostCard 
              avatarUrl={avatarUrl}
              content={content}
              key= {id}
              userFullName={userFullName}
              userName={userName}
            />
          )
        })
      }
    </>
  )
}
