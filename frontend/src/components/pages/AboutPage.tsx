import { FiBookOpen, FiHeart, FiAward, FiUsers } from "react-icons/fi";

export const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
        Sobre Nosotros
      </h1>
      <p className="text-gray-600 text-center mb-12 text-lg">
        Tu librería de confianza para los amantes de la lectura
      </p>

      <div className="prose prose-gray max-w-none">
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-teal-100 p-3 rounded-full">
              <FiBookOpen className="text-teal-600 text-2xl" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 m-0">
              Nuestra Historia
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            La verdad es que no tenemos de eso ya que esto solo es un proyecto
            de clase de Jesus pero hay que j*** (aguantarse) y escribir algo
            como si esto fuese una tienda normal...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FiHeart className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 m-0">
                Nuestra Misión
              </h3>
            </div>
            <p className="text-gray-600">
              Aprobar, la verdad es que no hay otra..
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <FiAward className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 m-0">
                Nuestra Visión
              </h3>
            </div>
            <p className="text-gray-600">
              Con el ojo izquierdo al 100% pero con el derecho al 10%. La vida
              es dura pero se sigue adelante
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-8 text-white mb-8">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <FiUsers className="text-3xl" />
            <h2 className="text-2xl font-semibold m-0">Nuestra Comunidad</h2>
          </div>
          <p className="text-teal-100 text-center max-w-2xl mx-auto leading-relaxed">
            Los compañeros de clase que estuvieron ahí para acompañarme mientras
            hacia el trabajo en clase
          </p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-12">
        Gracias por ser parte de nuestra historia. ¡Feliz lectura!
      </p>
    </div>
  );
};
