// src/app/HomePage.js
"use client";

import React, { useState } from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import HomeComponent from "@/components/HomeComponent";
import ApiComponent from "@/components/ApiComponent";

export default function HomePage() {
  const [apiData, setApiData] = useState(null);

  const handleDataFetched = (data) => {
    setApiData(data);
  };

  return (
    
    <MasterLayout>
      <HomeComponent />
      <ApiComponent onDataFetched={handleDataFetched} />
      {apiData && (
        <div>
          <h2>Dados Recebidos na Página </h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </MasterLayout>
  );
}