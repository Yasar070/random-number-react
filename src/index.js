import React from "react"
import ReactDom from "react-dom/client"
import Random from "./Random"
import "./style.css"

const root=ReactDom.createRoot(document.getElementById("root"))

root.render(<Random/>)