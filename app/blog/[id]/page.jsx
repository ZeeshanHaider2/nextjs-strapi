const page = async({params}) => {
    
    const {id } = params;  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
    
    next: {
        revalidate:3
    },
  });
  const data = await response.json();
  return (
    <div>
        <h1>individual page:{id}</h1>
        <p>{data.title}</p>
    </div>
  )
}

export default page