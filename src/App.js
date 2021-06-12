import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  return (
    <Fragment>
      <h3>Clima nas suas Coordenadas (Exemplo)</h3>
      <hr />
      <ul>
        <li>Temperatura atual: x</li>
        <li>Temperatura máxima: x</li>
        <li>Temperatura mínima: x</li>
        <li>Pressão: x hpa</li>
        <li>Unidade: x%</li>
      </ul>
    </Fragment>
  );
}
