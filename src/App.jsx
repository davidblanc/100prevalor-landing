import React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Shield } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/f17be90f-4705-4941-b7c5-2de18ecc7789/aca510ece9f288db433032740fa34f2c.png"
            alt="100prevalor logo"
            className="h-24 md:h-32 mx-auto mb-8"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Próximamente
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-white/90 mb-12"
        >
          Estamos construyendo una nueva forma de cotizar seguros, pensando en
          vos y en nuestro planeta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
        >
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <Heart className="w-12 h-12 mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Compromiso Social</h3>
            <p className="text-white/80">
              Creando un impacto positivo en nuestra comunidad
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <Leaf className="w-12 h-12 mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Sostenibilidad</h3>
            <p className="text-white/80">
              Comprometidos con el cuidado del medio ambiente
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <Shield className="w-12 h-12 mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Protección Integral</h3>
            <p className="text-white/80">
              Soluciones de seguros adaptadas a tus necesidades
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
