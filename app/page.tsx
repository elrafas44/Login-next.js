"use client";

//Estados de los campos de texto: login y password
import { useState } from "react";
//Rutas de navegación
import { useRouter } from "next/navigation";
//Formularios
import { useForm } from "react-hook-form";
//imagenes
import Image from "next/image";


export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = (data: { username: string; password: string }) => {
    if (data.username === "admin" && data.password === "1234") {
      router.push("/dashboard"); // Redirige a la página de bienvenida
    } else {
      alert("⚠️ Acceso inválido, credenciales erróneas");
      setError("⚠️ Acceso inválido, credenciales erróneas");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <Image src="/login.png" alt="Login" className="w-full h-40 object-cover rounded-md mb-4" />
       
        <h2 className="text-2xl font-semibold text-center mb-4">Iniciar Sesión</h2>

        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("username", { required: true })}
            className="w-full p-2 border rounded-md"
            placeholder="Usuario"
          />
          {errors.username && <p className="text-red-500 text-sm">El usuario es obligatorio</p>}

          <input
            {...register("password", { required: true })}
            type="password"
            className="w-full p-2 border rounded-md"
            placeholder="Contraseña"
          />
          {errors.password && <p className="text-red-500 text-sm">La contraseña es obligatoria</p>}

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
