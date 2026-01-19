import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Wrench, Clock, Shield, CheckCircle, Activity, Settings, AlertCircle, FileText } from 'lucide-react';
import servicesImg from '@/image/servicos.jpg';

const ServicesPage = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Manutenção Preventiva e Corretiva:',
      description: ' Inspeções rigorosas e reparos ágeis para evitar interrupções e maximizar a vida útil dos seus ativos.',
      features: [
        
      ]
    },
    {
      icon: AlertCircle,
      title: 'Gestão de Equipamentos (Engenharia Clínica):',
      description: 'Estratégias completas que abrangem desde o inventário e aquisição até o descarte seguro, garantindo máxima eficiência operacional.',
      features: [
        
      ]
    },
    {
      icon: Activity,
      title: 'Calibração e Testes de Segurança:',
      description: 'Ensaios rigorosos para assegurar a precisão dos diagnósticos e a total conformidade com as normas regulatórias vigentes.',
      features: [
       
      ]
    },
    {
      icon: Settings,
      title: 'Consultoria Técnica:',
      description: 'Apoio especializado na escolha de novas tecnologias, garantindo investimentos inteligentes alinhados às necessidades da sua instituição.',
      features: [
       
      ]
    },
    {
      icon: Shield,
      title: 'Treinamento e Capacitação:',
      description: 'Programas de educação continuada para equipes de saúde, focados no uso correto, seguro e eficiente de cada dispositivo.',
      features: [
       
      ]
    },
    {
      icon: FileText,
      title: 'Contratos de Manutenção',
      description: 'Acordos de manutenção flexíveis adaptados às necessidades específicas e orçamento da sua instalação.',
      features: [
        
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nossos Serviços - ENG MEDICAL Soluções de Manutenção Hospitalar</title>
        <meta name="description" content="Serviços abrangentes de manutenção hospitalar, incluindo manutenção preventiva, reparos de emergência, calibração de equipamentos, inspeções de segurança e suporte 24/7 para instalações médicas." />
      </Helmet>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-blue-900 mb-6">Nossos Serviços</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Soluções abrangentes de manutenção hospitalar projetadas para manter sua instalação médica operando com desempenho máximo.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img className="w-full rounded-2xl shadow-2xl" alt="Serviços de manutenção hospitalar e equipamentos médicos" src={servicesImg} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-blue-900">Soluções Completas de Manutenção</h2>
              <p className="text-gray-600 leading-relaxed">
                Nossa gama abrangente de serviços cobre todos os aspectos da manutenção hospitalar, desde cuidados preventivos de rotina até reparos de emergência. Garantimos que seu equipamento médico permaneça confiável, seguro e em conformidade com todos os padrões regulatórios.
              </p>
              <div className="flex items-start gap-4 bg-blue-50 rounded-lg p-4">
                <Clock className="text-blue-600 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Disponível 24/7 para emergências Curitiba e Região Metropolitana</h3>
                  <p className="text-gray-600 text-sm">Suporte 24 horas para todas as suas necessidades de manutenção</p>
                </div>
              </div>

                 <div className="flex items-start gap-4 bg-blue-50 rounded-lg p-4">
                <Clock className="text-blue-600 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Atendimentos no Paraná e Santa Catarina</h3>
                  <p className="text-gray-600 text-sm"></p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-green-50 rounded-lg p-4">
                <CheckCircle className="text-green-600 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Experts Certificados</h3>
                  <p className="text-gray-600 text-sm">Técnicos altamente treinados com vasta experiência</p>
                </div>
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
            <h2 className="text-4xl font-bold text-blue-900 mb-4">O Que Oferecemos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Serviços profissionais adaptados para atender às necessidades únicas da sua instalação de saúde
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Por Que Nossos Serviços Se Destacam</h2>
            <p className="text-xl text-blue-50 mb-12 leading-relaxed">
              Combinamos expertise técnica, tempos de resposta rápidos e um profundo compromisso com a segurança do paciente para oferecer serviços de manutenção hospitalar incomparáveis.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">Rápido</div>
                <p className="text-blue-100">Resposta rápida a todas as solicitações de manutenção</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">Confiável</div>
                <p className="text-blue-100">Qualidade consistente em todos os serviços</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">Certificado</div>
                <p className="text-blue-100">Profissionais totalmente licenciados e segurados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;