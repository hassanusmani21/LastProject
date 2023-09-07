import { Route, Routes } from "react-router-dom";
import { Login } from '../Component/Login';
import { Header } from '../Component/Header';
import { PageNotFound } from "../Component/PageNotFound";
import { Singup } from "../Component/Singup";
import { Form } from "../Component/FormValue";
import { DataFetchingComponent } from "../Component/dataFetch";
import ErrorBoundary from "../ErrorBoudries";

export function AllRoutes() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/dashboard" element={ 
          <ErrorBoundary> <DataFetchingComponent/> </ErrorBoundary>} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
