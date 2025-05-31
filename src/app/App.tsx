import { QueryClientProvider } from "@tanstack/react-query"
import { QueryClient } from "@tanstack/react-query"
import { Router } from "./providers/router"

const queryClient = new QueryClient()

export const App = () => {
    
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    )
}