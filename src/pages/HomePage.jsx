import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';


const HomePage = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroTexts = [
    "Garantindo a precisão dos seus equipamentos para que você foque no que mais importa: a vida",
    "Suporte de emergência disponível 24/7 em Curitiba e Região Metropolitana, Atendendo também demandas no Paraná e Santa Catarina."
  ];

  const features = [
    {
      icon: Shield,
      title: 'Soluções Confiáveis',
      description: 'Serviços de manutenção certificados garantindo que o equipamento hospitalar opere com desempenho máximo.'
    },
    {
      icon: Clock,
      title: 'Suporte 24/7',
      description: 'Resposta de emergência 24 horas e serviços de manutenção preventiva.'
    },
    {
      icon: Award,
      title: 'Equipe Especializada',
      description: 'Técnicos altamente treinados com vasta experiência em equipamentos médicos.'
    },
    {
      icon: Users,
      title: 'Foco no Cliente',
      description: 'Dedicados a oferecer serviço excepcional adaptado às necessidades da sua instalação.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>ENG MEDICAL - Soluções Profissionais de Manutenção Hospitalar</title>
        <meta name="description" content="Principal fornecedor de soluções de manutenção hospitalar. Manutenção especializada de equipamentos médicos, manutenção preventiva e suporte de emergência 24/7 para instalações de saúde." />
      </Helmet>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Excelência em Engenharia Clínica e Manutenção Hospitalar
              </h1>
              <div className="h-32 mb-8 relative">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={textIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl text-gray-600 leading-relaxed absolute top-0 left-0 w-full"
                  >
                    {heroTexts[textIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Começar Agora
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg transition-all duration-300">
                    Nossos Serviços
                  </Button>
                </Link>
          
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img className="w-full h-[500px] lg:h-[650px] object-cover rounded-2xl" alt="Equipamento hospitalar moderno e instalação médica" src="src/image/imagemhomepage.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Por Que Escolher a ENG MEDICAL</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entregamos excelência em manutenção hospitalar com expertise, confiabilidade e dedicação.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Pronto para Começar?</h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Entre em contato hoje para soluções profissionais de manutenção hospitalar adaptadas às necessidades da sua instalação.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Contate-nos Agora
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;