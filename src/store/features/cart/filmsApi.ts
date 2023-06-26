import { createApi } from "@reduxjs/toolkit/query/react";

export const filmsApi = createApi({
  baseQuery: { baseUrl: "http://localhost:3001" },
});
