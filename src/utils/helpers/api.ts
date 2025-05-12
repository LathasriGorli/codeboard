type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface Payload {
    method?: Method;
    body?: any; 
    headers?: Record<string, string>;
}

export const fetcher = async <T>(endpoint: string, options: Payload = {}): Promise<T> => {
    const { method = 'GET', body, headers } = options;

    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        });
        console.log(endpoint)

        if (!res.ok) {
            const errorBody = await res.json().catch(() => ({ message: 'Unknown error' }));
            throw new Error(errorBody.message || 'API Error');
        }

  
        const json = await res.json();
        return json.data as T;
    } catch (error) {
        
        throw new Error(error instanceof Error ? error.message : 'Unexpected error');
    }
    
};
