import { useState, useEffect, useCallback, useRef } from 'react';
import { getCategories } from '../api/categoriesApi.js';

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);

  const fetchCategories = useCallback(async () => {
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const data = await getCategories(controller.signal);
      setCategories(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Failed to load categories');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, [fetchCategories]);

  return { categories, loading, error, retry: fetchCategories };
}
