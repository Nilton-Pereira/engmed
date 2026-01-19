import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Entre em Contato - ENG MEDICAL Soluções de Manutenção Hospitalar</title>
        <meta name="description" content="Entre em contato com a ENG MEDICAL para soluções profissionais de manutenção hospitalar. Contate-nos via e-mail engmedical@gmail.com ou preencha nosso formulário de contato para uma resposta rápida." />
      </Helmet>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-blue-900 mb-6">Entre em Contato</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fale com nossa equipe para soluções profissionais de manutenção hospitalar. Estamos aqui para ajudar.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Fale Conosco</h2>
                
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Envie um E-mail</h3>
                    <a href="mailto:engmedical@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      engmedical@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Ligue para Nós - (041) 99999-9999</h3>
                    <p className="text-gray-600">Disponível 24/7 para emergências Curitiba e Região Metropolitana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Área de Atuação</h3>
                    <p className="text-gray-600"> Atendimento 24h no Paraná e Santa Catarina.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Suporte de Emergência</h3>
                <p className="text-blue-50 mb-4 whitespace-pre-line">
                  {`Para garantir tranquilidade e segurança operacional, oferecemos suporte de emergência 24 horas, com resposta rápida para situações críticas.

Tempo de Resposta Garantido:

Curitiba e Região Metropolitana: até 2 horas.

Outras cidades do Paraná e Santa Catarina: atendimento com agendamento prévio, alinhado conforme a necessidade do cliente e logística de deslocamento.`}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Por Que Contatar a ENG MEDICAL?</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Quando você entra em contato conosco, está se conectando com uma equipe de profissionais dedicados comprometidos com a excelência na manutenção hospitalar.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">Rápido</div>
                <p className="text-gray-600">Resposta rápida a todas as consultas</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">Expert</div>
                <p className="text-gray-600">Orientação e suporte profissional</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">Confiável</div>
                <p className="text-gray-600">Soluções de manutenção confiáveis</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;