type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type TodoWithoutId = Omit<Todo, 'id'>;

type TodoUpdate = {
    [K in keyof TodoWithoutId]?: Todo[K];
}

type TodoId = Todo['id']

async function request<T>(
    url: RequestInfo, 
    options?: RequestInit
): Promise<T> {
    const resp = await fetch(url, options);
    if(!resp.ok) throw new Error(`HTTP Error: ${resp.status}`);

    return await resp.json();
}

(async () => { // IIFE do obsługi async/await
    const url = 'https://post.api';
    const body: TodoUpdate = { title: 'new title' };
    const id: TodoId = 21;
    try {
        const data = await request<TodoId | null>(
            `${url}/${id}`, 
            { 
                method: 'POST',
                body: JSON.stringify(body) 
            }
        );

        console.log(data); // number | null
    } catch(err) {
        if(err instanceof Error) {
            console.error(err.message)
        }

        console.error(err)
    };
})();