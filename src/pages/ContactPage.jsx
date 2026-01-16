import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Informações Faltando",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Envio de Formulário",
      description: "🚧 Este recurso ainda não está implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

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
              Fale com nossa equipe para soluções profissionais de manutenção hospitalar. Estamos aqui para ajudar 24/7.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Fale Conosco</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Tem dúvidas sobre nossos serviços? Precisa de suporte de manutenção de emergência? Nossa equipe especializada está pronta para ajudá-lo. Entre em contato hoje e descubra como podemos ajudar a manter os equipamentos e operações da sua instalação médica.
                </p>
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
                    <h3 className="font-semibold text-blue-900 mb-2">Ligue para Nós</h3>
                    <p className="text-gray-600">Disponível 24/7 para emergências</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Área de Atuação</h3>
                    <p className="text-gray-600">Atendendo Instalações Médicas em Todo o País</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Suporte de Emergência</h3>
                <p className="text-blue-50 mb-4">
                  Para necessidades urgentes de manutenção ou falhas de equipamento, nossa equipe de resposta a emergências está disponível 24 horas por dia para garantir o mínimo de interrupção nas suas operações.
                </p>
                <p className="font-semibold">Tempo de Resposta: &lt; 2 Horas</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Envie uma Mensagem</h2>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="João Silva"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Endereço de E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="joao@exemplo.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Número de Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                    placeholder="Conte-nos sobre suas necessidades de manutenção..."
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enviar Mensagem
                  <Send className="ml-2" size={20} />
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Retornaremos em até 24 horas
                </p>
              </form>
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