import logo from "./logoAgs.png";
import "./App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InvoiceInfo() {
  const navigate = useNavigate();
  const [facture, setFacture] = useState([
    {
      MarqueVoiture: "",
      matriculeVoiture: "",
      nomPrenom: "",
      matriculeFiscal: "",
      Remise: "",
      Services: [],
    },
  ]);
  const [Services, SetServices] = useState([
    {
      ref: "",
      description: "",
      price: "",
      qte: "",
    },
  ]);

  const editeItemRef = (pos, ref) => {
    Services.map((item, index) => {
      if (index === pos) {
        item.ref = ref;
      }
    });
  };
  const editeItemPrice = (pos, price) => {
    Services.map((item, index) => {
      if (index === pos) {
        item.price = price;
      }
    });
  };
  const editeItemDescription = (pos, description) => {
    Services.map((item, index) => {
      if (index === pos) {
        item.description = description;
      }
    });
  };
  const editeItemQte = (pos, qte) => {
    Services.map((item, index) => {
      if (index === pos) {
        item.qte = qte;
      }
    });
  };
  const addItem = (e) => {
    e.preventDefault();
    SetServices([
      ...Services,
      {
        ref: "",
        description: "",
        price: "",
        qte: "",
      },
    ]);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    facture[0].Services = Services;
    navigate("/invoice", { state: { facture: facture } });
  };
  return (
    <div id="wrapper" className="container">
      <div style={{}}>
        <br />
        <center>
          <img src={logo} height="200px" />
        </center>
        <br />
      </div>
      <div className="row">
        <div className="col-12">
          <div id="html_div">
            <form onSubmit={onSubmitForm}>
              <label>
                <h2>Information du voiture</h2>
              </label>
              <br />
              <input
                required
                type="text"
                name="marque"
                placeholder="Marque du voiture"
                onChange={(e) => {
                  facture[0].MarqueVoiture = e.target.value;
                }}
              />
              <br />
              <input
                required
                type="text"
                name="matricule"
                placeholder="Matricule du voiture"
                onChange={(e) => {
                  facture[0].matriculeVoiture = e.target.value;
                }}
              />
              <br />
              <input
                required
                type="text"
                name="client"
                placeholder="Nom et Prénom"
                onChange={(e) => {
                  facture[0].nomPrenom = e.target.value;
                }}
              />
              <br />
              <input
                type="text"
                name="mf"
                placeholder="matricule fiscal (en cas d'entreprise)"
                onChange={(e) => {
                  facture[0].matriculeFiscal = e.target.value;
                }}
              />
              <br />
              <input
                required
                type="text"
                name="discount"
                placeholder="Remise en % mais 0 si il y'a pas de remise "
                onChange={(e) => {
                  facture[0].Remise = e.target.value;
                }}
              />
              <br />
              <br />
              <label>
                <h2>Services et prix</h2>
              </label>
              <br />
              {Services?.map((item, index) => {
                return (
                  <div className="input-side">
                    <div className="col-3">
                      <input
                        required
                        onChange={(e) => editeItemRef(index, e.target.value)}
                        type="text"
                        placeholder={"Ref " + (index + 1)}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        required
                        onChange={(e) =>
                          editeItemDescription(index, e.target.value)
                        }
                        type="text"
                        placeholder={"Désignation " + (index + 1)}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        required
                        onChange={(e) => editeItemQte(index, e.target.value)}
                        type="text"
                        placeholder={"Quantité " + (index + 1)}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        required
                        onChange={(e) => editeItemPrice(index, e.target.value)}
                        type="text"
                        placeholder={"Prix service " + (index + 1) + " HT"}
                      />
                    </div>
                  </div>
                );
              })}
              <button className="btn-add" onClick={addItem}>
                Ajouter une une autre Service
              </button>
              <br />
              <button className="btn-add" type="submit">
                Générer une facture
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceInfo;
