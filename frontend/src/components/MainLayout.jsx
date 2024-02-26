// MainLayout.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <Sidebar />
      <Header />
      <Container style={{ marginLeft: "200px", marginTop: "200px" }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
