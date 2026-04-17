import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    apellidosNombres: "",
    cedula: "",
    telefonoMovil: "",
    correo: "",
    rif: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContinuar = (e) => {
    e.preventDefault();
    alert("Formulario enviado correctamente.");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <div style={{ backgroundColor: "#ffffff", width: "100%", maxWidth: "520px", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", border: "1px solid #e5e7eb" }}>

        <div style={{ padding: "20px", borderBottom: "1px solid #e5e7eb" }}>
          <img
            src="https://bdvenlinea.banvenez.com/assets/login/logo.png"
            alt="BDV en línea personas"
            style={{ height: "56px", objectFit: "contain" }}
          />
        </div>

        <div style={{ padding: "16px 20px", textAlign: "center", borderBottom: "1px solid #e5e7eb" }}>
          <h1 style={{ fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#1f2937", margin: 0 }}>
            Solicitud de Preaprobado para Vehículos Nuevos y Usados
          </h1>
        </div>

        <div style={{ padding: "0 20px 24px 20px" }}>
          <div style={{ backgroundColor: "#CC0000", color: "#ffffff", textAlign: "center", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", padding: "8px", marginTop: "16px", marginBottom: "16px" }}>
            Datos del Cliente
          </div>

          <form onSubmit={handleContinuar} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>Apellidos y Nombres</label>
              <input type="text" name="apellidosNombres" value={form.apellidosNombres} onChange={handleChange} required
                style={{ width: "100%", border: "1px solid #d1d5db", padding: "8px 12px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>Cédula de Identidad</label>
              <input type="text" name="cedula" value={form.cedula} onChange={handleChange} required
                style={{ width: "100%", border: "1px solid #d1d5db", padding: "8px 12px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>Teléfono Móvil</label>
              <input type="tel" name="telefonoMovil" value={form.telefonoMovil} onChange={handleChange} required
                style={{ width: "100%", border: "1px solid #d1d5db", padding: "8px 12px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>Correo Electrónico</label>
              <input type="email" name="correo" value={form.correo} onChange={handleChange} required
                style={{ width: "100%", border: "1px solid #d1d5db", padding: "8px 12px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>RIF Personal</label>
              <input type="text" name="rif" value={form.rif} onChange={handleChange} required
                style={{ width: "100%", border: "1px solid #d1d5db", padding: "8px 12px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
            </div>

            <button type="submit"
              style={{ marginTop: "8px", backgroundColor: "#CC0000", color: "#ffffff", fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px", border: "none", cursor: "pointer", width: "100%" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#aa0000")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#CC0000")}
            >
              Continuar
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
