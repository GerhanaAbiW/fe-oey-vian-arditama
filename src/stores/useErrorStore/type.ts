export interface ErrorStore {
  error: string | null;
  setError: (error: string) => void;
  clearError: () => void;
}
