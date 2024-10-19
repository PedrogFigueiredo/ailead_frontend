"use client";

import React, { useEffect, useState } from 'react';

const endpoint = 'https://n8n.ailead.com.br/webhook/3f973808-4cee-4272-a41e-d86c1b8124d6';

const ApiComponent = ({ onDataFetched }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: 'Retorne uma lista de frutas em ordem alfábetica',
          }),
        });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Recurso não encontrado (404)');
          } else if (response.status === 500) {
            throw new Error('Erro interno do servidor (500)');
          } else {
            throw new Error(`Erro HTTP! status: ${response.status}`);
          }
        }

        const result = await response.json();
        setData(result);
        if (onDataFetched) {
          onDataFetched(result);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [onDataFetched]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Dados da API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ApiComponent;