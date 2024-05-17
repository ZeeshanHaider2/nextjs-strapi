
const page = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate:3
  }
});
  const data = await response.json();
  console.log(response);
  return (
    <main>
      <h1>Blog</h1>
      </main>
  )
}

export default page