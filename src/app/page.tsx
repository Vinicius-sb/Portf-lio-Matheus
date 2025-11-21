'use client'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi'

export default function Home() {
  return (
    <main id="home">
      <Navbar />
      <section className="pt-24 md:pt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid md:grid-cols-[1fr,320px] gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Olá, eu sou o Matheus.
            </h1>
  
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Publicitário focado em criar experiências digitais rápidas,
              acessíveis e elegantes. Aqui estão minhas competências,
              habilidades e como falar comigo.
            </p>
            <div className="flex gap-3">
              <a href="#contact" className="px-4 py-2 bg-brand text-white rounded hover:bg-brand/90">
                Falar comigo
              </a>
              <a href="#skills" className="px-4 py-2 border rounded hover:border-brand">
                Ver competências
              </a>
            </div>
          </motion.div>

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="justify-self-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-brand/20 shadow-lg">
              {/* Substitua /foto.jpg pela sua foto em public/foto.jpg */}
              <Image
                src="/foto.jpg"
                alt="Foto de Matheus"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 256px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competências e Habilidades */}
      <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Competências e habilidades</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Tecnologias" items={[
            'Word avançado, Excell avançado, Power Point avançado',
            'Banco de dados básico, Storytelling',
            'SEO e Marketing de conteúdo',
          ]} />
          <Card title="Formação" items={[
            'CURSANDO - Publicidade e propaganda - UDF Brasília',
            '2023 - Colégio Estadual da Polícia Militar de Goiás Fernando Pessoa - Valparaíso/GO',
        
          ]} />
          <Card title="Experiência Profissional" items={[
            'out/2021 a set/2023 - Rede Nacional de Aprendizagem',
            'Auxiliar de escritório',
            
          ]} />
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16 mb-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contato</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <ContactItem icon={<FiMail />} label="Email" value="matheussantos01234@gmail.com" href="mailto:matheussantos01234@gmail.com" />
            <ContactItem icon={<FiPhone />} label="Telefone" value="+55 (61) 9 8173-8031" href="#" />
            <ContactItem icon={<FiLinkedin />} label="LinkedIn" value="..." href="#" />
            <ContactItem icon={<FiGithub />} label="GitHub" value="..." href="#" />
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <div>
              <label className="block text-sm mb-1">Nome</label>
              <input className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800" placeholder="Seu nome" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="block text-sm mb-1">Mensagem</label>
              <textarea rows={4} className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800" placeholder="Como posso ajudar?"></textarea>
            </div>
            <button className="px-4 py-2 bg-brand text-white rounded hover:bg-brand/90">Enviar</button>
          </form>
        </div>
      </section>
    </main>
  )
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border rounded-lg p-5 hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand"></span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ContactItem({
  icon, label, value, href,
}: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-3 p-3 border rounded hover:border-brand">
      <span className="text-brand">{icon}</span>
      <div>
        <div className="text-sm">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </a>
  )
}