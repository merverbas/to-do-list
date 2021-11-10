import React, {useState} from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi : false },
  { id: 2, baslik: "Fatura ode", tamamlandi: false }
];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);

  return(
    <div className="App">
      <h1>YApılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input placeholder="listeye ekle" />
        <button>Ekle</button>
      </div>
      <div className="liste">
        <div>YApılacaklar</div>
        <div className="yapildi">Yapıldı</div>
      </div>
      <button className="temizle">Tamamlananları Temizle</button>
    </div>
  );
}
export default App;