import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Zap, Heart } from 'lucide-react';
import aboutImg from '@/image/quemsomos.jpg';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Rigor técnico em cada detalhe.'
    },
    {
      icon: Users,
      title: 'Relacionamentos de Longo Prazo',
      description: 'Parceria e transparência com nossos clientes.'
    },
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Atualização constante com as novas tecnologias médicas.'
    },
    {
      icon: Heart,
      title: 'Cuidado',
      description: 'Entendemos a importância humana por trás de cada máquina.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nós - ENG MEDICAL Soluções de Manutenção Hospitalar</title>
        <meta name="description" content="Saiba mais sobre a missão da ENG MEDICAL de fornecer soluções excepcionais de manutenção hospitalar. Equipe especializada, histórico comprovado e compromisso com a excelência em saúde." />
      </Helmet>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-blue-900 mb-6">Sobre a ENG MEDICAL</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Seu parceiro de confiança em soluções de manutenção hospitalar, dedicado a garantir o desempenho ideal e a segurança das instalações médicas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img className="w-full rounded-2xl shadow-2xl" alt="Técnico de manutenção médica trabalhando em equipamento hospitalar" src={aboutImg} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-blue-900">Quem Somos</h2>
              <p className="text-gray-600 leading-relaxed">
                A ENG MEDICAL é uma fornecedora líder de soluções abrangentes de manutenção hospitalar. Com anos de experiência na indústria da saúde, entendemos a importância crítica de manter equipamentos e instalações médicas nos mais altos padrões.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe de técnicos certificados combina expertise técnica com um profundo compromisso com a segurança e o cuidado do paciente. Trabalhamos 24 horas por dia para garantir que as instalações de saúde possam operar sem interrupção, proporcionando tranquilidade aos profissionais médicos e pacientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-10 text-white"
            >
              <Target className="text-green-300 mb-4" size={48} />
              <h2 className="text-3xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-blue-100 leading-relaxed text-lg">
                Fornecer soluções de excelência em manutenção e gestão de equipamentos hospitalares, garantindo a operação contínua e a segurança técnica necessária para o cuidado com a saúde.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-10 text-white"
            >
              <Eye className="text-blue-300 mb-4" size={48} />
              <h2 className="text-3xl font-bold mb-4">Nossa Visão</h2>
              <p className="text-green-100 leading-relaxed text-lg">
                 Ser a referência em engenharia clínica no Sul do Brasil, estabelecendo um padrão de excelência no atendimento a instituições de saúde e consolidando parcerias baseadas em confiança e resultados.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Nossos Valores Fundamentais</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam tudo o que fazemos na ENG MEDICAL
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Comprometidos com a Excelência</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Na ENG MEDICAL, não apenas mantemos equipamentos — mantemos a confiança que os prestadores de saúde depositam em nós. Nossa dedicação à qualidade, segurança e confiabilidade nos torna a escolha preferida para soluções de manutenção hospitalar.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600 font-medium">Suporte de Emergência</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-gray-600 font-medium">Satisfação do Cliente</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">Expert</div>
                <p className="text-gray-600 font-medium">Equipe Certificada</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;