
const page = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(response);
  return (
    <main>
      <h1>Blog</h1>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      </main>
  )
}

export default page