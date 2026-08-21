import { useState, useEffect, useCallback, useRef } from 'react';
import { getAllProjects } from '../api/projectsApi.js';

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);

  const fetchProjects = useCallback(async () => {
    // Abort previous request
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const data = await getAllProjects(controller.signal);
      setProjects(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Failed to load projects');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, [fetchProjects]);

  return { projects, loading, error, retry: fetchProjects };
}
