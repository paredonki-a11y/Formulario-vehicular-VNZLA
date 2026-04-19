import { useState } from "react";

const FIELD_VALIDATORS = {
  apellidosNombres: (v) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{5,}$/.test(v.trim()),
  cedula: (v) => /^[VvEe]-?\d{6,9}$/.test(v.trim()),
  telefonoMovil: (v) => /^(0412|0414|0416|0424|0426)\d{7}$/.test(v.trim()),
  correo: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  rif: (v) => /^[JjVvEeGgPp]-\d{8}-\d$/.test(v.trim()),
};

const FIELD_HINTS = {
  cedula: "Ej: V-12345678",
  telefonoMovil: "Ej: 04141234567",
  rif: "Ej: J-12345678-9",
};

export default function App() {
  const [form, setForm] = useState({
    apellidosNombres: "",
    cedula: "",
    telefonoMovil: "",
    correo: "",
    rif: "",
  });
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const isValid = (field) => FIELD_VALIDATORS[field](form[field]);
  const showError = (field) => touched[field] && !isValid(field);
  const formValid = Object.keys(FIELD_VALIDATORS).every(isValid);

  const handleContinuar = (e) => {
    e.preventDefault();
    if (!formValid) return;
    alert("Formulario enviado correctamente.");
  };

  const inputStyle = (field) => ({
    width: "100%",
    border: `1px solid ${showError(field) ? "#CC0000" : "#d1d5db"}`,
    padding: "8px 12px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  });

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
              <input type="text" name="apellidosNombres" value={form.apellidosNombres}
                onChange={handleChange} onBlur={handleBlur}
                style={inputStyle("apellidosNombres")} />
              {showError("apellidosNombres") && <span style={{ fontSize: "11px", color: "#CC0000" }}>Ingrese nombre completo (solo letras)</span>}
            </div>

            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>Cédula de Identidad</label>
              <input type="text" name="cedula" value={form.cedula} placeholder={FIELD_HINTS.cedula}
                onChange={handleChange} onBlur={handleBlur}
                style={inputStyle("cedula")} />
              {showError("cedula") && <span style={{ fontSize: "11px", color: "#CC0000" }}>Formato inválido. {FIELD_HINTS.cedula}</span>}
            </div>

            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>Teléfono Móvil</label>
              <input type="tel" name="telefonoMovil" value={form.telefonoMovil} placeholder={FIELD_HINTS.telefonoMovil}
                onChange={handleChange} onBlur={handleBlur}
                style={inputStyle("telefonoMovil")} />
              {showError("telefonoMovil") && <span style={{ fontSize: "11px", color: "#CC0000" }}>Debe ser un número venezolano válido. {FIELD_HINTS.telefonoMovil}</span>}
            </div>

            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>Correo Electrónico</label>
              <input type="email" name="correo" value={form.correo}
                onChange={handleChange} onBlur={handleBlur}
                style={inputStyle("correo")} />
              {showError("correo") && <span style={{ fontSize: "11px", color: "#CC0000" }}>Ingrese un correo válido</span>}
            </div>

            <div>
              <label style={{ display: "block", fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>RIF Personal</label>
              <input type="text" name="rif" value={form.rif} placeholder={FIELD_HINTS.rif}
                onChange={handleChange} onBlur={handleBlur}
                style={inputStyle("rif")} />
              {showError("rif") && <span style={{ fontSize: "11px", color: "#CC0000" }}>Formato inválido. {FIELD_HINTS.rif}</span>}
            </div>

            <button type="submit" disabled={!formValid}
              style={{
                marginTop: "8px",
                backgroundColor: formValid ? "#CC0000" : "#d1d5db",
                color: formValid ? "#ffffff" : "#9ca3af",
                fontWeight: "700", fontSize: "13px", textTransform: "uppercase",
                letterSpacing: "0.1em", padding: "14px", border: "none",
                cursor: formValid ? "pointer" : "not-allowed", width: "100%",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) => { if (formValid) e.currentTarget.style.backgroundColor = "#aa0000"; }}
              onMouseOut={(e) => { if (formValid) e.currentTarget.style.backgroundColor = "#CC0000"; }}
            >
              Continuar
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
