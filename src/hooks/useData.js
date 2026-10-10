import { useState, useEffect, useCallback } from 'react';
import apiService from '../services/apiService';

export function useAsyncData(asyncFunction, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunction();
      setData(result);
    } catch (err) {
      console.error('[useAsyncData Error]:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, deps);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

export function useHeroSlides() {
  return useAsyncData(() => apiService.getHeroSlides());
}

export function useProducts(filters = {}) {
  const { category = 'all', brand = 'all', search = '' } = filters;
  return useAsyncData(
    () => apiService.getProducts({ category, brand, search }),
    [category, brand, search]
  );
}

export function useRentalOptions() {
  return useAsyncData(() => apiService.getRentalOptions());
}

export function useSiteConfig() {
  return useAsyncData(() => apiService.getSiteConfig());
}

export function useFAQData() {
  return useAsyncData(() => apiService.getFAQ());
}

export function useIndustriesWeServe() {
  return useAsyncData(() => apiService.getIndustriesWeServe());
}

export function useSnapshotExcellence() {
  return useAsyncData(() => apiService.getSnapshotExcellence());
}

export function useHappyCustomers() {
  return useAsyncData(() => apiService.getHappyCustomers());
}
