const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

interface DataType {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const getData = async (url: string): Promise<DataType[]> => {
    const response = await fetch(url, {method: "GET"});
    const data: DataType[] = await response.json();
    return data;
}

getData(COMMENTS_URL)
  .then(data => {
    data.map((d) => {
        console.log("ID: " + d.id + ", " + "Email: " + d.email  )
    })
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */