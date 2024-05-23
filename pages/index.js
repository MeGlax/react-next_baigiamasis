import Header from "../components/organisms/Header/Header";
import CardsWrapper from "../components/organisms/CardsWrapper/CardsWrapper";
import axios from "axios";
import { useEffect } from "react";
export default function Home() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <CardsWrapper />
    </div>
  );
}
