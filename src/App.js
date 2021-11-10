import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alışveriş Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura Öde", tamamlandi: true }
];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState("");
  console.log(yeniBaslik);

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">

        <input
          value={yeniBaslik}
          onChange={(e) => setYeniBaslik(e.target.value)}
          placeholder="listeye ekle" />
        <button
          onClick={() => {

            setListe([...liste, { id: Date.now(), baslik: yeniBaslik, completed: false }]);
            setYeniBaslik("");
            }
          }
        >Ekle
        </button>

      </div>
      <div className="liste">
        {liste.map(item =>
          <div

            key={item.id}
            onClick={() => {
              setListe(liste.map(el => el.id === item.id ? { ...el, tamamlandi: !el.tamamlandi } : el))
            }} className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>)}

        {/* <div>YApılacaklar</div>
        <div className="yapildi">Yapıldı</div> */}
      </div>
      <button className="temizle">Tamamlananları Temizle</button>
    </div>
  );
}
