import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        useErrorBoundary: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      },
      mutations: {
        useErrorBoundary: false,
      },
    },
  });