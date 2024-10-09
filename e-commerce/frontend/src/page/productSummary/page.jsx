import React from 'react'
import ProductSummery from '../../components/productSummary/page'
import Nav from '../../components/navbar/nav'
export default function page() {
  return (
    <div
    style={{
      maxWidth: "1220px",
      height: "100vh",
      width: "100%",
      padding: "10px",
      position: "relative",
    }}
  >
    <Nav />
    <ProductSummery />
    </div>
  )
}
